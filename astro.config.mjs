import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://benruehl.github.io',
    base: '/astro-kruemelkiste',
    scopedStyleStrategy: 'class',
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./src/styles/main.scss";',
                },
            },
        },
    },
});
