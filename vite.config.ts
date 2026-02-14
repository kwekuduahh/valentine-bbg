import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	assetsInclude: ['**/*.glb'],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		headers: {
			'Content-Security-Policy':
				"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self'; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; sandbox allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-downloads allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-top-navigation-to-custom-protocols; worker-src 'self' blob:; prefetch-src 'self' blob:; manifest-src 'self'; navigate-to 'self';",
			'Referrer-Policy': 'strict-origin-when-cross-origin',
			'X-Frame-Options': 'DENY',
			'X-Content-Type-Options': 'nosniff',
			'X-XSS-Protection': '1; mode=block',
			'X-Permitted-Cross-Domain-Policies': 'none',
			'X-Download-Options': 'noopen',
		},
	},
});
