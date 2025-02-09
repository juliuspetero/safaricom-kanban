import { gql } from "@apollo/client"

const GraphQueries= {
    GAMES_QUERY: gql`
        query GamesQuery {
            games {
                id
                platform
                title
            }
        }`,
    GAME_ID_QUERY: gql`
        query GameIdQuery($gameId: ID!) {
            game(id: $gameId) {
                id
                platform
                title
            }
        }`,
    AUTHORS_QUERY: gql`
        query AuthorsQuery {
            authors {
                id
                name
                verified
            }
        }`,
        
}

export default GraphQueries;