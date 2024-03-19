export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}
export const starters: FoodItem[] = [
  { id: 1, name: 'Crispy Tofu Bites', price: 200,  image: 'https://thecozyapron.com/wp-content/uploads/2014/03/crispy-tofu_thecozyapron_1.jpg', type: 'veg', quantity: 1 },
  { id: 2, name: 'Vegetable Spring Rolls', price: 250,  image: 'https://cdn.pixabay.com/photo/2023/07/18/19/19/spring-rolls-8135469_640.jpg', type: 'veg', quantity: 1 },
  { id: 3, name: 'Quinoa Stuffed Peppers', price: 180,  image: 'https://veganheaven.org/wp-content/uploads/2017/11/Quinoa-Stuffed-Bell-Peppers-in-the-Slow-Cooker-2.jpg', type: 'veg', quantity: 1 },
  { id: 4, name: 'Sweet Potato Fries', price: 280,  image: 'https://joyfoodsunshine.com/wp-content/uploads/2022/12/baked-sweet-potato-fries-recipe-7.jpg', type: 'veg', quantity: 1 },
  { id: 5, name: 'Mushroom Bruschetta', price: 260,  image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shyma_Menon/Caramelized_Onion_Mushroom_Bruschetta_recipe_Veeba-5_1.jpg', type: 'veg', quantity: 1 },
  { id: 6, name: 'Corn and Cheese Quesadillas', price: 240,  image: 'https://img.taste.com.au/jYQ8qKGd/taste/2016/11/corn-and-cheese-quesadillas-with-avocado-salsa-31487-1.jpeg', type: 'non-veg', quantity: 1 },
  { id: 8, name: 'Garlic Prawns', price: 250,  image: 'https://img.taste.com.au/X2Hn34hm/taste/2016/11/creamy-garlic-prawns-98807-1.jpeg', type: 'non-veg', quantity: 1 },
  { id: 9, name: 'Lamb Meatballs', price: 220,  image: 'https://cookingwithcocktailrings.com/wp-content/uploads/2023/04/Spring-Lamb-Meatballs-with-Tzatziki-24.jpg', type: 'non-veg', quantity: 1 },
  ];
  
      export const beverages: FoodItem[] = [
        {id: 21,name: "Raspberry Rose Spritz",price: 160,image: "https://www.foulmouthgourmet.com/wp-content/uploads/2022/08/IMG_0737.jpg",type: "veg",quantity: 1},
        {id: 23,name: "Grapefruit Thyme Fizz",price: 150,image: "https://tripleseat.com/wp-content/uploads/2022/08/Cocktail-of-the-Week-Grapefruit-Thyme-Fizz.png",type: "veg",quantity: 1},
        {id: 24,name: "Pineapple Jalapeño Margarita",price: 120,image: "https://i.ytimg.com/vi/btG5yHoHk04/maxresdefault.jpg",type: "veg",quantity: 1},
        {id: 25,name: "Coconut Lime Mint Cooler",price: 190,image: "https://www.sheknows.com/wp-content/uploads/2018/08/coconut-mint-lime-mojito-wm_hjpp3w.jpeg",type: "veg",quantity: 1},
        {id: 26,name: "Blueberry Lavender Lemonade",price: 140,image: "https://cookieandkate.com/images/2017/04/blueberry-lavender-lemonade-recipe-550x368.jpg",type: "veg",quantity: 1}
    ]