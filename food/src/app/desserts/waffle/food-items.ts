export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const desserts: FoodItem[] = [
   {id:36, name: 'Fruit Tart', price: 500,image: 'https://c4.wallpaperflare.com/wallpaper/189/1022/420/dessert-food-mini-fruit-tart-fruit-tart-wallpaper-preview.jpg', type: 'veg', quantity: 1 },
   {id:39, name: 'Cupcakes ',price: 500,image: 'https://w0.peakpx.com/wallpaper/828/584/HD-wallpaper-cupcakes-cupcakes-food-sweet-dessert.jpg', type: 'veg', quantity: 1 },
   {id:40, name: 'Lava Cake ', price: 500,  image: 'https://www.unicornsinthekitchen.com/wp-content/uploads/2016/02/Molten-chocolate-lava-cake-1-700px-500x375.jpg', type: 'veg', quantity: 1 },
   {id:41, name: 'Devils Food Cake  ', price: 500,  image: 'https://i0.wp.com/www.bakingwithdan.com/wp-content/uploads/2015/07/chocolatecoveredstrawberryshortcake.jpg', type: 'veg', quantity: 1 },
   {id:42, name: 'Fruit Crumble  ', price: 500,  image: 'https://fullofplants.com/wp-content/uploads/2022/02/easy-fruit-crumble-vegan-with-crunchy-topping-26-scaled.jpg', type: 'veg', quantity: 1 },
   ];
   export const iceCreams: FoodItem[] = [
     {id:43, name: 'Gadbad Ice Cream', price: 50,  image: 'https://pbs.twimg.com/media/D9ErIcWUcAAjAVu.jpg', type: 'veg', quantity: 1 },
     {id:44, name: 'Falooda', price: 60,  image: 'https://img-global.cpcdn.com/recipes/da71a5523621ce88/1200x630cq70/photo.jpg', type: 'veg', quantity: 1 },
     {id:46, name: 'Mango Ice Cream', price: 70,  image: 'https://t3.ftcdn.net/jpg/01/73/71/18/360_F_173711801_6TCgCRhLPkl8iUugKJsKleIZKwDAoYYl.jpg', type: 'veg', quantity: 1 },
     {id:47, name: 'Saffron Pistachio Ice Cream', price: 80,  image: 'https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2016/09/saffron-ice-cream-with-pistachios-2.jpg?fit=640%2C400&ssl=1', type: 'veg', quantity: 1 },
     {id:48, name: 'Maple Bacon Ice Cream', image: 'https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/maple-bacon-ice-cream-sauce-recipe.jpg', price: 200,  type: 'veg', quantity: 1 },
   ]