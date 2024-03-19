export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const desserts: FoodItem[] = [
    {id:36, name: 'Fruit Sorbet', price: 500,image: 'https://media.istockphoto.com/id/174849692/photo/ice-cream-and-fruits.jpg?s=612x612&w=0&k=20&c=ExH1Ui9CHYH5kHYtJplLUZIipWnYBTMhLx9Y6iwvIKE=',type: 'veg', quantity: 1 },
    {id:39, name: 'Pumpkin Pie',price: 500, image: 'https://media.istockphoto.com/id/516248809/photo/homemade-pumpkin-pie-for-thanksgiving.jpg?s=612x612&w=0&k=20&c=pEHYeZDzY46-qhlGkRI_cEGm4cCGhbRpTMUHix8OQkQ=', type: 'veg', quantity: 1 },
    {id:40, name: 'Gingerbread Cake ', price: 500,  image: 'https://thecozyapron.com/wp-content/uploads/2022/12/gingerbread-cake_thecozyapron_1.jpg', type: 'veg', quantity: 1 },
    {id:41, name: 'Devils Food Cake  ', price: 500,  image: 'https://i0.wp.com/www.bakingwithdan.com/wp-content/uploads/2015/07/chocolatecoveredstrawberryshortcake.jpg', type: 'veg', quantity: 1 },
    {id:42, name: 'Fruit Crumble', price: 500,  image: 'https://fullofplants.com/wp-content/uploads/2022/02/easy-fruit-crumble-vegan-with-crunchy-topping-26-scaled.jpg', type: 'veg', quantity: 1 },
    ];
    export const iceCreams: FoodItem[] = [
      {id:43, name: 'Pineapple Coconut Nice Cream', price: 50,  image: 'https://ewscripps.brightspotcdn.com/dims4/default/4157231/2147483647/strip/true/resize/1280x720!/quality/90/?url=https%3A%2F%2Fwww.simplemost.com%2Fwp-content%2Fuploads%2F2020%2F06%2FAdobeStock_66630502-500x333.jpeg', type: 'veg', quantity: 1 },
      {id:44, name: 'Iced Tea Popsicles', price: 60,  image: 'https://lh6.googleusercontent.com/-jgLCjt0y2Uo/U8N86Yzdw1I/AAAAAAAEnso/-IdlTdqsqQs/s800/iced-tea-sangria-ice-pops-10.jpg', type: 'veg', quantity: 1 },
      {id:46, name: 'Mango Ice Cream', price: 70,  image: 'https://t3.ftcdn.net/jpg/01/73/71/18/360_F_173711801_6TCgCRhLPkl8iUugKJsKleIZKwDAoYYl.jpg', type: 'veg', quantity: 1 },
      {id:47, name: 'Saffron Pistachio Ice Cream', price: 80,  image: 'https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2016/09/saffron-ice-cream-with-pistachios-2.jpg?fit=640%2C400&ssl=1', type: 'veg', quantity: 1 },
      {id:48, name: 'Maple Bacon Ice Cream', image: 'https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/maple-bacon-ice-cream-sauce-recipe.jpg', price: 200,  type: 'veg', quantity: 1 },
   
    ];
   

    