export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const curries: FoodItem[] = [
  {id:11, name: 'Dal Makhani', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISo6T6ZYIKtKKMfydiOZ2PhIHV_vOpzfvYk5CUNKE-MN5Ns2uegZIhmUZXGC45BdX9tU&usqp=CAU', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Vegetable Jalfrezi', image: 'https://vegecravings.com/wp-content/uploads/2020/01/Vegetable-Jalfrezi-Recipe-Step-By-Step-Instructions-scaled.jpg.webp', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Malai Kofta', image: 'https://carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Chicken Curry', image: 'https://img-global.cpcdn.com/recipes/9496089593a8e543/1200x630cq70/photo.jpg', price: 350,  type:'non-veg', quantity: 1 }
]
export const breads: FoodItem[] = [
  {id:11, name: 'Garlic Bread', image: 'https://saltedmint.com/wp-content/uploads/2024/01/Garlic-Naan-Bread-2.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Naan', image: 'https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'tortilla', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Tortillas_EXPS_THON23_48431_DR_05_10_7b.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Dinner Rolls', image: 'https://joyfoodsunshine.com/wp-content/uploads/2018/10/best-homemade-dinner-rolls-recipe-6.jpg', price: 350,  type:'veg', quantity: 1 }
]
export const mainCourses: FoodItem[] = [
  {id:11, name: 'Veggie Pad Thai', image: 'https://img.taste.com.au/z9EIVHJg/taste/2021/02/10-minute-vegetarian-pad-thai-168946-2.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Eggplant Parmesan', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/2/16/0/FNK_Eggplant-Parmesan-H-111_s4x3.jpg.rend.hgtvcom.616.462.suffix/1518807329709.jpeg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Paneer Tikka Masala', image: 'https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/paneer-tikka-masala.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Beef Bourguignon', image: 'https://food-images.files.bbci.co.uk/food/recipes/boeuf_bourguignon_25475_16x9.jpg', price: 350,  type:'non-veg', quantity: 1 }
]