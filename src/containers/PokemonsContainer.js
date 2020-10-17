import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/getPokemons';
import Pokemon from '../components/Pokemon';

export default function PokemonsContainer() {
    
    let pokemons_array;

    //pull out 'loading', 'error' and 'data' props from object returned by useQuery hook.
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: {first: 9}
    });

    //if data exists, map the pokemons array into Pokemon components.
    if (data && data.pokemons) {
        pokemons_array = data.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />);
    }
    
    //if query is in 'loading' state, show message on screen.
    if (loading) return <h3 className="center">Loading...</h3>;
    
    //if error exists, log it and show error message.
    if (error) {
        console.error(error);
        return <h2>Error!</h2>;
    }
    
    //Return Pokemon components if there is no error and not in loading state.
    return (
        <div className="container">
            {pokemons_array}
        </div>
    );
}