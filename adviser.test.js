import { Adviser } from "./adviser.js";

describe("Given a characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const adviser = new Adviser("Joffrey", "Baratheon", 35, "king");

      expect(adviser).toHaveProperty("name", "Joffrey");
      expect(adviser).toHaveProperty("family", "Baratheon");
      expect(adviser).toHaveProperty("age", 35);
      expect(adviser).toHaveProperty("status", "alive");
      expect(adviser).toHaveProperty("characterToAdvise", "king");
    });
  });
});
