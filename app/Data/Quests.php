<?php

namespace App\Data;

class Quests
{
    /**
     * Get all quests
     */
    public static function all(): array
    {
        return [
            [
                'slug' => 'build-a-blog',
                'title' => 'Build a Blog',
                'subtitle' => 'Creating a personal blog from scratch',
                'content' => "This is my first quest! I'm working on building a personal blog from scratch. I want to learn about web development, content management, and writing.\n\nI'll be documenting my journey as I build this blog, including the challenges I face and the solutions I find.",
            ],
            [
                'slug' => 'learn-react',
                'title' => 'Learn React',
                'subtitle' => 'Mastering the React framework',
                'content' => "React is a powerful JavaScript library for building user interfaces. In this quest, I'm diving deep into React concepts like components, hooks, state management, and more.\n\nMy goal is to build several projects using React to solidify my understanding.",
            ],
            [
                'slug' => 'run-a-marathon',
                'title' => 'Run a Marathon',
                'subtitle' => 'Training for my first 26.2 miles',
                'content' => "Running a marathon has always been a dream of mine. This quest is about the physical and mental preparation needed to complete 26.2 miles.\n\nI'm following a training plan and documenting my progress, including the ups and downs of marathon training.",
            ],
        ];
    }

    /**
     * Find a quest by slug
     */
    public static function find(string $slug): ?array
    {
        foreach (self::all() as $quest) {
            if ($quest['slug'] === $slug) {
                return $quest;
            }
        }

        return null;
    }
}
