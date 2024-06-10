import Image from "next/image";
import type { Pokemon } from "~/data";
import { pokedex } from "~/pokedex";

function formatSpriteSrc(pokemonName: string, hasAltForms: boolean) {
  let regex: RegExp;
  if (hasAltForms) {
    regex = /[^a-zA-Z0-9-]/g;
  } else {
    regex = /[^a-zA-Z0-9]/g;
  }
  const cleanedString = pokemonName.replace(regex, "");
  return cleanedString.toLowerCase();
}

function generateSprite(pokemon: Pokemon, variant?: "gen5" | "pixel") {
  const pixelSrc = `https://raw.githubusercontent.com/May8th1995/sprites/master/${pokemon.name}.png`;

  const isAlternativeForm = !!pokemon.baseSpecies;
  const formattedPokemonName = formatSpriteSrc(pokemon.name, isAlternativeForm);
  const gen5Src = `https://play.pokemonshowdown.com/sprites/gen5/${formattedPokemonName}.png`;

  const src = variant === "gen5" ? gen5Src : pixelSrc;

  return { pixelSrc, gen5Src, src };
}

export function generatePixelSprite(pokemon: Pokemon) {
  const { pixelSrc } = generateSprite(pokemon);
  return pixelSrc;
}

export function generateGen5Sprite(pokemon: Pokemon) {
  const { gen5Src } = generateSprite(pokemon);
  return gen5Src;
}

export default function Page({ params }: { params: { pokemonName: string } }) {
  const pokemon = pokedex[params.pokemonName];

  if (!pokemon) return "Pokemon not found";

  const { src } = generateSprite(pokemon, "pixel");

  return (
    <div>
      <div>My Pokemon: {params.pokemonName}</div>
      <div>
        <Image width={96} height={96} src={src} alt={pokemon.name} />
      </div>
    </div>
  );
}
