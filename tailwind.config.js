/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body:    ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg:        '#07080A',
        surface:   '#0F1117',
        fg:        '#F0EDE8',
        muted:     '#6B6460',
        dim:       '#3A3530',
        accent:    '#89B4FA',
        'accent-2':'#74C7EC',
        status:    '#22C55E',
      },
    },
  },
  plugins: [],
};
