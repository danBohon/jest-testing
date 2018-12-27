const functions = require("./functions");
const testInit = require("./init");

describe("functions", () => {
  describe("getMorty", () => {
    it("returns Morty Smith", async () => {
      const person = await functions.getMorty();
      expect(person.name).toBe("Morty Smith");
    });
  }),
    describe("getAllLocations", () => {
      it("returns 20", async () => {
        const locations = await functions.getAllLocations();
        expect(locations.results.length).toBe(20);
      });
    });
});
