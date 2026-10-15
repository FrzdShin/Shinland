import { useMemo, useState } from "react";
import Icon from "./Icon";

type ProjectCategory = "Web apps" | "Creative code";
type Project = {
    number: string;
    title: string;
    category: ProjectCategory;
    description: string;
    tags: string[];
    visual: "calculator" | "storm" | "sunset";
};

const projects: Project[] = [
    {
        number: "01",
        title: "The Calc.",
        category: "Web apps",
        description: "A focused calculator concept with a clean interface, calculation history, and a useful dark mode.",
        tags: ["React", "TypeScript", "Tailwind"],
        visual: "calculator",
    },
    {
        number: "02",
        title: "Under the Storm",
        category: "Creative code",
        description: "A weather dashboard concept that pairs clear data presentation with atmospheric visuals and motion.",
        tags: ["Data UI", "Animation", "WebGL"],
        visual: "storm",
    },
    {
        number: "03",
        title: "Almost Sunset",
        category: "Creative code",
        description: "A generative-art concept exploring warm colour, geometry, and the changing mood of golden hour.",
        tags: ["Creative coding", "Canvas", "CSS"],
        visual: "sunset",
    },
];

const filters = ["All work", "Web apps", "Creative code"] as const;
type ProjectFilter = (typeof filters)[number];

function ProjectArtwork({ visual }: { visual: Project["visual"] }) {
    if (visual === "calculator") {
        return (
            <div className="mx-auto w-full max-w-[230px] rounded-2xl border border-white/15 bg-[#0a1323]/90 p-3 shadow-xl shadow-cyan-950/40">
                <div className="mb-3 rounded-xl bg-white/[0.04] p-4 text-right">
                    <p className="font-mono text-xs text-slate-500">12 × 8</p>
                    <p className="mt-1 font-mono text-3xl text-white">96<span className="text-cyan-300">.</span></p>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 12 }, (_, index) => (
                        <span key={index} className={`grid aspect-square place-items-center rounded-lg font-mono text-xs ${index === 11 ? "bg-cyan-300 text-slate-950" : "bg-white/[0.06] text-slate-300"}`}>
                            {["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "=" ][index]}
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    if (visual === "storm") {
        return (
            <div className="relative grid size-44 place-items-center sm:size-48">
                <div className="absolute inset-1 rounded-full border border-sky-200/15" />
                <div className="absolute inset-5 rounded-full border border-sky-200/20" />
                <div className="absolute inset-10 rounded-full border border-sky-200/25" />
                <div className="absolute h-32 w-1 rotate-45 rounded-full bg-linear-to-b from-transparent via-cyan-200/80 to-transparent" />
                <div className="absolute h-28 w-1 -rotate-45 rounded-full bg-linear-to-b from-transparent via-blue-300/70 to-transparent" />
                <span className="relative text-4xl text-cyan-100">〰</span>
            </div>
        );
    }

    return (
        <div className="relative grid size-48 place-items-center overflow-hidden rounded-full">
            <div className="absolute inset-4 rounded-full bg-orange-300/10 blur-2xl" />
            <div className="absolute bottom-2 size-44 rounded-full bg-linear-to-t from-rose-500/65 via-orange-300/45 to-amber-200/20" />
            <div className="absolute bottom-0 h-20 w-full bg-[#111523]/75" />
            <div className="absolute bottom-10 h-px w-full bg-white/30" />
            <div className="absolute bottom-16 h-px w-4/5 bg-white/20" />
            <div className="absolute bottom-24 h-px w-3/5 bg-white/20" />
        </div>
    );
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All work");
    const visibleProjects = useMemo(
        () => activeFilter === "All work" ? projects : projects.filter((project) => project.category === activeFilter),
        [activeFilter],
    );

    return (
        <section id="projects" className="scroll-mt-24 border-y border-white/[0.06] bg-[#090e19] py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-cyan-300">03 / SELECTED WORK</p>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Small details. Bigger picture.</h2>
                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                            A few portfolio concepts focused on useful interfaces, clear hierarchy, and playful visual systems.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2" aria-label="Filter projects">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                aria-pressed={activeFilter === filter}
                                className={`rounded-full border px-4 py-2.5 text-sm font-medium ${activeFilter === filter ? "border-cyan-200/50 bg-cyan-300 text-slate-950" : "border-white/10 bg-white/[0.025] text-slate-300 hover:border-white/25 hover:text-white"}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {visibleProjects.map((project) => (
                        <article key={project.number} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]">
                            <div className={`relative flex h-60 items-center justify-center overflow-hidden ${project.visual === "calculator" ? "bg-linear-to-br from-cyan-950/70 via-blue-950/40 to-[#0b1220]" : project.visual === "storm" ? "bg-linear-to-br from-blue-950 via-slate-900 to-cyan-950/70" : "bg-linear-to-br from-rose-950/70 via-orange-950/40 to-[#0b1220]"}`}>
                                <div className="hero-visual-grid absolute inset-0 opacity-50" />
                                <ProjectArtwork visual={project.visual} />
                                <span className="absolute left-5 top-5 font-mono text-xs text-white/50">PROJECT / {project.number}</span>
                            </div>

                            <div className="p-6 sm:p-7">
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">{project.category}</span>
                                    <Icon name="arrow-up-right" size={18} className="text-slate-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                <p className="mt-3 min-h-[5.25rem] text-sm leading-7 text-slate-400">{project.description}</p>
                                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                                    {project.tags.map((tag) => (
                                        <li key={tag} className="rounded-lg border border-white/10 px-2.5 py-1.5 text-[11px] text-slate-300">{tag}</li>
                                    ))}
                                </ul>
                                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white">
                                    Discuss a similar build <Icon name="arrow-up-right" size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <p className="mt-6 text-xs text-slate-500" aria-live="polite">
                    Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}.
                </p>
            </div>
        </section>
    );
}