import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://steffis-kruemelkiste.de',
    base: '',
    scopedStyleStrategy: 'class',
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "/src/styles/main" as *;`,
                },
            },
        },
    },
});
