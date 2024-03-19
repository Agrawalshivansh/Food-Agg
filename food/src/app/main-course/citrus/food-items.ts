export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const curries: FoodItem[] = [
  {id:11, name: 'Chana Masala', image: 'https://www.allrecipes.com/thmb/siVGrqeV5Q7xvRGaWWA_5ph9Dds=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/236564-chana-masala-savory-indian-chick-peas-3x4-672-copy-63ae3db5114644419c313cd0e479c9dd.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Aloo Gobi', image: 'https://cookingfromheart.com/wp-content/uploads/2020/11/Aloo-Gobi-Matar-4-500x375.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Butter Chicken', image: 'https://t3.ftcdn.net/jpg/06/01/41/66/360_F_601416673_Tn9dqtXuujNiavuJnNNspgcDezsStYpD.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Rogan Josh', image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/AC8DC712-A5F2-4A77-8A37-C28856E59180/Derivates/08296BFB-2A2A-4896-AA8F-8B3F6D679EE8.jpg', price: 350,  type:'non-veg', quantity: 1 }
]
export const breads: FoodItem[] = [
  {id:11, name: 'Garlic Bread', image: 'https://saltedmint.com/wp-content/uploads/2024/01/Garlic-Naan-Bread-2.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Naan', image: 'https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'tortilla', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Tortillas_EXPS_THON23_48431_DR_05_10_7b.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Dinner Rolls', image: 'https://joyfoodsunshine.com/wp-content/uploads/2018/10/best-homemade-dinner-rolls-recipe-6.jpg', price: 350,  type:'veg', quantity: 1 }
]
export const mainCourses: FoodItem[] = [
  {id:11, name: 'Veggie Stir-Fry with Tofu', image: 'https://pinchofyum.com/wp-content/uploads/Honey-Ginger-Tofu-Veggie-Stir-Fry-Square.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Mushroom Risotto', image: 'https://www.allrecipes.com/thmb/Pow6PE9UyushNDB4wutXNnmriX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/85389-gourmet-mushroom-risotto-86-7a2d218f53e94ccfaecc69b6fd93cab8.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Spinach, Ricotta Shells', image: 'https://thecarrotunderground.com/wp-content/uploads/2021/07/Vegan-Spinach-Ricotta-Stuffed-Shells-5.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Baked Salmon Fillet', image: 'https://www.inspiredtaste.net/wp-content/uploads/2018/09/Easy-Oven-Baked-Salmon-Recipe-2-1200.jpg', price: 350,  type:'non-veg', quantity: 1 }
]