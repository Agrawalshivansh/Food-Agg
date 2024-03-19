export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const curries: FoodItem[] = [
  {id:11, name: 'Thai Green Curry', image: 'https://heatherchristo.com/wp-content/uploads/2020/01/49336424473_259a36e340_o.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Egg Curry', image: 'https://c.ndtvimg.com/2021-11/8dmk5frg_kerala-egg-curry_625x300_19_November_21.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Mushroom Masala', image: 'https://i.ytimg.com/vi/CBUIRWETfTg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDdWBRkgFpLDNFGHUkguKjZ6ar1w', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Fish Curry', image: 'https://www.nestleprofessional.in/sites/default/files/2022-08/Alleppey-Fish-Curry.jpg', price: 350,  type:'non-veg', quantity: 1 }
]
export const breads: FoodItem[] = [
  {id:11, name: 'Garlic Bread', image: 'https://saltedmint.com/wp-content/uploads/2024/01/Garlic-Naan-Bread-2.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Naan', image: 'https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'tortilla', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Tortillas_EXPS_THON23_48431_DR_05_10_7b.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Dinner Rolls', image: 'https://joyfoodsunshine.com/wp-content/uploads/2018/10/best-homemade-dinner-rolls-recipe-6.jpg', price: 350,  type:'veg', quantity: 1 }
]
export const mainCourses: FoodItem[] = [
  {id:11, name: 'Veggie Pizza', image: 'https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&ssl=1', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Tofu Stir-Fry', image: 'https://khinskitchen.com/wp-content/uploads/2020/06/tofu.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Vegetable Biryani', image: 'https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Grilled Salmon Steak', image: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Grilled_Tangy_Lime_Salmon_Steak_Recipe-1.jpg', price: 350,  type:'non-veg', quantity: 1 }
]