export type Trainer = {
  occupation: string;
  name: string;
  team: Array<Pokemon>;
  isOptional: boolean;
};

export type Pokemon = {
  num: number;
  name: string;
  types: Array<string>;
  color: string;
  form?: string;
  otherForms?: Array<string>;
  formeOrder?: Array<string>;
  baseSpecies?: string;
  [key: string]: unknown;
};

export type TypeName = (typeof typeNames)[number];

export type Type = {
  name: TypeName;
  color: string;
};

export const typeNames = [
  "Normal",
  "Fighting",
  "Flying",
  "Poison",
  "Ground",
  "Rock",
  "Bug",
  "Ghost",
  "Steel",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Fairy",
] as const;

export const types: Record<TypeName, Type> = {
  Normal: { name: "Normal", color: "#A8A77A" },
  Fire: { name: "Fire", color: "#ee8130" },
  Water: { name: "Water", color: "#6390f0" },
  Electric: { name: "Electric", color: "#f7d02c" },
  Grass: { name: "Grass", color: "#7ac74c" },
  Ice: { name: "Ice", color: "96d9d6" },
  Fighting: { name: "Fighting", color: "c22e28" },
  Poison: { name: "Poison", color: "a33ea1" },
  Ground: { name: "Ground", color: "e2bf65" },
  Flying: { name: "Flying", color: "a98ff3" },
  Psychic: { name: "Psychic", color: "f95587" },
  Bug: { name: "Bug", color: "a6b91a" },
  Rock: { name: "Rock", color: "b6a136" },
  Ghost: { name: "Ghost", color: "735797" },
  Dragon: { name: "Dragon", color: "6f35fc" },
  Dark: { name: "Dark", color: "705746" },
  Steel: { name: "Steel", color: "b7b7ce" },
  Fairy: { name: "Fairy", color: "d685ad" },
};
