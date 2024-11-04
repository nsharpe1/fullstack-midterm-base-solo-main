const Restaurants = [
    {
        name: 'The Gourmet Bistro',
        id: 'the-gourmet-bistro',
    },
    {
        name: 'Spicy Kitchen',
        id: 'spicy-kitchen',
    },
    {
        name: 'Healthy Eats',
        id: 'healthy-eats',
    },
    {
        name: 'Comfort Diner',
        id: 'comfort-diner',
    },
    {
        name: 'Sweet Tooth Bakery',
        id: 'sweet-tooth-bakery',
    },
];

const Cuisines = [
    'italian',
    'indian',
    'chinese',
    'vegan',
    'mexican',
];

//Dishes generated courtesy of ChatGPT, I have absolutely no idea if these are real dishes, or if the descriptions are correct.
const Dishes = {
    'italian': [
        { name: 'Spaghetti Carbonara', description: 'Classic Roman pasta with eggs, cheese, pancetta, and pepper.', price: 12.50, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Margherita Pizza', description: 'Simple pizza topped with tomato, mozzarella, and fresh basil.', price: 10.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Daily special', cusinetype: 'italian' },
        { name: 'Lasagna', description: 'Layers of pasta with meat sauce, béchamel, and cheese.', price: 14.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Risotto', description: 'Creamy Arborio rice cooked with broth, flavored with saffron.', price: 15.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Tiramisu', description: 'Coffee-flavored dessert with layers of mascarpone and cocoa.', price: 7.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Penne Arrabbiata', description: 'Pasta in a spicy tomato sauce with garlic and chili.', price: 11.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Fettuccine Alfredo', description: 'Creamy pasta dish with butter and Parmesan cheese.', price: 13.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Bruschetta', description: 'Toasted bread topped with diced tomatoes, garlic, and basil.', price: 8.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic.', price: 9.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Gnocchi', description: 'Soft potato dumplings served with various sauces.', price: 12.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Pesto Pasta', description: 'Pasta tossed with basil pesto, garlic, and pine nuts.', price: 12.50, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Osso Buco', description: 'Braised veal shanks cooked with vegetables and broth.', price: 20.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Ribollita', description: 'Tuscan soup made with bread, beans, and vegetables.', price: 10.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Bolognese Sauce', description: 'Rich meat sauce made with ground beef, tomatoes, and herbs.', price: 14.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Arancini', description: 'Fried rice balls filled with cheese or meat.', price: 9.50, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Panna Cotta', description: 'Creamy dessert made with sweetened cream thickened with gelatin.', price: 6.50, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Saltimbocca', description: 'Veal wrapped in prosciutto and sage, cooked in white wine.', price: 18.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Focaccia', description: 'Flat oven-baked bread topped with herbs and olive oil.', price: 5.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Cioppino', description: 'Seafood stew made with fish, shellfish, and tomato broth.', price: 22.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' },
        { name: 'Cacciucco', description: 'Tuscan fish stew with various seafood and bread.', price: 20.00, restaurantid: 'the-gourmet-bistro', dailySpecial: 'Not daily special', cusinetype: 'italian' }
    ],
    'indian': [
        { name: 'Pani Puri', description: 'Crispy puris filled with spiced water, tamarind chutney, and potatoes.', price: 7.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Masala Dosa', description: 'Thin rice crepe filled with spiced potato filling, served with chutney and sambar.', price: 10.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Daily special', cusinetype: 'indian' },
        { name: 'Idli', description: 'Steamed rice cakes often served with sambar and coconut chutney.', price: 8.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Vada', description: 'Savory doughnuts made from fermented lentils, often served with sambar.', price: 6.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Bhindi Masala', description: 'Stir-fried okra cooked with onions, tomatoes, and spices.', price: 9.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Rajma', description: 'Red kidney beans cooked in a spiced tomato gravy.', price: 10.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Kofta Curry', description: 'Spiced meat or vegetable balls served in a rich curry.', price: 12.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Fish Curry', description: 'Tangy and spicy curry made with fresh fish and coconut milk.', price: 14.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Aloo Paratha', description: 'Stuffed flatbread filled with spiced mashed potatoes, served with yogurt or pickle.', price: 10.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Baingan Bharta', description: 'Roasted eggplant mashed and cooked with onions, tomatoes, and spices.', price: 11.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Paneer Butter Masala', description: 'Paneer cubes cooked in a creamy tomato sauce.', price: 12.50, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Pesarattu', description: 'Green gram (moong dal) crepes served with ginger chutney.', price: 9.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Chicken Chettinad', description: 'Fiery chicken curry made with a variety of spices from the Chettinad region.', price: 15.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Gajar Ka Halwa', description: 'Sweet carrot pudding cooked with milk, ghee, and sugar.', price: 7.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Pappadum', description: 'Thin, crispy wafers made from lentil flour, often served as an accompaniment to meals.', price: 4.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Keema', description: 'Minced meat curry, often made with lamb or goat, cooked with peas and spices.', price: 14.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Pulao', description: 'Fragrant rice dish cooked with vegetables, meat, and spices.', price: 11.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Methi Thepla', description: 'Flatbread made with fenugreek leaves and spices, popular in Gujarat.', price: 9.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Sev Puri', description: 'Crispy puris topped with diced potatoes, onions, chutneys, and sev (crunchy noodles).', price: 8.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' },
        { name: 'Rasgulla', description: 'Soft, spongy cheese balls soaked in sugar syrup, a popular Bengali dessert.', price: 5.00, restaurantid: 'sweet-tooth-bakery', dailySpecial: 'Not daily special', cusinetype: 'indian' }
    ],
    'chinese': [
        { name: 'Sweet and Sour Pork', description: 'Pork cooked in a tangy sweet and sour sauce.', price: 11.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Kung Pao Chicken', description: 'Spicy stir-fried chicken with peanuts and vegetables.', price: 12.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Spring Rolls', description: 'Crispy rolls filled with vegetables and sometimes meat.', price: 8.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Peking Duck', description: 'Crispy-skinned duck served with pancakes and hoisin sauce.', price: 25.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Daily special', cusinetype: 'chinese' },
        { name: 'Mapo Tofu', description: 'Spicy tofu dish with minced meat and chili bean paste.', price: 10.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Chow Mein', description: 'Stir-fried noodles with vegetables and meat or tofu.', price: 10.50, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Dumplings', description: 'Stuffed dough pockets, steamed or fried, often filled with meat or vegetables.', price: 9.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Hot Pot', description: 'Dish where ingredients are cooked in a simmering pot of broth at the table.', price: 20.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Fried Rice', description: 'Stir-fried rice with vegetables, eggs, and choice of meat.', price: 9.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Egg Foo Young', description: 'Omelet filled with vegetables and meat, served with gravy.', price: 10.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Char Siu', description: 'Cantonese roasted pork with a sweet and savory glaze.', price: 12.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Wonton Soup', description: 'Soup with wontons filled with meat or shrimp.', price: 10.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Ma Po Tofu', description: 'Tofu in a spicy sauce with minced meat and scallions.', price: 10.50, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Szechuan Pepper Chicken', description: 'Spicy chicken stir-fried with Szechuan peppercorns.', price: 12.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Beef and Broccoli', description: 'Stir-fried beef with broccoli in a savory sauce.', price: 12.50, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Sesame Chicken', description: 'Fried chicken in a sweet sesame sauce.', price: 11.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Mongolian Beef', description: 'Beef stir-fried with green onions and soy sauce.', price: 13.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Chili Garlic Shrimp', description: 'Shrimp cooked with garlic and chili sauce.', price: 14.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' },
        { name: 'Buddha Bowl', description: 'Healthy bowl with grains, vegetables, and proteins.', price: 10.00, restaurantid: 'spicy-kitchen', dailySpecial: 'Not daily special', cusinetype: 'chinese' }
    ],
    'vegan': [
        { name: 'Chickpea Salad', description: 'Fresh salad with chickpeas, vegetables, and lemon dressing.', price: 8.00, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Vegan Burger', description: 'Plant-based burger served with lettuce and tomato.', price: 10.00, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Quinoa Bowl', description: 'Nutritious bowl with quinoa, vegetables, and avocado.', price: 12.00, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Lentil Soup', description: 'Hearty soup made with lentils and vegetables.', price: 9.00, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Stuffed Peppers', description: 'Bell peppers stuffed with rice, beans, and spices.', price: 11.00, restaurantid: 'healthy-eats', dailySpecial: 'Daily special', cusinetype: 'vegan' },
        { name: 'Vegan Tacos', description: 'Corn tortillas filled with lentils, avocado, and salsa.', price: 10.00, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Tofu Stir-Fry', description: 'Stir-fried tofu with seasonal vegetables and soy sauce.', price: 11.00, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Zucchini Noodles', description: 'Spiralized zucchini served with marinara sauce.', price: 10.50, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Smoothie Bowl', description: 'Smoothie topped with fruits, seeds, and nuts.', price: 9.00, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Veggie Wrap', description: 'Wrap filled with hummus and assorted vegetables.', price: 8.50, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Cauliflower Wings', description: 'Buffalo-style cauliflower bites served with dipping sauce.', price: 9.50, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Chili', description: 'Spicy bean chili served with cornbread.', price: 11.00, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Coconut Curry', description: 'Creamy curry made with coconut milk and vegetables.', price: 12.00, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Avocado Toast', description: 'Toasted bread topped with smashed avocado and seeds.', price: 8.00, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Mushroom Risotto', description: 'Creamy risotto made with mushrooms and vegetable broth.', price: 12.50, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' },
        { name: 'Vegan Pizza', description: 'Pizza topped with vegan cheese and assorted vegetables.', price: 12.00, restaurantid: 'healthy-eats', dailySpecial: 'Not daily special', cusinetype: 'vegan' }
    ],
    'mexican': [
        { name: 'Tacos al Pastor', description: 'Tacos filled with marinated pork and pineapple.', price: 11.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Guacamole', description: 'Creamy avocado dip served with tortilla chips.', price: 7.00, restaurantid: 'comfort-diner', dailySpecial: 'Daily special', cusinetype: 'mexican' },
        { name: 'Chiles en Nogada', description: 'Stuffed peppers topped with walnut sauce.', price: 13.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Tamales', description: 'Corn dough filled with meat and wrapped in corn husks.', price: 10.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Mole Poblano', description: 'Rich sauce made with chocolate and spices, served over chicken.', price: 14.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Quesadilla', description: 'Flour tortilla filled with cheese and grilled until melted.', price: 8.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Sopes', description: 'Thick corn tortillas topped with beans, meat, and salsa.', price: 9.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Fajitas', description: 'Grilled meat served with sautéed peppers and onions.', price: 15.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Chimichangas', description: 'Deep-fried burritos filled with meat and cheese.', price: 12.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Enchiladas', description: 'Tortillas filled with meat or cheese, rolled and topped with sauce.', price: 11.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Ceviche', description: 'Seafood marinated in lime juice and mixed with onions and cilantro.', price: 13.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Elote', description: 'Grilled corn on the cob topped with mayonnaise, cheese, and chili powder.', price: 5.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Pozole', description: 'Hearty soup made with hominy and meat, garnished with cabbage.', price: 12.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Tortilla Soup', description: 'Tomato-based soup with tortillas, avocado, and cheese.', price: 9.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Burrito', description: 'Flour tortilla filled with rice, beans, and choice of meat.', price: 10.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Churros', description: 'Fried dough pastry rolled in sugar and cinnamon.', price: 6.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Flan', description: 'Creamy caramel custard dessert.', price: 5.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' },
        { name: 'Agua Fresca', description: 'Refreshing fruit drink made with water and sugar.', price: 3.00, restaurantid: 'comfort-diner', dailySpecial: 'Not daily special', cusinetype: 'mexican' }
    ],
};


module.exports = {
    Cuisines,
    Dishes,
    Restaurants,
}