import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import styleX from "vite-plugin-stylex";

// export default defineConfig({
export default defineConfig(({ command }) => ({
  plugins: [
    react(), // Use the React plugin for JSX transformation and React fast refresh
    dts({
      // Configuration options for vite-plugin-dts
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      exclude: [
        '**/*.stories.tsx',
        '**/*.test.tsx',
        './src/App.tsx',
        './src/ArchivedApp.tsx',
        './src/main.tsx',
        './rac-stylex-tokens/**/*',
        // Add more specific paths or patterns as needed
      ],
      outDir: './dist/types',
      staticImport: true,
    }),
    ...(command !== 'build' ? [styleX()] : []), // Only use stylexPlugin when not building
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: './src/index.ts', // Your library's entry point
      name: 'racstylex', // A name for your library, used in UMD builds
      fileName: (format) => `racstylex.${format}.js`, // Naming pattern for output files
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-aria-components',
        '@stylexjs/stylex',
        'vite-plugin-stylex',
        '@bonterratech/rac-stylex-tokens/colors.stylex',
        '@bonterratech/rac-stylex-tokens/fonts.stylex',
        '@bonterratech/rac-stylex-tokens/sizes.stylex',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-aria-components': 'ReactAriaComponents',
          '@stylexjs/stylex': 'Stylex',
          'vite-plugin-stylex': 'StylexPlugin',
        },
      },
    },
    sourcemap: true, // Optional: Enable source map generation for debugging
  },
}));
