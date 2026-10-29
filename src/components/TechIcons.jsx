import React from 'react';

// Crisp, high-contrast SVG brand and tech icons for the skills dock and tech chips
export const TechIcons = {
    // Dock Categories
    Languages: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    Frontend: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    ),
    Backend: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
    ),
    "AI & ML": (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
        </svg>
    ),
    "Data Science": (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
            <path d="M2 20h20" />
        </svg>
    ),
    "Cloud & DevOps": (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
    ),
    Tools: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    ),

    // Specific Technologies
    Java: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M8.85 16.84c0 .08.38.16.85.18 2.05.09 4.14-.14 6.13-.23.46-.02.83-.08.83-.16 0-.08-.37-.16-.83-.18-1.99-.09-4.08.14-6.13.23-.47.02-.85.08-.85.16zm-1.07 2.22c0 .12.63.2 1.41.24 2.87.13 5.86-.2 8.65-.34.78-.04 1.4-.13 1.4-.25 0-.12-.62-.21-1.4-.24-2.79-.14-5.78.2-8.65.34-.78.04-1.41.12-1.41.25zm5.7-10.74c.73.84-.2 1.94-.2 1.94s1.77-.92 1.05-2.26c-.7-1.31-2.45-1.97-2.45-1.97s.77 1.33 1.6 2.29zm-3.04-5.32c1.07 1.15-.31 2.7-.31 2.7s2.51-1.3 1.49-3.23c-1.01-1.9-3.52-2.51-3.52-2.51s1.12 1.74 2.34 3.04z" />
        </svg>
    ),
    Python: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M11.91 2c-3.1 0-5.18.32-5.18 2.53v2.09h5.36v.76H4.25C2.1 7.38 2 9.54 2 12.02c0 2.57.51 4.71 2.74 4.71h1.58v-2.31c0-2.32 1.83-4.14 4.15-4.14h5.35V7.47C15.82 4.15 15.01 2 11.91 2zm-1.57 1.44c.48 0 .86.38.86.86 0 .48-.38.87-.86.87-.47 0-.86-.39-.86-.87 0-.48.39-.86.86-.86zm5.82 5.82c0 2.32-1.83 4.14-4.15 4.14H6.66v2.81c0 3.32.81 5.47 3.91 5.47 3.1 0 5.18-.32 5.18-2.53v-2.09h-5.36v-.76h7.84c2.15 0 2.25-2.16 2.25-4.64 0-2.57-.51-4.71-2.74-4.71h-1.58v2.31zm-2.5 10.37c-.47 0-.86.39-.86.87 0 .48.39.86.86.86.48 0 .86-.38.86-.86 0-.48-.38-.87-.86-.87z" />
        </svg>
    ),
    JavaScript: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M3 3h18v18H3V3zm13.7 13.9c.7 0 1.2-.2 1.6-.6.4-.4.6-.9.6-1.5 0-.7-.2-1.2-.6-1.6-.4-.4-1.1-.7-2-1-.7-.2-1.3-.5-1.6-.7-.4-.3-.6-.7-.6-1.2 0-.5.2-.9.5-1.2.4-.3.9-.5 1.5-.5.6 0 1.1.2 1.5.5.4.3.6.7.7 1.2l1.6-.4c-.2-.8-.6-1.4-1.2-1.8-.6-.4-1.4-.7-2.3-.7-1 0-1.8.3-2.4.9-.6.6-.9 1.3-.9 2.2 0 .7.2 1.3.6 1.7.4.4 1 .7 1.8 1 .8.3 1.4.5 1.7.7.3.2.5.6.5 1 0 .4-.2.8-.5 1.1-.4.3-.9.4-1.6.4-.8 0-1.4-.3-1.8-.8-.4-.5-.6-1.1-.6-1.8l-1.6.3c.1 1.1.5 1.9 1.3 2.5.8.5 1.8.8 3 .8zm-7.6 0c.6 0 1-.2 1.4-.5.3-.4.5-.8.5-1.4V9h-1.8v6.2c0 .3-.1.5-.2.7-.2.1-.4.2-.7.2-.3 0-.5-.1-.7-.3l-.8 1.1c.3.3.6.5 1 .6.4.2.8.3 1.3.3z" />
        </svg>
    ),
    C: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M18 9a6 6 0 1 0 0 6" />
        </svg>
    ),
    "React.js": (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
    ),
    HTML5: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.8 5.6h-7.7l.2 2.4h7.3l-.6 6.7-4.7 1.3-4.7-1.3-.3-3.6h2.2l.2 1.8 2.6.7 2.6-.7.3-3.1H7.8L7.2 5.4h10.8l-.2 2.2z" />
        </svg>
    ),
    CSS3: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.8 5.6h-7.7l.2 2.4h7.3l-.6 6.7-4.7 1.3-4.7-1.3-.3-3.6h2.2l.2 1.8 2.6.7 2.6-.7.3-3.1H7.8L7.2 5.4h10.8l-.2 2.2z" />
        </svg>
    ),
    "Spring Boot": (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
            <path d="M8 11l4 4 4-4" />
        </svg>
    ),
    FastAPI: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    ),
    SQL: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
    ),
    Docker: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.98 10.02h2.04v2.04h-2.04zm-2.55 0h2.04v2.04h-2.04zm-2.55 0h2.04v2.04H8.88zm5.1-2.55h2.04v2.04h-2.04zm-2.55 0h2.04v2.04h-2.04zm-2.55 0h2.04v2.04H8.88zm5.1-2.55h2.04v2.04h-2.04zm-2.55 0h2.04v2.04h-2.04zm-5.1 5.1h2.04v2.04H6.33zm16.59 2.55c-.32-.23-1.05-.33-1.84-.26-.14-.7-.52-1.32-1.07-1.78l-.39-.33-.35.37c-.7.73-1.12 1.77-1.12 2.87 0 .2.02.4.05.59-.44.25-.97.41-1.57.41H3.66c-.34 0-.66.08-.94.22-.64.31-1.17.84-1.54 1.51-.43.78-.68 1.72-.68 2.76 0 1.76.67 3.32 1.74 4.39 1.14 1.14 2.83 1.84 4.76 1.84 5.37 0 9.87-3.95 10.64-9.15.75-.06 1.71-.34 2.37-1.04.42-.45.69-1.02.69-1.63 0-.33-.08-.6-.23-.77z" />
        </svg>
    ),
    AWS: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M4 14.5c2.5 2 6 3 9.5 2 2.5-.7 5-2.5 6.5-4.5" />
            <polyline points="18 12 20 12 19 14.5" />
            <path d="M6 10l2-4 2 4M7 9h2M12 6v8M16 6l1.5 5 1.5-5" />
        </svg>
    ),
    Git: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M21.62 10.62l-8.24-8.24a1.95 1.95 0 0 0-2.76 0L8.85 4.15l3.5 3.5a2.32 2.32 0 0 1 2.92 2.92l3.37 3.37a2.32 2.32 0 1 1-1.38 1.38l-3.15-3.15v5.18a2.32 2.32 0 1 1-1.95 0V12a2.3 2.3 0 0 1-1.22-2l-3.5-3.5-5.06 5.06a1.95 1.95 0 0 0 0 2.76l8.24 8.24a1.95 1.95 0 0 0 2.76 0l8.24-8.24a1.95 1.95 0 0 0 0-2.7z" />
        </svg>
    ),
    GitHub: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
    ),
    Vercel: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2L2 20h20L12 2z" />
        </svg>
    ),
    // Fallback Code Spark
    Default: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
        </svg>
    ),
};

export default TechIcons;
