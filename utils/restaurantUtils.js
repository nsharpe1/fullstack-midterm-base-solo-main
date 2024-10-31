const { Dishes, Cuisines, Restaurants } = require("./data");
// console.log(Cuisines);
// console.log(Dishes.indian.length);
// console.log(Dishes.indian[3]);
generateRandomMenuItem(Dishes.italian);
selectRandomCuisine(Cuisines);
generateMenu(Dishes);
findDishesbyResturantId('the-gourmet-bistro');
generateDishoftheDay('Daily special');

/**
 *
 * Generates a random menu item based on a given cuisine.
 * @param {string} cuisine - The desired cuisine for the menu item.
 * @returns {*} A random menu item with a name, description, price, and special status.
 */
function generateRandomMenuItem(cuisine) {
  let numbercuisineitems = cuisine.length;
  let randomnumber = Math.floor(Math.random() * numbercuisineitems);
  let randommenuitem = cuisine[randomnumber];
  return randommenuitem;
}

/**
 * Selects a random cuisine type for a restaurant.
 * @returns {*} A random cuisine type.
 */
function selectRandomCuisine() {
  let numbercuisinetype = Cuisines.length;
  let randomcuisine = Math.floor(Math.random() * numbercuisinetype);
  let randomcuisinetype = Cuisines[randomcuisine];
  return randomcuisinetype;
}

/**
 * Generates a menu for a restaurant, including a random cuisine type and a list of menu items.
 * @returns {*} An object representing the restaurant's menu, including the cuisine type and items.
 */
function generateMenu() {
  let randomcuisine = selectRandomCuisine();
  let randomrestaurant = Dishes[randomcuisine];
  return randomrestaurant;
}

/**
 * Additional utility functions can be defined here if needed.
 */
function findDishesbyResturantId(id){
  let disheslist = [];
  // console.log(Dishes.italian[0].restaurantid);
  Dishes.italian.forEach(dish => {
    // console.log(dish.restaurantid);
    if (dish.restaurantid === id) {
      // console.log(dish.restaurantid);
      disheslist.push(dish);
    }
  });
  Dishes.indian.forEach(dish => {
    // console.log(dish.restaurantid);
    if (dish.restaurantid === id) {
      disheslist.push(dish);
    }
  });
  Dishes.chinese.forEach(dish => {
    if (dish.restaurantid === id) {
      console.log(dish.restaurantid);
      disheslist.push(dish);
    }
  });
  Dishes.vegan.forEach(dish => {
    if (dish.restaurantid === id) {
      disheslist.push(dish);
    }
  });
  Dishes.mexican.forEach(dish => {
    if (dish.restaurantid === id) {
      disheslist.push(dish);
    }
  });
  // console.log(disheslist);
  return disheslist;
}

function generateDishoftheDay(name) {
  let dailyspeciallist = [];
  Dishes.italian.forEach(dish => {
    if (dish.dailySpecial === name) {
      dailyspeciallist.push(dish);
    }
  });
  Dishes.indian.forEach(dish => {
    if (dish.dailySpecial === name) {
      dailyspeciallist.push(dish);
    }
  });
  Dishes.chinese.forEach(dish => {
    if (dish.dailySpecial === name) {
      console.log(dish.restaurantid);
      dailyspeciallist.push(dish);
    }
  });
  Dishes.vegan.forEach(dish => {
    if (dish.dailySpecial === name) {
      dailyspeciallist.push(dish);
    }
  });
  Dishes.mexican.forEach(dish => {
    if (dish.dailySpecial === name) {
      dailyspeciallist.push(dish);
    }
  });
  console.log(dailyspeciallist);
  return dailyspeciallist;
}

module.exports = { generateRandomMenuItem, selectRandomCuisine, generateMenu, generateDishoftheDay, findDishesbyResturantId };
