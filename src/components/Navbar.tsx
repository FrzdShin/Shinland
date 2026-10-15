
import { useEffect, useState } from "react";
import Icon from "./Icon";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
] as const;

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        function closeOnEscape(event: KeyboardEvent) {
            if (event.key === "Escape") setMenuOpen(false);
        }

        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, []);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
            >
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="group inline-flex items-center gap-3 rounded-lg text-lg font-bold tracking-tight text-white"
                    aria-label="Shinland home"
                >
                    <span className=" [font-variant:small-caps]">
                        shin<span className="text-cyan-300">land</span>
                    </span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="rounded-md text-sm font-medium text-slate-300 hover:text-cyan-200"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-300/20"
                    >
                        Let&apos;s talk <Icon name="arrow-up-right" size={16} />
                    </a>
                </div>

                <button
                    type="button"
                    className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10 md:hidden"
                    aria-label={
                        menuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <Icon name={menuOpen ? "close" : "menu"} size={22} />
                </button>
            </nav>

            {menuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-white/10 bg-[#0a1020] px-5 py-4 shadow-2xl md:hidden"
                >
                    <div className="mx-auto flex max-w-7xl flex-col items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className="w-full max-w-sm rounded-xl px-4 py-3 text-center text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-200"
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-300/20"
                        >
                            Let&apos;s talk <Icon name="arrow-up-right" size={16} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}