import { gql } from '@apollo/client';

export const LOAD_PEOPLE = gql`
    query entities {
        entities {
            id
            name
            img
            mass
            starship {
                name
                starshipImg
            }
        }
    }
`;

export const LOAD_STARSHIPS = gql`
    query entitiesStarship{
        entitiesStarship {
            id
            name
            img
            mass
            starship {
                name
                starshipImg
            }
        }
    }
`;
