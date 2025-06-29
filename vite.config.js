import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 깃허브 리포지토리 이름
const repoName = 'react-test1';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:`/${repoName}/`,
})
