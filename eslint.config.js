import js from '@eslint/js';
import {defineConfig} from 'eslint/config';
import ts from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
export default defineConfig({ignores:['dist/**','.astro/**','node_modules/**']},js.configs.recommended,...ts.configs.recommended,...astro.configs.recommended,{languageOptions:{globals:{process:'readonly',console:'readonly',document:'readonly',window:'readonly',IntersectionObserver:'readonly',requestAnimationFrame:'readonly',matchMedia:'readonly',HTMLElement:'readonly',HTMLButtonElement:'readonly',URL:'readonly'}}});
