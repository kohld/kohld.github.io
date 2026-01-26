'use client';

import { useState, useEffect } from 'react';
import githubData from '../../data/github-activity.json';

export default function GithubActivity() {
    const { user, featuredRepos, fetchedAt } = githubData;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section id="github" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#007AFF] to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src={user.avatarUrl}
                                alt={user.name}
                                className="relative w-24 h-24 rounded-full border-2 border-white/10"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">{user.name} on GitHub</h2>
                            <p className="text-gray-400 max-w-md">{user.bio}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
                        {[
                            { label: 'Repos', value: user.publicRepos },
                            { label: 'Followers', value: user.followers },
                            { label: 'Following', value: user.following },
                            { label: 'Stars', value: featuredRepos.reduce((acc: number, repo: any) => acc + repo.stars, 0) }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                <div className="text-2xl font-bold text-[#007AFF]">{stat.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {featuredRepos.map((repo: any, index: number) => (
                        <a
                            key={index}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-[#007AFF]/30 hover:-translate-y-2 overflow-hidden group flex flex-col h-full"
                        >
                            {/* Animated top border on hover */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#007AFF]/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[600ms]"></div>

                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 bg-[#007AFF]/10 rounded-lg group-hover:bg-[#007AFF]/20 transition-colors">
                                    <svg className="w-5 h-5 text-[#007AFF]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/20 rounded-full text-xs font-medium flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-sm shadow-yellow-500/50"></span>
                                        {repo.stars}
                                    </span>
                                    <span className="px-3 py-1 bg-white/5 text-gray-400 border border-white/10 rounded-full text-xs font-medium flex items-center gap-1.5">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                        {repo.forks}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#007AFF] transition-colors">
                                {repo.name}
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed line-clamp-2 flex-grow">
                                {repo.description || "No description provided."}
                            </p>

                            <div className="flex items-center justify-between text-xs font-medium pt-4 border-t border-white/10">
                                <span className="px-3 py-1.5 bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/20 rounded-full">
                                    {repo.language}
                                </span>
                                <span className="text-gray-500">
                                    {isMounted ? new Date(repo.updatedAt).toLocaleDateString() : ''}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center text-xs text-gray-600 italic">
                    Last synchronized: {isMounted ? new Date(fetchedAt).toLocaleString() : ''}
                </div>
            </div>
        </section>
    );
}
