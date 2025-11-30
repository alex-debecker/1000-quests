<?php

namespace App\Data;

use League\CommonMark\CommonMarkConverter;

class Quests
{
    /**
     * Get the directory where quest files are stored
     */
    protected static function getQuestsDirectory(): string
    {
        return __DIR__ . '/Quests';
    }

    /**
     * Parse a Markdown file with frontmatter
     */
    protected static function parseMarkdownFile(string $filePath): ?array
    {
        if (!file_exists($filePath)) {
            return null;
        }

        $content = file_get_contents($filePath);

        // Parse frontmatter (YAML between --- markers)
        if (!preg_match('/^---\s*\n(.*?)\n---\s*\n(.*)$/s', $content, $matches)) {
            return null;
        }

        $frontmatter = trim($matches[1]);
        $markdown = trim($matches[2]);

        // Parse YAML frontmatter (simple key: value parser)
        $metadata = [];
        foreach (explode("\n", $frontmatter) as $line) {
            $line = trim($line);
            if (empty($line)) {
                continue;
            }
            if (preg_match('/^([^:]+):\s*(.+)$/', $line, $lineMatches)) {
                $key = trim($lineMatches[1]);
                $value = trim($lineMatches[2]);
                // Remove quotes if present
                $value = trim($value, '"\'');
                $metadata[$key] = $value;
            }
        }

        if (!isset($metadata['slug']) || !isset($metadata['title'])) {
            return null;
        }

        // Preprocess: Convert single line breaks to hard breaks (two spaces + newline)
        // This makes single line breaks create actual line breaks in the output
        // But preserve blank lines for paragraph breaks
        $lines = explode("\n", $markdown);
        $processed = [];
        for ($i = 0; $i < count($lines); $i++) {
            $line = $lines[$i];
            $nextLine = $lines[$i + 1] ?? '';
            $prevLine = $lines[$i - 1] ?? '';
            
            // If current line is blank, keep it as is (paragraph break)
            if (trim($line) === '') {
                $processed[] = '';
                continue;
            }
            
            // If previous line was blank, this is start of new paragraph - don't add hard break
            if (trim($prevLine) === '') {
                $processed[] = $line;
                continue;
            }
            
            // If next line is blank or starts with markdown syntax, don't add hard break
            if (trim($nextLine) === '' || preg_match('/^[#\-\*\d>]/', trim($nextLine))) {
                $processed[] = $line;
                continue;
            }
            
            // Add two spaces at end of line to create hard break
            $processed[] = rtrim($line) . '  ';
        }
        $markdown = implode("\n", $processed);
        
        // Convert Markdown to HTML
        $converter = new CommonMarkConverter([
            'html_input' => 'strip',
            'allow_unsafe_links' => false,
        ]);

        $htmlContent = $converter->convert($markdown)->getContent();

        return [
            'slug' => $metadata['slug'],
            'title' => $metadata['title'],
            'subtitle' => $metadata['subtitle'] ?? '',
            'content' => $htmlContent,
        ];
    }

    /**
     * Get all quests from Markdown files
     */
    public static function all(): array
    {
        $questsDir = self::getQuestsDirectory();
        $quests = [];

        if (!is_dir($questsDir)) {
            return [];
        }

        $files = glob($questsDir . '/*.md');

        foreach ($files as $file) {
            $quest = self::parseMarkdownFile($file);
            if ($quest !== null) {
                $quests[] = $quest;
            }
        }

        // Sort by slug for consistent ordering
        usort($quests, fn($a, $b) => strcmp($a['slug'], $b['slug']));

        return $quests;
    }

    /**
     * Find a quest by slug
     */
    public static function find(string $slug): ?array
    {
        $questsDir = self::getQuestsDirectory();
        $questFile = $questsDir . '/' . $slug . '.md';

        return self::parseMarkdownFile($questFile);
    }
}
