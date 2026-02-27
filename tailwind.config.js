/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D8783',
          light: '#4A9E9A',
          dark: '#1E5C59',
        },
        accent: '#25D366',
        main: '#1A1A1A',
        muted: '#666666',
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0, 0, 0, 0.05)',
        'strong': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float-3d': 'float 8s ease-in-out infinite',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px) rotateX(10deg) rotateY(-10deg) rotateZ(2deg)' },
          '50%': { transform: 'translateY(-20px) rotateX(8deg) rotateY(-8deg) rotateZ(1deg)' },
          '100%': { transform: 'translateY(0px) rotateX(10deg) rotateY(-10deg) rotateZ(2deg)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
