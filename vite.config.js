import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'
import { plugin as markdown } from 'vite-plugin-markdown'

export default defineConfig({
  base: '/GamingPortfolio/', // Replace with your GitHub repository name
  plugins: [
    tailwindcss(),react(),markdown({ mode: ['html', 'toc'] }) // This tells Vite to parse the MD
  ],
});