export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs text-mute md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} Bhim Prasad Lamichhane</p>
        <p>Built with Next.js, TypeScript, Tailwind, Framer Motion, and Three.js</p>
      </div>
    </footer>
  );
}
