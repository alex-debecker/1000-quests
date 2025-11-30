import { Head, Link } from '@inertiajs/react';

interface Quest {
    slug: string;
    title: string;
    subtitle: string;
    content: string;
}

interface Props {
    quest: Quest;
}

export default function QuestShow({ quest }: Props) {
    return (
        <>
            <Head title={quest.title} />
            <div className="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
                <nav className="border-b border-[#19140035] dark:border-[#3E3E3A]">
                    <div className="mx-auto max-w-4xl px-6 py-4">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                className="text-lg font-semibold hover:opacity-80"
                            >
                                1000 Quests
                            </Link>
                            <div className="flex gap-4">
                                <Link
                                    href="/quests"
                                    className="text-sm hover:underline"
                                >
                                    Quests
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-sm hover:underline"
                                >
                                    About
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <main className="mx-auto max-w-4xl px-6 py-12">
                    <Link
                        href="/quests"
                        className="mb-6 inline-block text-sm text-[#706f6c] hover:underline dark:text-[#A1A09A]"
                    >
                        ← Back to Quests
                    </Link>

                    <h1 className="mb-4 text-4xl font-bold">{quest.title}</h1>
                    <h2 className="mb-8 text-2xl font-semibold text-[#706f6c] dark:text-[#A1A09A]">
                        {quest.subtitle}
                    </h2>

                    <div className="prose prose-lg max-w-none dark:prose-invert">
                        <div className="whitespace-pre-line text-lg leading-relaxed">
                            {quest.content}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
