import { gql } from '@apollo/client';

const CREATE_DATA_MUTATION = gql`
    mutation createEntity(
        $input: EntityInput!
    ) {
        createEntity(input: $input) {
            id
            name
            img
            mass
        }
    }
`;

export default CREATE_DATA_MUTATION;
