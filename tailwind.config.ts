import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#05070c',
        panel: '#0d1220',
        text: '#e8edf5',
        mute: '#9da9bd',
        neon: '#22d3ee',
        lime: '#84cc16',
        coral: '#f97316',
      },
      boxShadow: {
        glow: '0 0 30px rgba(34, 211, 238, 0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 15% 20%, rgba(34,211,238,0.12), transparent 45%), radial-gradient(circle at 85% 10%, rgba(249,115,22,0.12), transparent 35%), radial-gradient(circle at 70% 70%, rgba(132,204,22,0.08), transparent 40%)',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
