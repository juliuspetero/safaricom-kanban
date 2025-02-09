'use client';
import GraphQueries from '@/graphql/client/__queries__';
import { useQuery } from '@apollo/client';
import { Card, CardContent, Container, Link, Typography } from '@mui/material';
import React from 'react';

const games = () => {
    const { loading, error, data } = useQuery(GraphQueries.GAMES_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <Container>
            <h1>GAMES</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {data.games.map((game: { id: string; platform: string; title: string }) => (
                <li key={game.id} style={{ marginBottom: '16px' }}>
                        <Card>
                            <CardContent>
                                <Link href={`/games/${game.id}`}>
                                    <Typography variant="h5" component="div">
                                        {game.title}
                                    </Typography>
                                </Link>
                                <Typography color="textSecondary">
                                Platform: {game.platform}
                                </Typography>
                            </CardContent>
                        </Card>
                    
                </li>
                ))}
            </ul>
        </Container>
    )
}

export default games;
