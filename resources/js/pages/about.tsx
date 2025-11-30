import { Head, Link } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <Head title="About" />
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
                    <h1 className="mb-4 text-4xl font-bold">About</h1>
                    <div className="prose prose-lg dark:prose-invert">
                        <p className="mb-4 text-lg leading-relaxed">
                            This website is a simple quest log where I track and
                            document all the quests I'm working on. A quest can
                            be anything - a project to build, a skill to learn,
                            a goal to achieve, or an adventure to embark on.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            The idea behind "1000 Quests" is to break down life
                            into manageable, trackable goals. Each quest has its
                            own page where I can write about my progress,
                            challenges, and learnings - like a blog post for
                            each quest.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            This website itself is built with Laravel, Inertia.js,
                            React, and TypeScript. It's designed to be simple and
                            easy to manage - quests are stored in a PHP file that
                            can be easily edited.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Check out my{' '}
                            <Link
                                href="/quests"
                                className="font-medium text-[#f53003] underline underline-offset-4 hover:text-[#d42802] dark:text-[#FF4433]"
                            >
                                active quests
                            </Link>{' '}
                            to see what I'm currently working on!
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
