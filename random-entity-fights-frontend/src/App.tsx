import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { MainLayoutWrapper } from './App.style';
import Content from './components/content/Content';

// @ts-ignore
const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
        // @ts-ignore
        graphqlErrors.map(({ message }) => {
            // eslint-disable-next-line no-alert
            alert(`Graphql error ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:3000/graphql' }),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

const App: React.FC = () => (

    <ApolloProvider client={client}>
        <MainLayoutWrapper>
            <Content/>
        </MainLayoutWrapper>
    </ApolloProvider>

);

export default App;
