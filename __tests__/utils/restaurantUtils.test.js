const { Cuisines, Dishes } = require("../../utils/data");
const { generateRandomMenuItem, generateMenu, selectRandomCuisine } = require("../../utils/restaurantUtils");

describe('Restaurant Functions', () => {
  describe("generateRandomMenuItem", () => {
  test('User gets a random dish', () => {
      const dishes = Dishes.italian;
      const randomDish = generateRandomMenuItem(dishes);
      expect(dishes).toContainEqual(randomDish);
  })
});
  describe("generateMenu", () => {
  test('User gets a menu', () => {
      const italianmenu = Dishes.italian;
      const indianmenu = Dishes.indian;
      const chinesemenu = Dishes.chinese;
      const veganmenu = Dishes.vegan;
      const mexicanmenu = Dishes.mexican;
      const menus = [italianmenu, indianmenu, chinesemenu, veganmenu, mexicanmenu];
      const fullMenu = generateMenu(menus);
      expect(menus).toContainEqual(fullMenu);
  })
});
  describe("selectRandomCuisine", () => {
  test('User gets a random cuisine', () => {
      const cuisines = Cuisines;
      const randomCuisine = selectRandomCuisine(cuisines);
      expect(cuisines).toContainEqual(randomCuisine);
  })
});
});
