'use client';

import Image from 'next/image';

const skills = [
    ['JAVA', 'SPRING BOOT', 'REACT', 'TYPESCRIPT'],
    ['NEXT JS', 'CANVA', 'TAILWIND CSS'],
    ['CODEX', 'POSTMAN', 'GIT'],
    ['POSTGRESQL', 'REST API', 'DOCKER'],
];

export default function AboutSection() {
    return (
        <section
        className="w-full h-screen flex flex-col lg:flex-row relative"
        style={{ color: 'var(--text-dark)' }}
        >

        <div
            className="w-full h-full lg:w-1/2 flex flex-col p-4"
        >

            <div className='w-full h-[40%] overflow-visible'>
                <h2
                    className="font-[family-name:var(--font-display)]"
                    style={{
                    fontSize: 'clamp(4rem, 13vh, 6rem)',
                    lineHeight: 0.9,
                    letterSpacing: '0',
                    }}
                >
                    Who&apos;s
                    <br />

                    <em style={{ fontStyle: 'italic', fontWeight: 300 }}>that</em>

                    <br />
                    girl?
                </h2>
            </div>

            <div className='w-[70%] h-[30%] font-[family-name:var(--font-body)] font-light flex flex-col justify-center'
                style={{
                fontSize: '0.875rem',
                lineHeight: 1.75,
                opacity: 1,
                borderLeft: '2px solid rgba(0,0,0,0.15)',
                paddingLeft: '1rem',
                marginTop: "2rem",
                }}
            >
                <p style={{ marginBottom: '1rem' }}>
                I&apos;m a full-stack developer who enjoys building robust and scalable systems while creating clean and meaningful digital experiences.
                </p>

                <p style={{ marginBottom: '1rem' }}>
                I approach development with a problem-solving mindset, focusing on building solid foundations behind the scenes while keeping the user experience clean and intuitive.
                </p>

                <p>
                I&apos;m continuously refining my full-stack skills, always eager to learn, improve, and take on new challenges.
                </p>
            </div>

            <div className='w-full h-[30%] flex flex-col gap-4 mb-5 justify-center'>
                <span
            className="uppercase font-light"
            style={{
                fontSize: '0.80rem',
                letterSpacing: '0.35em',
                opacity: 0.6,
            }}
                >
                    Skills
                </span>

                <div className="flex flex-wrap gap-2">
                    {skills.flat().map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: 'rgba(0,0,0,0.06)',
                                fontSize: '0.65rem',
                                letterSpacing: '0.12em',
                                opacity: 0.85,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)';
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div
            className="w-full h-full lg:w-1/2 relative flex items-center justify-center overflow-hidden relative"
            style={{ backgroundColor: 'var(--background-dark)', minHeight: '100vh' }}
        >

            {/* Background blurred photo */}
            <div className="absolute inset-0 overflow-visible">
                <Image
                    src="/images/aboutImage.png"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    style={{ filter: 'blur(2px) brightness(0.45)', transform: 'scale(1.05)' }}
                />
            </div>

            {/* Quote — top right */}
            <div
            className="absolute top-10 right-6 z-10 lg:top-12 lg:right-10"
            style={{ maxWidth: '200px' }}
            >
                <span
                    className="font-[family-name:var(--font-display)]"
                    style={{ fontSize: '2rem', color: 'var(--text-light)', lineHeight: 1, opacity: 0.9 }}
                >
                    &quot;
                </span>

                <p
                    className="font-[family-name:var(--font-display)] font-light"
                    style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'var(--text-light)',
                    opacity: 0.85,
                    borderLeft: '2px solid rgba(255,255,255,0.25)',
                    paddingLeft: '0.75rem',
                    marginTop: '0.25rem',
                    }}
                >
                    I believe that code is more than just logic — it&apos;s a way to create
                    impact and bring ideas to life.
                </p>
            </div>


            {/* Bottom tagline */}
            <div className="absolute bottom-10 right-6 z-10 text-right lg:right-10">
                <p
                    className="font-[family-name:var(--font-body)] uppercase font-light"
                    style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.25em',
                    color: 'var(--text-light)',
                opacity: 0.6,
                lineHeight: 1.8,
                }}
            >
                Building Ideas.
                <br />
                Crafting Experiences.
            </p>
            <div
                className="mt-2 ml-auto"
                style={{ width: '3rem', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }}
            />
            </div>
        </div>

        {/* Foreground portrait — centred, overlapping left panel */}
        <div
        className="absolute z-20 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
        style={{
            width: 'min(280px, 72vw)',
            aspectRatio: '450 / 400',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            border: '6px solid white',
            background: 'linear-gradient(135deg, #4a4949ff, #787373ff)',
            transform: 'rotate(-2deg)',
        }}
        >
            <Image
                src="/images/aboutImage.png"
                alt="Nomena Fitahiana"
                fill
                sizes="280px"
                className="object-cover"
                style={{ filter: 'grayscale(100%)' }}
            />
        </div>
    </section>
);
}
