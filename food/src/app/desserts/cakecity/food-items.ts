export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

 export const desserts: FoodItem[] = [
    {id:36, name: 'Tiramisu', image: 'https://media.istockphoto.com/id/517368976/photo/slice-of-dessert.webp?b=1&s=170667a&w=0&k=20&c=4H-Ejr0quaVSBu_vAt7mfK6ipFmYUUGG_ecDrhdNCg0=', price: 100,  type: 'veg', quantity: 1 },
    {id:37, name: 'Chocolate Cake', image: 'https://png.pngtree.com/background/20230610/original/pngtree-chocolate-cake-in-britain-to-impress-your-date-picture-image_3020639.jpg', price: 120,  type: 'veg', quantity: 1 },
    {id:38, name: 'Cheesecake', image: 'https://img.freepik.com/premium-photo/special-homemade-cheesecake-with-fresh_779468-1212.jpg', price: 200,  type: 'veg', quantity: 1 },
    {id:39, name: 'Apple Pie', image: 'https://www.wallpaperflare.com/static/785/576/38/dessert-tart-fruit-apples-wallpaper.jpg', price: 150,  type: 'veg', quantity: 1 },
    {id:40, name: 'Pavlova ', image: 'https://img.freepik.com/free-photo/homemade-delicious-meringue-cake-pavlova-with-fresh-straberry-mascarpone-white-background_123827-29258.jpg', price: 150,  type: 'veg', quantity: 1 },
    {id:41, name: 'Key Lime Pie  ', price: 50,  image: 'https://www.allrecipes.com/thmb/1aP8lFhJJXky1qjk5fbMTzVAjtU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12698-Easy-Key-Lime-Pie-ddmfs-103444-4x3-1-eb1a59500e384b2b8939094ce18d08be.jpg', type: 'veg', quantity: 1 },
    ];
    export const iceCreams: FoodItem[] = [
      {id:42, name: 'Black Sesame Ice Cream  ', price: 50,  image: 'https://www.justonecookbook.com/wp-content/uploads/2020/08/Black-Sesame-Ice-Cream-7672-I-1.jpg', type: 'veg', quantity: 1 },
      {id:43, name: 'Lavender Honey Ice Cream', price: 60,  image: 'https://blog.hipcooks.com/wp-content/uploads/2020/05/871A8866.jpg', type: 'veg', quantity: 1 },
      {id:44, name: 'Blueberry Basil', price: 60,  image: 'https://i0.wp.com/www.foulmouthgourmet.com/wp-content/uploads/2023/06/IMG_4532.jpg?fit=850%2C567&ssl=1', type: 'veg', quantity: 1 },
      {id:45, name: 'Coconut Lemongrass Ice Cream', price: 70,  image: 'https://hallmark.brightspotcdn.com/dims4/default/c401918/2147483647/strip/true/crop/3000x1684+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fd9%2Ff2%2Ffd25ba8d7c3e2100fd729b91b08e%2Fhome-family-lemongrass-basil-coconut-ice-cream-with-black-sesame-brittle.jpg', type: 'veg', quantity: 1 },
      {id:46, name: 'Saffron Pistachio Ice Cream', price: 80,  image: 'https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2016/09/saffron-ice-cream-with-pistachios-2.jpg?fit=640%2C400&ssl=1', type: 'veg', quantity: 1 },
      {id:47, name: 'Maple Bacon Ice Cream', image: 'https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/maple-bacon-ice-cream-sauce-recipe.jpg', price: 200,  type: 'veg', quantity: 1 },
   
    ];
   
    