// Layout component for bootstrapping the app
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import ApolloProviderWrapper from '@/graphql/client/ApolloProvider';
import { Metadata, Viewport } from 'next';


// Metadata and viewport settings for SEO, and PWA
export const metadata: Metadata = {
  applicationName: 'Safaricom Kanban Board',
  title: {
    default: 'Safaricom Kanban Board',
    template: '%s - Safaricom Kanban Board',
  },
  description: 'A simple kanban board for managing tasks. It works smoothly on any device, even offline, giving you a great browsing experience.',
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Safaricom Kanban Board",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: 'Safaricom Kanban Board',
    title: {
      default: 'Safaricom Kanban Board',
      template: '%s - Safaricom Kanban Board',
    },
    description: 'A simple kanban board for managing tasks. It works smoothly on any device, even offline, giving you a great browsing experience.',
  },
  twitter: {
    card: "summary",
    title: {
      default: 'Safaricom Kanban Board',
      template: '%s - Safaricom Kanban Board',
    },
    description: 'A simple kanban board for managing tasks. It works smoothly on any device, even offline, giving you a great browsing experience.',
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

// Layout component for bootstrapping the app with MUI, Apollo, and Theme
export default function RootLayout(props: { children: React.ReactNode }) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head> 
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <InitColorSchemeScript attribute="class" />
        <ApolloProviderWrapper>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {props.children}
              </ThemeProvider>
            </AppRouterCacheProvider>
          </ApolloProviderWrapper>
      </body>
    </html>
  );
}