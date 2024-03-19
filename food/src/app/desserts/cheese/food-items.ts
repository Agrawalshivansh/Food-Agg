export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const desserts: FoodItem[] = [
    {id:36, name: 'Cinnamon Rolls', image: 'https://bakefromscratch.com/wp-content/uploads/2016/08/DSC8607-696x557.jpg', price: 100,  type: 'veg', quantity: 1 },
    {id:37, name: 'Ice Cream Sundae', image: 'https://img.freepik.com/premium-photo/ice-cream-sundae-light-background-american-colorful-ice-cream-dessert-traditional-tulip-glass_108146-7394.jpg', price: 120,  type: 'veg', quantity: 1 },
    {id:38, name: 'Chocolate Mousse', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAS06DsTjgP-shlRlPn8Z3AGtS0Tw2wmbyWg&usqp=CAU', price: 200,  type: 'veg', quantity: 1 },
    {id:39, name: 'Apple Pie', image: 'https://www.wallpaperflare.com/static/785/576/38/dessert-tart-fruit-apples-wallpaper.jpg', price: 150,  type: 'veg', quantity: 1 },
    {id:40, name: 'Pavlova ', image: 'https://img.freepik.com/free-photo/homemade-delicious-meringue-cake-pavlova-with-fresh-straberry-mascarpone-white-background_123827-29258.jpg', price: 150,  type: 'veg', quantity: 1 },
    {id:41, name: 'Key Lime Pie  ', price: 50,  image: 'https://www.allrecipes.com/thmb/1aP8lFhJJXky1qjk5fbMTzVAjtU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12698-Easy-Key-Lime-Pie-ddmfs-103444-4x3-1-eb1a59500e384b2b8939094ce18d08be.jpg', type: 'veg', quantity: 1 },
    ];
    export const iceCreams: FoodItem[] = [
      {id:42, name: 'Cinnamon Toast Crunch  ', price: 50,  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbkhoGBVEpnPWKZPX5Lh4NOfldhv3dQJdfA&usqp=CAU', type: 'veg', quantity: 1 },
      {id:43, name: 'Ben & Jerrys', price: 60,  image: 'https://m.lovethispic.com/uploaded_images/93144-Ice-Cream-Tacos.jpg', type: 'veg', quantity: 1 },
      {id:44, name: 'Baskin Robbins  Ice Cream', price: 60,  image: 'https://content.jdmagicbox.com/comp/pune/f2/020pxx20.xx20.090504162632.h2f2/catalogue/baskin-robbins-shankar-sheth-road-pune-ice-cream-parlours-9e6t8.jpg', type: 'veg', quantity: 1 },
      {id:45, name: 'Coconut Lemongrass Ice Cream', price: 70,  image: 'https://hallmark.brightspotcdn.com/dims4/default/c401918/2147483647/strip/true/crop/3000x1684+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fd9%2Ff2%2Ffd25ba8d7c3e2100fd729b91b08e%2Fhome-family-lemongrass-basil-coconut-ice-cream-with-black-sesame-brittle.jpg', type: 'veg', quantity: 1 },
      {id:46, name: 'Saffron Pistachio Ice Cream', price: 80,  image: 'https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2016/09/saffron-ice-cream-with-pistachios-2.jpg?fit=640%2C400&ssl=1', type: 'veg', quantity: 1 },
      {id:47, name: 'Maple Bacon Ice Cream', image: 'https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/maple-bacon-ice-cream-sauce-recipe.jpg', price: 200,  type: 'veg', quantity: 1 },
   
    ];
   
    