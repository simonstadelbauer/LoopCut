/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#000000',
          800: '#0A0A0A',
          700: '#1A1A1A',
          600: '#2A2A2A',
          500: '#3A3A3A',
        },
        light: {
          900: '#FFFFFF',
          800: '#F8F9FA',
          700: '#E9ECEF',
          600: '#ADB5BD',
          500: '#6C757D',
        },
        accent: {
          orange: '#FF6B35',
          'orange-light': '#FF8C69',
          'orange-dark': '#E55A2B',
          blue: '#2563EB',
          'blue-light': '#60A5FA',
          'blue-dark': '#1D4ED8',
          gray: '#6B7280',
          'gray-light': '#9CA3AF',
          'gray-dark': '#4B5563',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'pulse-slow': 'pulse 4s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF6B35 0%, #FF8C69 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #FF6B35 0%, #FFFFFF 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255, 107, 53, 0.3)',
        'glow-blue': '0 0 30px rgba(37, 99, 235, 0.3)',
      }
    },
  },
  plugins: [],
} 