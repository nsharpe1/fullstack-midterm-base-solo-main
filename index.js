const { Restaurants, Cuisines, Dishes } = require("./utils/data");
const express = require('express');
const path = require('path');
const { generateRandomMenuItem, generateMenu, selectRandomCuisine, generateDishoftheDay, findDishesbyResturantId } = require("./utils/restaurantUtils");
const { console } = require("inspector");
const { request } = require("http");

const app = express();
let restaurantData = {}; //This should be populated soon

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
 
/**
 * GET /
 * Renders the homepage that lists cities and restaurant names.
 */
  app.get('/', (request, response) => {
    const randommenuitem = generateRandomMenuItem(Dishes.italian);
    console.log(randommenuitem);
    response.render('index', { restaurants: Restaurants, menuitem: randommenuitem });
  });
  
  /**
   * GET /restaurant/:name
   * Displays a specific restaurant's random menu.
   * The cuisine is randomly selected and a menu is generated based on it.
   */
  app.get('/restaurant', (request, response) => {
    const restaurantId = request.query.restaurantId;
    console.log(`restaurantId: ${restaurantId}`);
    const restaurantmenu = findDishesbyResturantId(restaurantId);
    response.render('restaurant', { menuitems: restaurantmenu});
    //Get the restaurants menu, and then display the page
  });

  //Add any other required routes here
  app.get('/menualerts', (request , response) => {
    const dishoftheday = generateDishoftheDay('Daily special');
    console.log(dishoftheday);
    response.render('menualerts', { dailyspecial: dishoftheday });
  });


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});