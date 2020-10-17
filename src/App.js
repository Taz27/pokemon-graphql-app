import React from 'react';
import ApolloClient from 'apollo-boost';
//import 'ApolloProvider' Context Provider Component.
import { ApolloProvider } from '@apollo/react-hooks'; 
import PokemonsContainer from './containers/PokemonsContainer';
import CodedBy from './components/CodedBy';

import './App.css';

function App() {
  //create an ApolloClient instance and set Pokemon GraphQL API (server) endpoint.
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app'
  });

  return (
      <ApolloProvider client={client}>
          <main>
             <PokemonsContainer />
             <CodedBy />
          </main>
      </ApolloProvider>
  );
}

export default App;
