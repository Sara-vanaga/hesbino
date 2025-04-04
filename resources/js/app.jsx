import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// کانفیگ RTL
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

// تم MaterialUI
const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: 'IRANSans, Roboto, Arial',
    },
    palette: {
        primary: {
            light: '#e3f2fd',
            main: '#1976d2',
            dark: '#1565c0',
        },
        secondary: {
            light: '#f3e5f5',
            main: '#9c27b0',
            dark: '#7b1fa2',
        },
        success: {
            light: '#e8f5e9',
            main: '#2e7d32',
            dark: '#1b5e20',
        },
        warning: {
            light: '#fff3e0',
            main: '#ed6c02',
            dark: '#e65100',
        },
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: 'small',
            },
        },
    },
});

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <App {...props} />
                </ThemeProvider>
            </CacheProvider>
        );
    },
});