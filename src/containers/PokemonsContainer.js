import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/getPokemons';
import Pokemon from '../components/Pokemon';

export default function PokemonsContainer() {
    
    let pokemons_array;

    // const {loading, error, data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
    //     variables: {first: 9}
    // });
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: {first: 9}
    });

    if (data && data.pokemons) {
        pokemons_array = data.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />);
    }
    
    // console.log(error);
    // console.log(data);
    // console.log(loading);

    //if (error) return error.errors.map(e => <h2>Error: {e.message}</h2>);

    return (
        <div className="container">
            {loading ? <h2>...Loading</h2> : pokemons_array}
        </div>
    );
}