export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const curries: FoodItem[] = [
  {id:11, name: 'Aloo Baingan', image: 'https://foodsandflavorsbyshilpi.com/wp-content/uploads/2014/01/FB-Thumnails-website-old-68.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Chole', image: 'https://vegecravings.com/wp-content/uploads/2017/01/chole-recipe-step-by-step-instructions-13.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Vegetable Jalfrezi', image: 'https://vegecravings.com/wp-content/uploads/2020/01/Vegetable-Jalfrezi-Recipe-Step-By-Step-Instructions-scaled.jpg.webp', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Chicken Korma', image: 'https://img.taste.com.au/vvnvhut_/taste/2016/11/chicken-korma-84835-1.jpeg', price: 350,  type:'non-veg', quantity: 1 }
]
export const breads: FoodItem[] = [
  {id:11, name: 'Garlic Bread', image: 'https://saltedmint.com/wp-content/uploads/2024/01/Garlic-Naan-Bread-2.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Naan', image: 'https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'tortilla', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Tortillas_EXPS_THON23_48431_DR_05_10_7b.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Dinner Rolls', image: 'https://joyfoodsunshine.com/wp-content/uploads/2018/10/best-homemade-dinner-rolls-recipe-6.jpg', price: 350,  type:'veg', quantity: 1 }
]
export const mainCourses: FoodItem[] = [
  {id:11, name: 'Vegetable Tagine', image: 'https://food-images.files.bbci.co.uk/food/recipes/spiced_vegetable_tagine_32956_16x9.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Spinach and Mushroom Risotto', image: 'https://img.taste.com.au/STVxFyEE/taste/2016/11/mushroom-and-spinach-risotto-93249-1.jpeg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Chicken Teriyaki', image: 'https://www.budgetbytes.com/wp-content/uploads/2022/04/Teriyaki-Chicken-plate.jpg', price: 350,  type:'non-veg', quantity: 1 },
  {id:11, name: 'Beef Fajitas', image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2019-06-Best-Ever-Sizzling-Steak-Fajitas%2FBest-Ever-Sizzling-Steak-Fajitas_015', price: 350,  type:'non-veg', quantity: 1 }
]