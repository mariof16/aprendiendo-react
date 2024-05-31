import { PokemonData } from "../interfaces/pokemon";
export function fetchPokemon(setData: (data: PokemonData | null) => void) {
    fetch(import.meta.env.VITE_ENDPOINT_URL)
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }