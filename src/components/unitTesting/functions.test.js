const functions = require("./functions");

describe("functions", () => {
  describe("getTotalQty", () => {
    it("returns 6", () => {
      const array = [{ quantity: 1 }, { quantity: 2 }, { quantity: 3 }];
      expect(functions.getTotalQty(array)).toBe(6);
    });
    it("returns a number", () => {
      const array = [{ quantity: 1 }, { quantity: 2 }, { quantity: 3 }];
      expect(functions.getTotalQty(array)).not.toBe(null);
    });
  });
});
