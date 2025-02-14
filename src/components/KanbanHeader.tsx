// Desc: Kanban header component for the kanban board page
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';

const KanbanHeader = () => {
  return (
    <Box sx={{ p: 3, bgcolor: '#f5f5f5' }}>
        <Typography variant="h5" sx={{ mb: 1 }}>Kanban</Typography>
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/dashboard" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }}}>
                Dashboard
            </Link>
            <Typography color="text.primary">Kanban</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default KanbanHeader;
