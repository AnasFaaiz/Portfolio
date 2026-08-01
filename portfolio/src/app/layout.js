import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

/* Three roles, three faces:
   - display: headlines. Space Grotesk has odd, engineered letterforms.
   - body:    paragraphs. Manrope is round and quiet so it never competes.
   - mono:    labels, tags, data. Reads like tooling, which is the point.

   NOTE the --ff-* variable names. globals.css maps them onto Tailwind's
   --font-display / --font-body / --font-mono. Using the same name in both
   places would create a circular reference and silently fall back to
   system fonts, so keep these prefixed. */
const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--ff-display',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--ff-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--ff-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Syed Anas Faaiz — Software Engineer',
  description:
    'Full-stack and automation engineer. Building scalable web apps, data pipelines, and AI-assisted tooling.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-void text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
