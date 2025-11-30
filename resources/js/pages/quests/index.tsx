import { Head, Link } from '@inertiajs/react';

interface Quest {
    slug: string;
    title: string;
    subtitle: string;
}

interface Props {
    quests: Quest[];
}

export default function QuestsIndex({ quests }: Props) {
    return (
        <>
            <Head title="Quests" />
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
                    <h1 className="mb-4 text-4xl font-bold">My Quests</h1>
                    <p className="mb-8 text-lg text-[#706f6c] dark:text-[#A1A09A]">
                        Here are all the quests I'm currently working on. Click
                        on any quest to read more about it.
                    </p>

                    <div className="space-y-4">
                        {quests.map((quest) => (
                            <Link
                                key={quest.slug}
                                href={`/${quest.slug}`}
                                className="block rounded-lg border border-[#19140035] bg-white p-6 transition-all hover:border-[#1915014a] hover:shadow-md dark:border-[#3E3E3A] dark:bg-[#161615] dark:hover:border-[#62605b]"
                            >
                                <h2 className="mb-2 text-2xl font-semibold">
                                    {quest.title}
                                </h2>
                                <p className="text-[#706f6c] dark:text-[#A1A09A]">
                                    {quest.subtitle}
                                </p>
                            </Link>
                        ))}
                    </div>

                    {quests.length === 0 && (
                        <p className="text-lg text-[#706f6c] dark:text-[#A1A09A]">
                            No quests yet. Check back soon!
                        </p>
                    )}
                </main>
            </div>
        </>
    );
}
