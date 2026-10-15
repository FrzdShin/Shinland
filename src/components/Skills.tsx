import Icon from "./Icon";

const skillGroups = [
    {
        title: "Frontend",
        description: "The tools I use to build the interface itself.",
        skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Responsive UI"],
    },
    {
        title: "Design & interaction",
        description: "Turning visual ideas into usable, polished experiences.",
        skills: ["Design systems", "Figma", "CSS Grid", "Flexbox", "Accessibility", "Motion with intent"],
    },
    {
        title: "Workflow & quality",
        description: "Keeping the codebase understandable and dependable.",
        skills: ["Git & GitHub", "Vite", "npm", "Browser DevTools", "Debugging", "Component architecture"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="mb-12 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-cyan-300">02 / TOOLKIT</p>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Tools with a purpose.</h2>
                    </div>
                    <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                        A practical toolkit, chosen to solve problems and keep projects maintainable—not just to fill a list.
                    </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {skillGroups.map((group, index) => (
                        <article key={group.title} className="rounded-2xl border border-white/10 bg-[#0a1020] p-6 sm:p-7">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="grid size-10 place-items-center rounded-xl bg-blue-400/10 text-cyan-200">
                                    <Icon name={index === 0 ? "code" : index === 1 ? "sparkles" : "layers"} size={20} />
                                </span>
                                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                            </div>
                            <p className="mb-5 text-sm leading-6 text-slate-400">{group.description}</p>
                            <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                                {group.skills.map((skill) => (
                                    <li key={skill} className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-300">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}