import React from "react";
import { isPropertySignature } from "typescript";
import "./Pokecard.css";

const Pokecard = (props: Pokemon) => {
  return (
    <div className="Pokecard" key={props.id}>
      <h3>{props.name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      ></img>
      <p>Type: {props.type}</p>
      <p>XP: {props.base_xp}</p>
    </div>
  );
};

interface Pokemon {
  id: number;
  name: string;
  type: string;
  base_xp: number;
}
export default Pokecard;
export type { Pokemon };
