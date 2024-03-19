export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}


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
    export const milkshakes: FoodItem[] = [
      {id:10, name: 'Chocolate Shake', price: 150,  image: 'https://static.toiimg.com/photo/84170265.cms', type: 'veg', quantity: 1 },
      {id:11, name: 'Strawberry Shake', price: 150,  image: 'https://valentinascorner.com/wp-content/uploads/2022/03/Strawberry-Milkshake--500x500.jpg', type: 'veg', quantity: 1 },
      {id:12, name: 'Vanilla Shake', price: 150,  image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/12/classic-vanilla-milkshake-9e7745f.jpg?quality=90&resize=544,494', type: 'veg', quantity: 1 },
      {id:13, name: 'Oreo Shake', price: 170,  image: 'https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-3.jpg', type: 'veg', quantity: 1 },
      {id:14, name: 'Caramel Shake', price: 170,  image: 'https://thymeforflavor.com/wp-content/uploads/2022/08/feature-3-caramel-milkshake.jpg', type: 'veg', quantity: 1 },
      {id:14, name: 'Mango Shake', price: 170,  image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-milkshake-recipe.jpg', type: 'veg', quantity: 1 },
    ];
