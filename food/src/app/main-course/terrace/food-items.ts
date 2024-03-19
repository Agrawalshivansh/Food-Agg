export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const curries: FoodItem[] = [
  {id:11, name: 'Aloo Matar', image: 'https://cookingfromheart.com/wp-content/uploads/2019/01/Dhaba-Style-Aloo-Matar-6.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Kadai Paneer', image: 'https://madscookhouse.com/wp-content/uploads/2022/10/Kadhai-Paneer.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Shahi Paneer', image: 'https://myfoodstory.com/wp-content/uploads/2022/04/Shahi-Paneer-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Chicken Masala', image: 'https://www.allrecipes.com/thmb/1ul-jdOz8H4b6BDrRcYOuNmJgt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572-e02a25f8c7b745459a9106e9eb13de10.jpg', price: 350,  type:'non-veg', quantity: 1 }
]
export const breads: FoodItem[] = [
  {id:11, name: 'Garlic Bread', image: 'https://saltedmint.com/wp-content/uploads/2024/01/Garlic-Naan-Bread-2.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Naan', image: 'https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'tortilla', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Tortillas_EXPS_THON23_48431_DR_05_10_7b.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Dinner Rolls', image: 'https://joyfoodsunshine.com/wp-content/uploads/2018/10/best-homemade-dinner-rolls-recipe-6.jpg', price: 350,  type:'veg', quantity: 1 }
]
export const mainCourses: FoodItem[] = [
  {id:11, name: 'Veggie Enchiladas', image: 'https://butterwithasideofbread.com/wp-content/uploads/2014/04/Spinach-Black-Bean-Vegetarian-Enchiladas.38.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Veggie Lo Mein', image: 'https://cdn.momsdish.com/wp-content/uploads/2020/04/Veggie-Lo-Mein-Under-30-Minutes-07.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Beef Stir-Fry with Vegetables', image: 'https://sisijemimah.com/wp-content/uploads/2017/02/IMG_8966.jpg', price: 350,  type:'non-veg', quantity: 1 },
  {id:11, name: 'Chicken Curry', image: 'https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg', price: 350,  type:'non-veg', quantity: 1 }
]