import { PokemonData } from "../interfaces/pokemon";
export async function fetchPokemon(setData: (data: PokemonData | null) => void) {
  try {
    const response = await fetch(import.meta.env.VITE_ENDPOINT_URL);
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error(error);
  }
}