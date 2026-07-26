/** Tailwind design tokens shared by every SafeGuard component. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { surface: '#1E293B', ink: '#0F172A', primary: '#2563EB', safe: '#22C55E', warning: '#F59E0B', danger: '#EF4444' },
      fontFamily: { heading: ['Poppins', 'sans-serif'], body: ['Inter', 'sans-serif'] }
    }
  },
  plugins: []
};
