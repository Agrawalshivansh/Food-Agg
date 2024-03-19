export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

// export const soups: FoodItem[] = [
//   { id: 1, name: 'Tomato Soup', price: 100,  image: './assets/img/soups/tomato-soup.jpg', type: 'veg', quantity: 1 },
//   { id: 2, name: 'Chicken noodle soup', price: 150,  image: './assets/img/soups/chicken-noodle-soup.jpg', type: 'non-veg', quantity: 1 },
//   { id: 3, name: 'Manchow Soup', price: 120,  image: './assets/img/soups/manchow-soup.jpg', type: 'non-veg', quantity: 1 },
//   { id: 4, name: 'Hot and Sour Soup', price: 130,  image: './assets/img/soups/hot-and-sour-soup.jpg', type: 'veg', quantity: 1 },
//   { id: 5, name: 'Sweet Corn Soup', price: 110,  image: './assets/img/soups/sweet-corn-soup.jpg', type: 'veg', quantity: 1 }
// ];

export const starters: FoodItem[] = [
{ id: 1, name: 'Paneer Tikka', price: 200,  image: 'https://www.carolinescooking.com/wp-content/uploads/2021/09/paneer-tikka-featured-pic-sq.jpg', type: 'veg', quantity: 1 },
{ id: 2, name: 'Chicken Tikka', price: 250,  image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-kebab.jpg', type: 'non-veg', quantity: 1 },
{ id: 3, name: 'Panner 65', price: 180,  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBby_hXS3nt9udRnJWnV74KE9gmwi3dziVt1G9agcG714UuHdn9f6UZ-Ceugeivl0P_yE&usqp=CAU', type: 'veg', quantity: 1 },
{ id: 4, name: 'Seekh kebabs', price: 280,  image: 'https://i0.wp.com/www.funloveandcooking.com/wp-content/uploads/Seekh-Kabab-Kebabs-on-Skewers-recipe-funloveandcooking.com-1-2.jpg?fit=1019%2C680&ssl=1', type: 'non-veg', quantity: 1 },
{ id: 5, name: 'Chicken 65', price: 260,  image: 'https://tasteasianfood.com/wp-content/uploads/2022/11/chicken-65-recipe-square.jpeg.webp', type: 'non-veg', quantity: 1 },
{ id: 6, name: 'Spring Roll', price: 240,  image: 'https://productimages.withfloats.com/actual/624038417e882f0001e2fba6.jpg', type: 'veg', quantity: 1 },
{ id: 7, name: 'Fried Mozzarella Sticks', price: 250,  image: 'https://allshecooks.com/wp-content/uploads/2013/10/mozzarella-sticks.jpg', type: 'veg', quantity: 1 },
{ id: 8, name: 'Chilli Potato ', price: 250,  image: 'https://storage.googleapis.com/shy-pub/64121/1629517711523_SKU-0041_0.JPG', type: 'veg', quantity: 1 },
{ id: 9, name: 'Manchurian ', price: 220,  image: 'https://www.licious.in/blog/wp-content/uploads/2021/09/shutterstock_1650877375-600x600.jpg', type: 'veg', quantity: 1 },
{ id: 9, name: 'Chilli Prawns ', price: 220,  image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chilli-Prawns.jpg', type: 'non-veg', quantity: 1 },
];

// export const curries: FoodItem[] = [
//   {id:11, name: 'Butter Chicken', image: './assets/img/curries/butter-chicken.jpg', price: 350,  type:'non-veg', quantity: 1 },
//   {id:12, name: 'Panner Butter Masala', image: './assets/img/curries/paneer-butter-masala.jpg', price: 300, type:'veg', quantity: 1 },
//   {id:13, name: 'Mutton Kurma', image: './assets/img/curries/mutton-korma.jpg', price: 380, type:'non-veg', quantity: 1 },
//   {id:14, name: 'Mushroom Masala', image: './assets/img/curries/mushroom-curry.jpg', price: 280,  type: 'veg', quantity: 1 },
//   {id:15, name: 'Chicken Tikka Masala', image: './assets/img/curries/chicken-tikka-masala.jpg', price: 320,  type: 'non-veg', quantity: 1 },
//   {id:16, name: 'Boneless Chicken ', image: './assets/img/curries/boneless-chicken-curry.jpg', price: 320,  type: 'non-veg', quantity: 1 },
//   {id:17, name: 'Mughlai Chicken', image: './assets/img/curries/mughlai-chicken.jpg', price: 370,  type: 'non-veg', quantity: 1 },
//   {id:18, name: 'Methi Chaman', image: './assets/img/curries/methi-chaman.jpg', price: 280,  type: 'veg', quantity: 1 },
//   {id:19, name: 'Punjabi Chicken ', image: './assets/img/curries/punjabi-chicken-curry.jpeg', price: 360,  type: 'non-veg', quantity: 1 },
//   {id:20,name: 'Hyderabadi Chicken ', image: './assets/img/curries/hyderabadi-chicken-curry.jpg', price: 450,  type: 'non-veg', quantity: 1 }
// ];

// export const breads: FoodItem[] = [
//   {id:21, name: 'Naan', price: 50,  image: './assets/img/breads/naan.jpg', type: 'veg', quantity: 1 },
//   {id:22, name: 'Pulka', price: 30,  image: './assets/img/breads/pulka.jpg', type: 'veg', quantity: 1 },
//   {id:23, name: 'Kulcha', price: 60,  image: './assets/img/breads/kulcha.jpg', type: 'veg', quantity: 1 },
//   {id:24,name: 'Paratha', price: 40,  image: './assets/img/breads/paratha.jpg', type: 'veg', quantity: 1 },
//   {id:25, name: 'Rumali Roti', price: 20,  image: './assets/img/breads/rumali-roti.jpg', type: 'veg', quantity: 1 },
// ];
// export const mainCourses: FoodItem[] = [
//   {id:26, name: 'Veg Biryani', price: 300,  image: './assets/img/main-course/veg-biryani.jpg', type: 'veg', quantity: 1 },
//   {id:27, name: 'Mushroom Biryani', price: 450,  image: './assets/img/main-course/mushroom-biryani.jpeg', type: 'veg', quantity: 1 },
//   {id:28, name: 'Chicken Biryani', price: 350,  image: './assets/img/main-course/chicken-biryani.png', type: 'non-veg', quantity: 1 },
//   {id:29, name: 'Mutton Biryani', price: 400,  image: './assets/img/main-course/mutton-biryani.jpg', type: 'non-veg', quantity: 1 },
//   {id:30, name: 'Prawn Biryani', price: 450,  image: './assets/img/main-course/prawn-biryani.jpeg', type: 'non-veg', quantity: 1 },
//   {id:31, name: 'Egg Biryani', price: 250,  image: './assets/img/main-course/egg-biryani.jpg', type: 'non-veg', quantity: 1 },
//   {id:32, name: 'Paneer Biryani', price: 350,  image: './assets/img/main-course/paneer-biryani.jpg', type: 'veg', quantity: 1 },
//   {id:33, name: 'Hyderabadi Biryani', price: 450,  image: './assets/img/main-course/hyderabadi-biryani.jpg', type: 'non-veg', quantity: 1 },
//   {id:34, name: 'Kashmiri Biryani', price: 400,  image: './assets/img/main-course/kashmiri-biryani.jpg', type: 'non-veg', quantity: 1 },
//   {id:35, name: 'Fried Wings Biryani', price: 450,  image: './assets/img/main-course/fried-wings-biryani.jpg', type: 'non-veg', quantity: 1 }
// ];
//   export const desserts: FoodItem[] = [
//     {id:36, name: 'Gulab Jamun', image: './assets/img/desserts/gulab-jamun.jpg', price: 100,  type: 'veg', quantity: 1 },
//     {id:37, name: 'Kulfi', image: './assets/img/desserts/kulfi.jpg', price: 90,  type: 'veg', quantity: 1 },
//     {id:38, name: 'Kheer', image: './assets/img/desserts/kheer.jpg', price: 120,  type: 'veg', quantity: 1 },
//     {id:39, name: 'Phirni', image: './assets/img/desserts/phirni.jpg', price: 200,  type: 'veg', quantity: 1 },
//     {id:40, name: 'Ras Malai', image: './assets/img/desserts/ras-malai.jpg', price: 150,  type: 'veg', quantity: 1 },
//     ];
//     export const iceCreams: FoodItem[] = [
//       {id:41, name: 'Caramel Vanilla', price: 50,  image: './assets/img/icecreams/vanilla-ice-cream.jpg', type: 'veg', quantity: 1 },
//       {id:42, name: 'Chocolate', price: 60,  image: './assets/img/icecreams/chocolate-ice-cream.jpg', type: 'veg', quantity: 1 },
//       {id:43, name: 'Strawberry', price: 60,  image: './assets/img/icecreams/strawberry-ice-cream.jpg', type: 'veg', quantity: 1 },
//       {id:44, name: 'Butterscotch', price: 70,  image: './assets/img/icecreams/butterscotch-ice-cream.jpg', type: 'veg', quantity: 1 },
//       {id:45, name: 'Mango', price: 80,  image: './assets/img/icecreams/mango-ice-cream.jpg', type: 'veg', quantity: 1 },
//     ];

    export const milkshakes: FoodItem[] = [
      {id:10, name: 'Chocolate Shake', price: 150,  image: 'https://static.toiimg.com/photo/84170265.cms', type: 'veg', quantity: 1 },
      {id:11, name: 'Strawberry Shake', price: 150,  image: 'https://valentinascorner.com/wp-content/uploads/2022/03/Strawberry-Milkshake--500x500.jpg', type: 'veg', quantity: 1 },
      {id:12, name: 'Vanilla Shake', price: 150,  image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/12/classic-vanilla-milkshake-9e7745f.jpg?quality=90&resize=544,494', type: 'veg', quantity: 1 },
      {id:13, name: 'Oreo Shake', price: 170,  image: 'https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-3.jpg', type: 'veg', quantity: 1 },
      {id:14, name: 'Caramel Shake', price: 170,  image: 'https://thymeforflavor.com/wp-content/uploads/2022/08/feature-3-caramel-milkshake.jpg', type: 'veg', quantity: 1 },
      {id:14, name: 'Mango Shake', price: 170,  image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-milkshake-recipe.jpg', type: 'veg', quantity: 1 },
    ];
