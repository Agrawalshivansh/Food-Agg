export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const desserts: FoodItem[] = [
   {id:36, name: 'Rice Krispie Treats',image: 'https://cheneetoday.com/wp-content/uploads/2022/01/Rice-krispie-treats-with-chocolate-chips.jpg', price: 100,  type: 'veg', quantity: 1 },
   {id:37, name: 'Fruit Salad ',image: 'https://img.freepik.com/free-photo/top-view-delicious-fruit-salad-inside-plate-with-fresh-fruits-gray-fruit-tree-exotic-tropical-photo-ripe-diet_140725-109945.jpg', price: 200,  type: 'veg', quantity: 1 },
   {id:39, name: 'Yogurt Parfait  ',image: 'https://www.veganblueberry.com/wp-content/uploads/2020/05/vegan-parfait-square.jpg', price: 150,  type: 'veg', quantity: 1 },
   {id:40, name: 'Devils Food Cake ', image: 'https://i0.wp.com/www.bakingwithdan.com/wp-content/uploads/2015/07/chocolatecoveredstrawberryshortcake.jpg', price: 150, type: 'veg', quantity: 1 },
   {id:41, name: 'Devils Food Cake ', image: 'https://i0.wp.com/www.bakingwithdan.com/wp-content/uploads/2015/07/chocolatecoveredstrawberryshortcake.jpg', price: 150, type: 'veg', quantity: 1 },
   {id:42, name: 'Devils Food Cake ', image: 'https://i0.wp.com/www.bakingwithdan.com/wp-content/uploads/2015/07/chocolatecoveredstrawberryshortcake.jpg', price: 150, type: 'veg', quantity: 1 },
   ];
   export const iceCreams: FoodItem[] = [
     {id:43, name: 'Pista Ice Cream', price: 50,  image: 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/09/Pistachio-ice-cream-hero-06.jpg', type: 'veg', quantity: 1 },
     {id:44, name: 'Strawberry Ice Cream ', price: 60,  image: 'https://img.lovepik.com/photo/48016/8878.jpg_wh860.jpg', type: 'veg', quantity: 1 },
     {id:46, name: 'Mango Ice Cream', price: 70,  image: 'https://t3.ftcdn.net/jpg/01/73/71/18/360_F_173711801_6TCgCRhLPkl8iUugKJsKleIZKwDAoYYl.jpg', type: 'veg', quantity: 1 },
     {id:47, name: 'Saffron Pistachio Ice Cream', price: 80,  image: 'https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2016/09/saffron-ice-cream-with-pistachios-2.jpg?fit=640%2C400&ssl=1', type: 'veg', quantity: 1 },
     {id:48, name: 'Maple Bacon Ice Cream', image: 'https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/maple-bacon-ice-cream-sauce-recipe.jpg', price: 200,  type: 'veg', quantity: 1 },
  
   ];
  