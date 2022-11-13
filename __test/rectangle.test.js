const area = require("../area/rectangle");

test("The area of rectangle is wrong", () => {
  expect(area(2, 3)).toBe(6);
});

test("The area of rectangle is wrong", () => {
  expect(area(4, 3)).toBe(12);
});
