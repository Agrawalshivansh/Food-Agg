export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const curries: FoodItem[] = [
  {id:11, name: 'Paneer Tikka Masala', image: 'https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/paneer-tikka-masala.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Vegetable Korma', image: 'https://girlheartfood.com/wp-content/uploads/2021/02/Vegetarian-Korma-Recipe-500x375.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Palak Paneer', image: 'https://www.munatycooking.com/wp-content/uploads/2022/09/palak-paneer-feature-1200-x-1200-500x375.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Chicken Tikka Masala', image: 'https://media.istockphoto.com/id/579767430/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=EjeRH4r3w9qQ2WELp5qkqkUh1HbJJwRcFNNv1suOtvM=', price: 350,  type:'non-veg', quantity: 1 }
]
export const breads: FoodItem[] = [
  {id:11, name: 'Garlic Bread', image: 'https://saltedmint.com/wp-content/uploads/2024/01/Garlic-Naan-Bread-2.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Naan', image: 'https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'tortilla', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Tortillas_EXPS_THON23_48431_DR_05_10_7b.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Dinner Rolls', image: 'https://joyfoodsunshine.com/wp-content/uploads/2018/10/best-homemade-dinner-rolls-recipe-6.jpg', price: 350,  type:'veg', quantity: 1 }
]
export const mainCourses: FoodItem[] = [
  {id:11, name: 'Vegetable Lasagna', image: 'https://familystylefood.com/wp-content/uploads/2017/09/Roasted-Vegetable-Lasagna.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Grilled Vegetable Panini ', image: 'https://emeals-menubuilder.s3.amazonaws.com/v1/recipes/791041/pictures/large_grilled-vegetable-panini.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Lentil Curry', image: 'https://www.noracooks.com/wp-content/uploads/2022/07/lentil-curry-7.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Grilled Chicken Breast', image: 'https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-horizontal-1532030541.jpg?crop=0.615xw:0.923xh;0.176xw,0.0457xh&resize=1200:*', price: 350,  type:'non-veg', quantity: 1 }
]