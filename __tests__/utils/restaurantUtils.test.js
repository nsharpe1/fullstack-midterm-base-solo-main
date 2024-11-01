const { Cuisines, Dishes } = require("../../utils/data");
const { generateRandomMenuItem, generateMenu, selectRandomCuisine } = require("../../utils/restaurantUtils");

describe('Restaurant Functions', () => {
    describe('generateRandomMenuItem', () => {
      let randomitem = generateRandomMenuItem(Dishes.italian);
      console.log(randomitem);
      expect(Dishes.italian).toContain(randomitem);
    });

    //describe('generateMenu', () => {
      // Test implementations go here
    //});

    //describe('selectRandomCuisine', () => {
      // Test implementations go here
    //});
});
