import { defineConfig } from 'astro/config';
const site = process.env.SITE_URL;
if (process.env.PUBLIC_INDEXABLE === 'true' && (!site || !site.startsWith('https://'))) throw new Error('Indexation requires a verified HTTPS SITE_URL');
export default defineConfig({ site, output: 'static', server: {host: '0.0.0.0'}, vite: {server: {allowedHosts: ['terminal.local']}}, devToolbar: { enabled: false } });
