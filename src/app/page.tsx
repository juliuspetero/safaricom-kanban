import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import KanboardBoard from '@/components/KanboardBoard';

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
                <KanboardBoard />
            </Box>
        </Container>
  );
}