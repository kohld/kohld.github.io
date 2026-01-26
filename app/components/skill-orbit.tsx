'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    level: 1 | 2 | 3; // 1: Languages & Core, 2: Frameworks, Tools & Expertise, 3: Exploring
    color?: string;
}

const SKILLS: Skill[] = [
    // Orbit 1: Languages & Core
    { name: 'PHP', level: 1, color: '#4F5B93' },
    { name: 'MySQL', level: 1, color: '#4479A1' },
    { name: 'REST API', level: 1, color: '#007AFF' },

    // Orbit 2: Frameworks, Tools & Backend Expertise
    { name: 'Symfony', level: 2, color: '#000000' },
    { name: 'Pimcore', level: 2, color: '#E30613' },
    { name: 'Yii 2', level: 2, color: '#DAB92D' },
    { name: 'Doctrine', level: 2, color: '#FFAC12' },
    { name: 'RabbitMQ', level: 2, color: '#FF6600' },
    { name: 'Twig', level: 2, color: '#86B300' },

    // Orbit 3: Exploring
    { name: 'TypeScript', level: 3, color: '#3178C6' },
    { name: 'React', level: 3, color: '#61DAFB' },
    { name: 'Next.js', level: 3, color: '#FFFFFF' },
    { name: 'Tailwind', level: 3, color: '#06B6D4' },
    { name: 'Bun', level: 3, color: '#3178C6' },
];

const OrbitPath = ({ radius, dashArray }: { radius: number; dashArray?: string }) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1"
            strokeDasharray={dashArray}
        />
    </svg>
);

const SkillNode = ({ name, color, radius, angle, speed, level }: Skill & { radius: number; angle: number; speed: number }) => {
    const isExploring = level === 3;

    return (
        <motion.div
            className="absolute flex items-center justify-center pointer-events-auto cursor-default"
            animate={{
                rotate: [angle, angle + 360],
            }}
            transition={{
                duration: speed,
                repeat: Infinity,
                ease: "linear",
            }}
            style={{
                width: 0,
                height: 0,
                top: '50%',
                left: '50%',
            }}
        >
            <div
                style={{
                    transform: `translate(${radius}px, -50%)`,
                }}
            >
                <motion.div
                    className="relative group"
                    animate={{
                        rotate: [-(angle), -(angle + 360)],
                    }}
                    transition={{
                        duration: speed,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Glowing Aura */}
                    <div
                        className="absolute inset-0 rounded-full blur-[8px] opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                        style={{ backgroundColor: color || '#007AFF' }}
                    ></div>

                    {/* Skill Tag */}
                    <div
                        className={`
              relative px-3 py-1.5 rounded-full border backdrop-blur-md whitespace-nowrap text-xs font-semibold transition-all duration-300
              ${isExploring ? 'border-dashed border-[#007AFF]/40 bg-[#007AFF]/5 text-blue-200' : 'border-white/10 bg-white/5 text-white group-hover:border-[#007AFF]/40'}
            `}
                    >
                        {name}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function SkillOrbit() {
    const orbits = useMemo(() => {
        const grouped = {
            1: SKILLS.filter(s => s.level === 1),
            2: SKILLS.filter(s => s.level === 2),
            3: SKILLS.filter(s => s.level === 3),
        };

        return [
            { level: 1, radius: 100, speed: 25, dashArray: undefined, skills: grouped[1] },
            { level: 2, radius: 180, speed: 45, dashArray: undefined, skills: grouped[2] },
            { level: 3, radius: 260, speed: 60, dashArray: "5,5", skills: grouped[3] },
        ];
    }, []);

    return (
        <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center overflow-visible py-20">
            {/* Central Identity (Core) */}
            <div className="relative z-10 group">
                {/* Glow Ring */}
                <div className="absolute -inset-4 rounded-full bg-[#007AFF]/20 blur-2xl animate-pulse-slow"></div>

                {/* Tech Stack Core Node */}
                <div className="relative w-24 h-24 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-2xl flex items-center justify-center shadow-2xl shadow-[#007AFF]/20 transition-all duration-500 group-hover:border-[#007AFF]/40 group-hover:scale-105">
                    <div className="text-center flex flex-col items-center leading-none">
                        <span className="text-sm font-black text-white tracking-tight">
                            TECH
                        </span>
                        <span className="text-sm font-black text-white tracking-tight">
                            STACK
                        </span>
                    </div>
                    {/* Inner glowing circle */}
                    <div className="absolute inset-2 rounded-full border border-white/5 pointer-events-none"></div>
                </div>
            </div>

            {/* Orbits */}
            {orbits.map((orbit) => (
                <React.Fragment key={orbit.level}>
                    <OrbitPath radius={orbit.radius} dashArray={orbit.dashArray} />
                    {orbit.skills.map((skill, index) => {
                        const angle = (index / orbit.skills.length) * 360;
                        return (
                            <SkillNode
                                key={skill.name}
                                {...skill}
                                radius={orbit.radius}
                                angle={angle}
                                speed={orbit.speed}
                            />
                        );
                    })}
                </React.Fragment>
            ))}
        </div>
    );
}
