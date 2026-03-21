/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1B4332',
        sage: '#95D5B2',
        sand: '#F8F9FA',
        moss: '#2D6A4F',
        leaf: '#40916C',
        pine: '#0B241B',
      },
      boxShadow: {
        eco: '0 20px 80px -20px rgba(27, 67, 50, 0.28)',
        glass: '0 10px 40px rgba(27, 67, 50, 0.12)',
      },
      backgroundImage: {
        'hero-eco': 'linear-gradient(135deg, rgba(27,67,50,0.92), rgba(27,67,50,0.56))',
        'eco-radial': 'radial-gradient(circle at top, rgba(149, 213, 178, 0.30), transparent 45%)',
      },
      backgroundSize: {
        'auto-150': '150% auto',
      },
      letterSpacing: {
        snug: '-0.02em',
      },
    },
  },
  plugins: [],
};
