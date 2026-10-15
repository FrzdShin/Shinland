import Icon from "./Icon";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#050810]">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between">
                <a href="#home" className="inline-flex items-center gap-2 text-sm font-bold tracking-tight text-slate-200 hover:text-cyan-200">
                    <span className="font-mono text-cyan-300  [font-variant:small-caps]">Shinland</span>
                </a>
                <p className="text-xs text-slate-500">© {new Date().getFullYear()} Shin. Built with care and curiosity.</p>
                <a href="#home" className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-200">
                    Back to top <Icon name="arrow-up" size={15} />
                </a>
            </div>
        </footer>
    );
}