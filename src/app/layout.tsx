import type { Metadata } from 'next';
import { Manrope, Sora, Space_Mono } from 'next/font/google';
import '@/styles/globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Bhim Prasad Lamichhane | QA Automation Engineer Portfolio',
  description:
    'Portfolio of Bhim Prasad Lamichhane - QA Automation Engineer.',
  keywords: [
    'Bhim Prasad Lamichhane',
    'QA Automation Engineer',
    'Full Stack Engineer',
    'Playwright',
    'Cypress',
    'Portfolio',
  ],
  openGraph: {
    title: 'Bhim Prasad Lamichhane | QA Engineer Portfolio',
    description:
      'Modern developer portfolio showcasing QA automation, full stack engineering, and digital banking quality solutions.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} ${spaceMono.variable} bg-bg text-text`}>
        {children}
      </body>
    </html>
  );
}
