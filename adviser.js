import { Character } from "./character.js";

export class Adviser extends Character {
  constructor(name, family, age, characterToAdvise) {
    super(name, family, age);
    this.status = "alive";
    this.characterToAdvise = characterToAdvise;
    this.speech = "No sé por qué, pero creo que voy a morir pronto";
  }
}
