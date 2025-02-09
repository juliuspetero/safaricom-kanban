import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/about/ProTip';
import Copyright from '@/components/about/CopyRight';

export default function Home() {
  return (
        <Container maxWidth="lg">
            <Box
              sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                Material UI - Next.js App Router example in TypeScript
              </Typography>
              <Link href="/about" color="secondary" component={NextLink}>
                Go to the about page
              </Link>
              <Link href="/users" color="primary" component={NextLink}>
                Go to Users Page
              </Link>
              <Link href="/games" color="secondary" component={NextLink}>
                Go to Games Page
              </Link>
              <Link href="/kanban-board" color="secondary" component={NextLink}>
                Go to Kanban Board
              </Link>
              <ProTip />
              <Copyright />
            </Box>
        </Container>
  );
}
