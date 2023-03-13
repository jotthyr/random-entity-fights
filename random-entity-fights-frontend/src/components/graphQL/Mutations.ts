import { gql } from '@apollo/client'

export const CREATE_DATA_MUTATION = gql`
    mutation createEntity(
        $input: {
            $name: String!,
            $img: String!,
            $mass: Int!,
            $starship: {
                $name: String!,
                $starshipImg: String!
            }
        }
    ) {
        createEntity(
            input: $input: {
                $name: String!,
                $img: String!,
                $mass: Int!,
                $starship: {
                    $name: String!,
                    $starshipImg: String!
                }
            }
        ) {
            id
            name
            img
            mass
        }
    }

`;
