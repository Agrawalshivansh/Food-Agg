export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const curries: FoodItem[] = [
  {id:11, name: 'Baingan Bharta', image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2014/09/1.-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Vegetable Biryani', image: 'https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Palak Mushroom', image: 'https://vismaifood.com/storage/app/uploads/public/04f/d43/e0f/thumb__700_0_0_0_auto.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Lamb Rogan Josh', image: 'https://img.taste.com.au/TFQ_zAsZ/taste/2017/06/lamb-rogan-josh-127388-1.jpg', price: 350,  type:'non-veg', quantity: 1 }
]
export const breads: FoodItem[] = [
  {id:11, name: 'Garlic Bread', image: 'https://saltedmint.com/wp-content/uploads/2024/01/Garlic-Naan-Bread-2.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Naan', image: 'https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'tortilla', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Tortillas_EXPS_THON23_48431_DR_05_10_7b.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Dinner Rolls', image: 'https://joyfoodsunshine.com/wp-content/uploads/2018/10/best-homemade-dinner-rolls-recipe-6.jpg', price: 350,  type:'veg', quantity: 1 }
]
export const mainCourses: FoodItem[] = [
  {id:11, name: 'Veggie Quinoa Bowl', image: 'https://www.myweekendkitchen.in/wp-content/uploads/2019/02/quinoa_buddha_bowl_flatlay.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Spinach and Cheese Stuffed Chicken Breast', image: 'https://hips.hearstapps.com/hmg-prod/images/07-bacon-spinach-stuffed-chicken-11872-h-1582648479.jpg', price: 350,  type:'non-veg', quantity: 1 },
  {id:11, name: 'Mushroom and Spinach Pasta ', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Creamy-mushroom-and-spinach-pasta-9b0582e.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Vegetable Korma', image: 'https://thewanderlustkitchen.com/wp-content/uploads/2016/11/indian-vegetable-korma-recipe-3-2.jpg', price: 350,  type:'veg', quantity: 1 }
]