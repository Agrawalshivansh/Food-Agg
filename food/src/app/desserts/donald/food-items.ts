export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

 
export const desserts: FoodItem[] = [
{id:36, name: 'Baklava', image: 'https://img.lovepik.com/photo/48011/0950.jpg_wh860.jpg', price: 100,  type: 'veg', quantity: 1 },
{id:37, name: 'Churros ', image: 'https://sadiesbubbleofyum.files.wordpress.com/2018/07/file1.jpeg?w=1200', price: 200,  type: 'veg', quantity: 1 },
{id:39, name: 'Mochi', image: 'https://t3.ftcdn.net/jpg/00/50/49/00/360_F_50490041_YYvl39ODexMpDowl1P0OD11m8qAvGB1e.jpg', price: 150,  type: 'veg', quantity: 1 },
{id:41, name: 'Key Lime Pie  ', price: 50,  image: 'https://www.allrecipes.com/thmb/1aP8lFhJJXky1qjk5fbMTzVAjtU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12698-Easy-Key-Lime-Pie-ddmfs-103444-4x3-1-eb1a59500e384b2b8939094ce18d08be.jpg', type: 'veg', quantity: 1 },
];
export const iceCreams: FoodItem[] = [
  {id:42, name: 'Thai TeaIce Cream', price: 50,  image: 'https://grantourismotravels.com/wp-content/uploads/2021/03/Thai-Tea-Ice-Cream-Recipe-Easy-No-Churn-Ice-Cream-Copyright-2022-Terence-Carter-Grantourismo-T-500x500.jpg', type: 'veg', quantity: 1 },
  {id:43, name: 'Ben & Jerrys', price: 60,  image: 'https://m.lovethispic.com/uploaded_images/93144-Ice-Cream-Tacos.jpg', type: 'veg', quantity: 1 },
  {id:44, name: 'Baskin Robbins  Ice Cream', price: 60,  image: 'https://content.jdmagicbox.com/comp/pune/f2/020pxx20.xx20.090504162632.h2f2/catalogue/baskin-robbins-shankar-sheth-road-pune-ice-cream-parlours-9e6t8.jpg', type: 'veg', quantity: 1 },
  {id:45, name: 'Coconut Lemongrass Ice Cream', price: 70,  image: 'https://hallmark.brightspotcdn.com/dims4/default/c401918/2147483647/strip/true/crop/3000x1684+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fd9%2Ff2%2Ffd25ba8d7c3e2100fd729b91b08e%2Fhome-family-lemongrass-basil-coconut-ice-cream-with-black-sesame-brittle.jpg', type: 'veg', quantity: 1 },
  {id:46, name: 'Saffron Pistachio Ice Cream', price: 80,  image: 'https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2016/09/saffron-ice-cream-with-pistachios-2.jpg?fit=640%2C400&ssl=1', type: 'veg', quantity: 1 },
  {id:47, name: 'Maple Bacon Ice Cream', image: 'https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/maple-bacon-ice-cream-sauce-recipe.jpg', price: 200,  type: 'veg', quantity: 1 },

];

    