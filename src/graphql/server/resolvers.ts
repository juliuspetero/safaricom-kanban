import datasets from './__datasets__';

export const resolvers = {
    Query: {
        games: () => datasets.games,
        game: (_ : any, args: { id: string; }) => datasets.games.find(game => game.id === args.id),

        reviews: () => datasets.reviews,
        review: (_  : any, args: { id: string; }) => datasets.reviews.find(review => review.id === args.id),

        authors: () => datasets.authors,
        author: (_ : any, args: { id: string; }) => datasets.authors.find(author => author.id === args.id),
    },
    Game: {
        reviews: (game: { id: string; }) => datasets.reviews.filter(review => review.game_id === game.id),
    },
    Author: {
        reviews: (author: { id: string; }) => datasets.reviews.filter(review => review.author_id === author.id),
    },
    Review: {
        game: (review: { game_id: string; }) => datasets.games.find(game => game.id === review.game_id),
        author: (review: { author_id: string; }) => datasets.authors.find(author => author.id === review.author_id),
    },
    Mutation: {
        addGame: (_ : any, args: { game: any }) => {
            const newGame = {id: String(datasets.games.length + 1), ...args.game};
            datasets.games.push(newGame);
            return newGame;
        },
        deleteGame: (_ : any, args: { id: string; }) => {
            const game = datasets.games.find(game => game.id === args.id);
            datasets.games = datasets.games.filter(game => game.id !== args.id);
            return game;
        },
        updateGame: (_ : any, args: { id: string; game: any }) => {
            const game = datasets.games.find(game => game.id === args.id);
            datasets.games.map(game => game.id === args.id ? Object.assign(game, args.game) : game);
            return game;
        },
    }
    
};
