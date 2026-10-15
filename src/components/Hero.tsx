import Icon from "./Icon";

const stack = ["React", "TypeScript", "Tailwind CSS"];

export default function Hero() {
    return (
        <section id="home" className="relative isolate scroll-mt-24 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="hero-visual-grid absolute inset-0 opacity-60" />
                <div className="float-slow absolute -right-32 top-28 size-96 rounded-full bg-blue-500/15 blur-3xl" />
                <div className="float-slower absolute -left-28 bottom-0 size-80 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-36 sm:px-8 sm:pt-40 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:pb-28">
                <div>
                    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3.5 py-2 font-mono text-[11px] tracking-[0.16em] text-cyan-200 sm:text-xs">
                        <span className="size-2 rounded-full bg-cyan-300" />
                        FRONTEND DEVELOPER · CREATIVE CODER
                    </p>

                    <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl xl:text-[5.5rem]">
                        Thoughtful code.
                        <span className="mt-2 block bg-linear-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text pb-2 text-transparent">
                            Distinctive digital experiences.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                        I&apos;m Shin — a frontend developer building responsive,
                        detail-driven interfaces where design, usability, and
                        clean code work together.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#projects"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
                        >
                            Explore my work <Icon name="arrow-up-right" size={18} />
                        </a>
                        <a
                            href="#about"
                            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-white/[0.07]"
                        >
                            More about me
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                        <span className="mr-1 font-mono uppercase tracking-wider">Building with</span>
                        {stack.map((item) => (
                            <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-slate-300">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
                    <div className="float-slow absolute -right-3 -top-5 z-10 rounded-2xl border border-cyan-200/20 bg-[#101b2d]/95 p-4 shadow-2xl shadow-cyan-950/40 sm:-right-6">
                        <div className="flex items-center gap-3">
                            <span className="grid size-10 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                                <Icon name="code" size={21} />
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-white">Clean by design</p>
                                <p className="mt-0.5 text-xs text-slate-400">Reusable. Responsive. Typed.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#0b1220]/90 p-4 shadow-2xl shadow-blue-950/40 sm:p-6">
                        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div className="flex items-center gap-2" aria-label="Code window">
                                <span className="size-2.5 rounded-full bg-rose-400/80" />
                                <span className="size-2.5 rounded-full bg-amber-300/80" />
                                <span className="size-2.5 rounded-full bg-emerald-300/80" />
                            </div>
                            <span className="font-mono text-xs text-slate-500">portfolio.tsx</span>
                        </div>

                        <div className="grid gap-5 py-6 sm:grid-cols-[1fr_auto] sm:items-center">
                            <div className="font-mono text-xs leading-7 sm:text-sm">
                                <p className="text-violet-300">const <span className="text-cyan-200">experience</span> = &#123;</p>
                                <p className="pl-4 text-slate-400">design: <span className="text-emerald-300">&quot;intentional&quot;</span>,</p>
                                <p className="pl-4 text-slate-400">layout: <span className="text-emerald-300">&quot;responsive&quot;</span>,</p>
                                <p className="pl-4 text-slate-400">quality: <span className="text-emerald-300">&quot;maintainable&quot;</span>,</p>
                                <p className="text-violet-300">&#125;;</p>
                                <p className="mt-3 text-slate-500">// make it useful, then make it feel right</p>
                            </div>
                            <div className="relative mx-auto grid size-36 place-items-center rounded-full border border-cyan-200/20 bg-linear-to-br from-cyan-300/15 via-blue-500/10 to-transparent sm:size-44">
                                <div className="absolute inset-3 rounded-full border border-dashed border-cyan-200/25" />
                                <div className="absolute inset-8 rounded-full border border-blue-300/25" />
                                <span className="relative font-mono text-6xl font-bold tracking-tighter text-white sm:text-7xl">Sh<span className="text-cyan-300">.</span></span>
                                <span className="absolute right-3 top-5 size-3 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(103,232,249,0.8)]" />
                                <span className="absolute bottom-5 left-2 size-2 rounded-full bg-blue-300" />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                            {[
                                { value: "01", label: "Think clearly" },
                                { value: "02", label: "Build simply" },
                                { value: "03", label: "Refine wisely" },
                            ].map((item) => (
                                <div key={item.value} className="rounded-xl bg-white/[0.035] p-3">
                                    <p className="font-mono text-xs text-cyan-200">{item.value}</p>
                                    <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="float-slower absolute -bottom-5 -left-3 rounded-2xl border border-blue-300/20 bg-[#10172a]/95 px-4 py-3 shadow-xl shadow-blue-950/40 sm:-left-6">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                            <Icon name="sparkles" size={17} className="text-cyan-200" />
                            Made with curiosity
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 pb-8 sm:px-8">
                <span className="h-px w-10 bg-cyan-300/50" />
                <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500">SCROLL TO EXPLORE</span>
            </div>
        </section>
    );
}