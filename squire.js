import { Character } from "./character.js";

export class Squire extends Character {
  constructor(name, family, age, status, assSucker) {
    super(name, family, age, status);
    this.characterToServe = "warrior";
    this.assSucker = assSucker;
    this.speech = "Soy un loser";
  }
}
