import Icon from "./Icon";

const principles = [
    {
        number: "01",
        title: "Frontend engineering",
        description:
            "Building responsive interfaces with React, TypeScript, and reusable component architecture.",
        icon: "code" as const,
    },
    {
        number: "02",
        title: "Design thinking",
        description:
            "Bringing visual hierarchy, accessibility, and usability together instead of treating them as separate tasks.",
        icon: "sparkles" as const,
    },
    {
        number: "03",
        title: "Intentional growth",
        description:
            "Learning through real projects, measuring what matters, and improving the details that people actually notice.",
        icon: "layers" as const,
    },
];

export default function About() {
    return (
        <section id="about" className="scroll-mt-24 border-t border-white/[0.06] bg-[#090e19] py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="mb-12 max-w-3xl sm:mb-16">
                    <p className="mb-4 font-mono text-xs tracking-[0.2em] text-cyan-300">01 / ABOUT</p>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Building with <span className="text-cyan-200">purpose.</span>
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        I&apos;m a frontend developer focused on making digital experiences feel clear,
                        considered, and easy to use. I enjoy turning ideas into working products with
                        a balance of visual craft and sound engineering.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {principles.map((item) => (
                        <article key={item.number} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
                            <div className="mb-8 flex items-center justify-between">
                                <span className="font-mono text-sm text-cyan-300/80">{item.number}</span>
                                <span className="grid size-11 place-items-center rounded-xl border border-cyan-200/15 bg-cyan-300/[0.07] text-cyan-200">
                                    <Icon name={item.icon} size={21} />
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}