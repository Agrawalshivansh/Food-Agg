export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const desserts: FoodItem[] = [
   {id:36, name: 'Pineapple Upside-Down Cake', image: 'https://www.savingdessert.com/wp-content/uploads/2019/10/Pineapple-Upside-Down-Cake-2.jpg', price: 100,  type: 'veg', quantity: 1 },
   {id:37, name: 'Raspberry Sorbet', image: 'https://www.beyondthechickencoop.com/wp-content/uploads/2022/08/Raspberry-Sorbet.jpg', price: 120,  type: 'veg', quantity: 1 },
   {id:39, name: 'Blueberry Muffins', image: 'https://assets.epicurious.com/photos/596d1315ca5db8038f8fa833/16:9/w_1540,h_866,c_limit/How-To-Make-Blueberry-Muffins-071220171848.jpg', price: 200,  type: 'veg', quantity: 1 },
   {id:40, name: 'Lemon Meringue Pie', image: 'https://www.foodandwine.com/thmb/5udMPSy5UC0Tms1LGuNRu3eH0Rg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HD-200807-r-lemon-meringue-cc0b3fce6a5a4e57967c7002efeab4c3.jpg', price: 150,  type: 'veg', quantity: 1 },
   ];
   export const iceCreams: FoodItem[] = [
     {id:41, name: 'Rum Raisin ', price: 50,  image: 'https://www.rockrecipes.com/wp-content/uploads/2008/01/DSC_0223-1-of-1-3-1.jpg', type: 'veg', quantity: 1 },
     {id:42, name: 'Rainbow Sherbet', price: 60,  image: 'https://img.freepik.com/free-photo/multi-colored-dessert-balls-wooden-background-indulgence-galore-generative-ai_188544-9452.jpg', type: 'veg', quantity: 1 },
     {id:43, name: 'Mango Sorbet', price: 60,  image: 'https://img.buzzfeed.com/video-api-prod/assets/64db5851b24c4f83a4e0ce4f91af4200/FB_2_.jpg', type: 'veg', quantity: 1 },
     {id:44, name: 'Rocky Road', price: 70,  image: 'https://static1.squarespace.com/static/601ac7c1a6b2df46b0a6a495/t/64a873fc8296d5718993d113/1688761350754/rocky-road-web.jpg?format=1500w', type: 'veg', quantity: 1 },
     {id:45, name: 'Butter Pecan', price: 80,  image: 'https://recipes.net/wp-content/uploads/2023/05/dots-butter-pecan-ice-cream-recipe_e2691f49cf552397078ed315fd70a70a-300x300.jpeg', type: 'veg', quantity: 1 },
   ];
  
    