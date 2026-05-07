/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg:        '#0A0908',
        'bg-elev': '#1C1916',
        fg:        '#FAF6F1',
        muted:     '#7A7269',
        dim:       '#3A342D',
        accent:    '#89B4FA',
        'accent-2':'#74C7EC',
        status:    '#22C55E',
      },
    },
  },
  plugins: [],
};
