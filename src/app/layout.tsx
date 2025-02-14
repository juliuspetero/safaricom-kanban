// Code: Layout component for the app
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import ApolloProviderWrapper from '@/graphql/client/ApolloProvider';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Safaricom Kanban Board",
  description: "A simple kanban board for managing tasks. It works smoothly on any device, even offline, giving you a great movie browsing experience.",
  manifest: "/manifest.json",
  keywords: ["kanban", "board", "safaricom"]
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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