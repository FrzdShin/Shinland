import type { ReactNode } from "react";

type IconName =
    | "arrow-up"
    | "arrow-up-right"
    | "check"
    | "code"
    | "close"
    | "layers"
    | "mail"
    | "menu"
    | "send"
    | "sparkles";

type IconProps = {
    name: IconName;
    size?: number;
    className?: string;
};

const paths: Record<IconName, ReactNode> = {
    "arrow-up": (
        <>
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
        </>
    ),
    "arrow-up-right": (
        <>
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
        </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    code: (
        <>
            <path d="m8 8-4 4 4 4" />
            <path d="m16 8 4 4-4 4" />
            <path d="m14 4-4 16" />
        </>
    ),
    close: (
        <>
            <path d="m18 6-12 12" />
            <path d="m6 6 12 12" />
        </>
    ),
    layers: (
        <>
            <path d="m12 3 9 5-9 5-9-5 9-5Z" />
            <path d="m3 12 9 5 9-5" />
            <path d="m3 16 9 5 9-5" />
        </>
    ),
    mail: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </>
    ),
    menu: (
        <>
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
        </>
    ),
    send: (
        <>
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </>
    ),
    sparkles: (
        <>
            <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
            <path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" />
        </>
    ),
};

export default function Icon({ name, size = 20, className }: IconProps) {
    return (
        <svg
            aria-hidden="true"
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {paths[name]}
        </svg>
    );
}