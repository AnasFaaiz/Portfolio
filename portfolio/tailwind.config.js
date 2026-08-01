/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      /* Tokens from globals.css, exposed as Tailwind classes:
         bg-void, bg-panel, text-ice, border-line, text-signal, ... */
      colors: {
        void: 'var(--void)',
        panel: 'var(--panel)',
        panel2: 'var(--panel-2)',
        ice: 'var(--ice)',
        beam: 'var(--beam)',
        signal: 'var(--signal)',
        muted: 'var(--muted)',
        line: 'rgb(var(--line) / <alpha-value>)',
      },
      fontFamily: {
        /* Wired up in layout.js with next/font */
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(76 111 255 / 0.35), 0 20px 60px -20px rgb(76 111 255 / 0.55)',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        bob: 'bob 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
