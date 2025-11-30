import { Head, Link } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
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
                    <h1 className="mb-4 text-center text-4xl font-bold">
                        You're not depressed. You need a quest.
                    </h1>
                    <div className="prose prose-lg dark:prose-invert">
                        <p className="mb-4 text-lg leading-relaxed">
                            This is my personal quest log where I document all
                            the adventures, challenges, and learning journeys I'm
                            undertaking. Each quest represents a goal, a skill to
                            learn, or an experience to have.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            Whether it's building a new project, learning a new
                            technology, or pursuing a personal goal, every quest
                            is a step forward in my journey.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Explore my{' '}
                            <Link
                                href="/quests"
                                className="font-medium text-[#f53003] underline underline-offset-4 hover:text-[#d42802] dark:text-[#FF4433]"
                            >
                                active quests
                            </Link>{' '}
                            or learn more{' '}
                            <Link
                                href="/about"
                                className="font-medium text-[#f53003] underline underline-offset-4 hover:text-[#d42802] dark:text-[#FF4433]"
                            >
                                about this project
                            </Link>
                            .
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
