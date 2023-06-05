import {defineConfig} from 'vite';
import {resolve} from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                'about-us': resolve(__dirname, 'pages/about-us/index.html'),
                instruction: resolve(
                    __dirname,
                    'pages/instructions/index.html'
                ),
                'select-cards': resolve(
                    __dirname,
                    'pages/select-cards/index.html'
                ),
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
});
