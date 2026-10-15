
import { useState, type FormEvent } from "react";
import Icon from "./Icon";

type FormFeedback = {
    type: "success" | "error";
    message: string;
};

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() ?? "";

export default function Contact() {
    const [isSending, setIsSending] = useState(false);
    const [feedback, setFeedback] = useState<FormFeedback | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formElement = event.currentTarget;
        const formData = new FormData(formElement);

        // Ignore bot submissions caught by the honeypot field.
        if (String(formData.get("_gotcha") ?? "").trim()) {
            setFeedback({
                type: "success",
                message: "Thanks — your message has been received.",
            });
            formElement.reset();
            return;
        }

        if (!formEndpoint) {
            setFeedback({
                type: "error",
                message:
                    "The contact form is not configured yet. Add VITE_FORMSPREE_ENDPOINT to your local .env file.",
            });
            return;
        }

        setIsSending(true);
        setFeedback(null);

        try {
            const response = await fetch(formEndpoint, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("The form service returned an error.");
            }

            formElement.reset();

            setFeedback({
                type: "success",
                message: "Message sent. Thanks for reaching out!",
            });
        } catch {
            setFeedback({
                type: "error",
                message:
                    "Your message could not be sent. Please try again in a moment.",
            });
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section
            id="contact"
            className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <div>
                    <p className="mb-4 font-mono text-xs tracking-[0.2em] text-cyan-300">
                        04 / CONTACT
                    </p>

                    <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Have something good in mind?
                    </h2>

                    <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
                        Tell me what you&apos;re building, what needs fixing,
                        or what idea you want to make real. Clear details help
                        us start a useful conversation.
                    </p>

                    <a
                        href="mailto:farzaad.shin@gmail.com"
                        aria-label="Email Shin"
                        className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-slate-200 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                    >
                        <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-cyan-200">
                            <Icon name="mail" size={19} />
                        </span>

                        <span className="inline-flex items-center gap-2">
                            Let&apos;s talk
                            <span
                                className="text-cyan-300"
                                aria-hidden="true"
                            >
                                ↗
                            </span>
                        </span>
                    </a>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-white/10 bg-white/2.5 p-5 sm:p-8"
                >
                    <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block text-sm font-medium text-slate-300">
                            Your name
                            <input
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                maxLength={100}
                                placeholder="What should I call you?"
                                className="mt-2 w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/30"
                            />
                        </label>

                        <label className="block text-sm font-medium text-slate-300">
                            Email address
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                maxLength={254}
                                placeholder="you@example.com"
                                className="mt-2 w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/30"
                            />
                        </label>
                    </div>

                    <label className="mt-5 block text-sm font-medium text-slate-300">
                        What are you thinking about?
                        <textarea
                            name="message"
                            rows={5}
                            required
                            minLength={10}
                            maxLength={5000}
                            placeholder="A little context about your idea, project, or question. Or you might wanna hire me! :)"
                            className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#070b14] px-4 py-3.5 text-sm leading-6 text-white placeholder:text-slate-600 focus:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/30"
                        />
                    </label>

                    <input
                        name="_gotcha"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="absolute left-[-10000px] h-px w-px overflow-hidden"
                    />

                    {feedback && (
                        <p
                            role={
                                feedback.type === "success"
                                    ? "status"
                                    : "alert"
                            }
                            className={`mt-5 rounded-xl border px-4 py-3 text-sm leading-6 ${
                                feedback.type === "success"
                                    ? "border-emerald-300/20 bg-emerald-300/[0.07] text-emerald-200"
                                    : "border-rose-300/20 bg-rose-300/[0.07] text-rose-200"
                            }`}
                        >
                            {feedback.message}
                        </p>
                    )}

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-xs text-xs leading-5 text-slate-500">
                            Your details are used to reply to this message,
                            not to subscribe you to a list.
                            <br />
                            I promise, pinky-promise actly!
                        </p>

                        <button
                            type="submit"
                            disabled={isSending}
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:cursor-wait disabled:opacity-60"
                        >
                            {isSending ? "Sending…" : "Send message"}
                            {!isSending && (
                                <Icon name="send" size={16} />
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}