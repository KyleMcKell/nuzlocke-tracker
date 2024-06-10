import Image from "next/image";
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

function generateSprite(
  pokemonName: string,
  variant: "gen5" | "pixel",
  baseSpecies: string | undefined,
) {
  if (variant === "pixel") {
    const spriteSrc = `https://raw.githubusercontent.com/May8th1995/sprites/master/${pokemonName}.png`;
    return spriteSrc;
  }

  const src = `https://play.pokemonshowdown.com/sprites/gen5/${formatSpriteSrc(pokemonName, Boolean(baseSpecies))}.png`;
  return src;
}

export default function Page({ params }: { params: { pokemonName: string } }) {
  const pokemon = pokedex[params.pokemonName];

  if (!pokemon) return "Pokemon not found";

  const src = generateSprite(pokemon.name, "gen5", pokemon.baseSpecies);

  return (
    <div>
      <div>My Pokemon: {params.pokemonName}</div>
      <div>
        <Image width={96} height={96} src={src} alt={pokemon.name} />
      </div>
    </div>
  );
}
