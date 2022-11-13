const area = require("../area/circle");

test("The area of a circle is wrong", () => {
  expect(area(2)).toBe(12.56);
});
