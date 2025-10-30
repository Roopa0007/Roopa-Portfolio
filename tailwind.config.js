/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#06b6d4',
          hover: '#0891b2',
        },
        secondary: '#64748b',
        accent: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          cyan: '#06b6d4',
        }
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'particle-float': 'particle-float 8s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(96, 165, 250, 0.6)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'strong': '20px',
      },
      spacing: {
        'section': '2rem',
      },
      borderRadius: {
        'container': '1rem',
      },
      boxShadow: {
        'glow': '0 0 50px rgba(96, 165, 250, 0.2)',
        'glow-purple': '0 0 50px rgba(139, 92, 246, 0.2)',
        'glow-pink': '0 0 50px rgba(236, 72, 153, 0.2)',
      }
    },
  },
  plugins: [],
}
