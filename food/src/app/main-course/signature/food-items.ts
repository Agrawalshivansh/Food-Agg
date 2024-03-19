export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const curries: FoodItem[] = [
  {id:11, name: 'Bhindi Masala', image: 'https://www.anveshan.farm/cdn/shop/articles/BhindiMasala.jpg?v=1690790485', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Matar Paneer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0YxJx2aVdAkJGL3v57AEJ5hIh9WXVWYSfg&usqp=CAU', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Goan Prawn Curry', image: 'https://myfoodstory.com/wp-content/uploads/2017/08/Goan-Prawn-Curry-with-Coconut-Ambot-Tik-4.jpg', price: 350,  type:'non-veg', quantity: 1 },
  {id:11, name: 'Chicken Vindaloo', image: 'https://www.seema.com/wp-content/uploads/2022/01/Chicken-Vindaloo.jpg', price: 350,  type:'non-veg', quantity: 1 }
]
export const breads: FoodItem[] = [
  {id:11, name: 'Garlic Bread', image: 'https://saltedmint.com/wp-content/uploads/2024/01/Garlic-Naan-Bread-2.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Naan', image: 'https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'tortilla', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Tortillas_EXPS_THON23_48431_DR_05_10_7b.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Dinner Rolls', image: 'https://joyfoodsunshine.com/wp-content/uploads/2018/10/best-homemade-dinner-rolls-recipe-6.jpg', price: 350,  type:'veg', quantity: 1 }
]
export const mainCourses: FoodItem[] = [
  {id:11, name: 'Ratatouille', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2019/05/Ratatouille-ea27a5c.jpg?quality=90&resize=440,400', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Vegetable Pad Thai ', image: 'https://img.taste.com.au/z9EIVHJg/taste/2021/02/10-minute-vegetarian-pad-thai-168946-2.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Mushroom Risotto', image: 'https://www.allrecipes.com/thmb/Pow6PE9UyushNDB4wutXNnmriX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/85389-gourmet-mushroom-risotto-86-7a2d218f53e94ccfaecc69b6fd93cab8.jpg', price: 350,  type:'veg', quantity: 1 },
  {id:11, name: 'Grilled Lamb Chops', image: 'https://www.seriouseats.com/thmb/7krlJdfnpXB53aqHg-vBSHjiDPc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfectly-grilled-lamb-rib-or-loin-chops-recipe-hero-03-262fe2defc7c491688cb2d363dad3446.JPG', price: 350,  type:'non-veg', quantity: 1 }
]