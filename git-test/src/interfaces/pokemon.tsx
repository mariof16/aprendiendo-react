export interface PokemonData {
    name:                     string;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
  }
  export interface Species {
    name: string;
    url:  string;
  }
  export interface Sprites {
    front_default:      string;
  }
  export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      Species;
  }
  
  export interface Type {
    slot: number;
    type: Species;
  }