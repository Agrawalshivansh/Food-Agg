export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const desserts: FoodItem[] = [
   {id:36, name: 'Watermelon Granita',image: 'https://www.neroliane.eu/media/contentmanager/content/recettes/granite__1_1.jpg', price: 100,  type: 'veg', quantity: 1 },
   {id:37, name: 'Berry Parfait  ',image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d02620bc058745a2b6109de1c931d2ab/BFV16606_Eggs_Benedict_Brunch_for_2_FB_HASH_BROWN_END.jpg', price: 200,  type: 'veg', quantity: 1 },
   {id:39, name: 'Frozen Banana Bites', image: 'https://www.busylittlechefs.com/wp-content/uploads/2019/04/frozen-banana-bites-1-500x400.jpg', price: 150,  type: 'veg', quantity: 1 },
   {id:40, name: 'Devils Food Cake  ', image: 'https://i0.wp.com/www.bakingwithdan.com/wp-content/uploads/2015/07/chocolatecoveredstrawberryshortcake.jpg',price: 500, type: 'veg', quantity: 1 },
   {id:41, name: 'Devils Food Cake  ', image: 'https://i0.wp.com/www.bakingwithdan.com/wp-content/uploads/2015/07/chocolatecoveredstrawberryshortcake.jpg',price: 500, type: 'veg', quantity: 1 },
   {id:42, name: 'Devils Food Cake  ', image: 'https://i0.wp.com/www.bakingwithdan.com/wp-content/uploads/2015/07/chocolatecoveredstrawberryshortcake.jpg',price: 500, type: 'veg', quantity: 1 },
   ];
   export const iceCreams: FoodItem[] = [
     {id:43, name: 'Banana Nice Cream', price: 50,  image: 'https://glutenfreeandmore.com/wp-content/uploads/2022/05/Banana-Nice-Cream.jpg', type: 'veg', quantity: 1 },
     {id:44, name: 'Iced Tea Popsicles', price: 60,  image: 'https://lh6.googleusercontent.com/-jgLCjt0y2Uo/U8N86Yzdw1I/AAAAAAAEnso/-IdlTdqsqQs/s800/iced-tea-sangria-ice-pops-10.jpg', type: 'veg', quantity: 1 },
     {id:46, name: 'Mango Ice Cream', price: 70,  image: 'https://t3.ftcdn.net/jpg/01/73/71/18/360_F_173711801_6TCgCRhLPkl8iUugKJsKleIZKwDAoYYl.jpg', type: 'veg', quantity: 1 },
     {id:47, name: 'Saffron Pistachio Ice Cream', price: 80,  image: 'https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2016/09/saffron-ice-cream-with-pistachios-2.jpg?fit=640%2C400&ssl=1', type: 'veg', quantity: 1 },
     {id:48, name: 'Maple Bacon Ice Cream', image: 'https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/maple-bacon-ice-cream-sauce-recipe.jpg', price: 200,  type: 'veg', quantity: 1 },
  
   ];
  