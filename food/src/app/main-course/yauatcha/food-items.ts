export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const curries: FoodItem[] = [
  {id:11, name: 'Vegetable Dhansak', image: 'https://www.veganfoodandliving.com/wp-content/uploads/2020/04/Vegetable-Dhansak.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Gobi Manchurian', image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/04/1-53.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Baingan Ka Bharta', image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2014/09/1.-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Butter Prawns', image: 'https://homecookingwithsomjit.com/media/2022/02/butter-prawns.jpg', price: 350,  type:'non-veg', quantity: 1 }
]
export const breads: FoodItem[] = [
  {id:11, name: 'Garlic Bread', image: 'https://saltedmint.com/wp-content/uploads/2024/01/Garlic-Naan-Bread-2.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Naan', image: 'https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'tortilla', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Tortillas_EXPS_THON23_48431_DR_05_10_7b.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Dinner Rolls', image: 'https://joyfoodsunshine.com/wp-content/uploads/2018/10/best-homemade-dinner-rolls-recipe-6.jpg', price: 350,  type:'veg', quantity: 1 }
]
export const mainCourses: FoodItem[] = [
  {id:11, name: 'Vegetable Paella', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/17/2/FNM080109WE066_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371589386078.jpeg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Veggie Tikka Masala', image: 'https://marleyspoon.com/media/recipes/43963/main_photos/medium/veggie_tikka_masala-261eddd139dfaaf81895b0e8ed518165.jpeg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Grilled Pork Chops', image: 'https://static01.nyt.com/images/2023/06/07/multimedia/02GRILL-BASICSrex2-pork-chops-mvzf/07GRILL-BASICSrex2-pork-chops-mvzf-superJumbo.jpg', price: 350,  type:'non-veg', quantity: 1 },
  {id:11, name: 'Chicken Fajitas', image: 'https://brandsitesplatform-res.cloudinary.com/image/fetch/w_1540,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-au%2Foepp%2Frecipes%2Fnew-images%2Fcrunchy-rainbow-chicken-fajitas%2Fcrunchy-rainbow-chicken-fajitas-hero.jpg%3Fw%3D800%26rev%3D8c4276dfb9084c458c05494d1dc54d4d%201540w', price: 350,  type:'non-veg', quantity: 1 }
]