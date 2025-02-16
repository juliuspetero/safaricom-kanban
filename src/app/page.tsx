// Desc: Home page component
'use client';
import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import KanboardBoard from '@/components/KanboardBoard';

export default function Home() {
    useEffect(() => {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./serviceWorker.js')
            .then((registration) => {
              console.log('Service Worker registration successful with scope: ', registration.scope);
            })
            .catch((error) => {
              console.log('Service Worker registration failed: ', error);
            });
        });
      }
    }, []);
  return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <KanboardBoard />
            </Box>
        </Container>
  );
}