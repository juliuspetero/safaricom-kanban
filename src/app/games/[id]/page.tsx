'use client';
import GraphQueries from '@/graphql/client/__queries__';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import Container from '@mui/material/Container';
import React from 'react';

const Game = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GraphQueries.GAME_ID_QUERY, {
      variables: { gameId: id },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <Container>
        <h1>GAME</h1>
        <div>
          <h2>{data.game.title}</h2>
          <p>Platform: {data.game.platform}</p>
        </div>
      </Container>
    );
}

export default Game;
