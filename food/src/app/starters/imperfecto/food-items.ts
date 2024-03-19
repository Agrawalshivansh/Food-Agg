export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}
export const starters: FoodItem[] = [
  { id: 1, name: 'Crispy Avocado Fries', price: 200,  image: 'https://paleogrubs.com/wp-content/uploads/2017/12/5a-avocado-recipe-1024x1024.jpg', type: 'veg', quantity: 1 },
  { id: 2, name: 'Zucchini Roll-Ups', price: 250,  image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/11/6/0/WU2010_Zucchini-Rolls_s4x3.jpg.rend.hgtvcom.616.462.suffix/1541538629120.jpeg', type: 'veg', quantity: 1 },
  { id: 3, name: 'Broccoli Poppers', price: 180,  image: 'https://cdn.urbanpiper.com/media/bizmedia/2023/02/15/Veg_spicy_broccoli_poppers_1676034693_1676464222.jpg', type: 'veg', quantity: 1 },
  { id: 4, name: 'Spinach and Mushrooms', price: 280,  image: 'https://www.eatingwell.com/thmb/yJkwSJCXjdzpxG8PGkpNXCc0-0E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7551500-ae4eb4db1bb04c13910ae900981c0f08.jpg', type: 'veg', quantity: 1 },
  { id: 5, name: 'Stuffed Mini Peppers', price: 260,  image: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/Garbanzo-Stuffed-Mini-Peppers_exps164629_SD132779C06_13_6bC_RMS.jpg?fit=700,1024', type: 'veg', quantity: 1 },
  { id: 6, name: 'Cauliflower Bites', price: 240,  image: 'https://www.eatingwell.com/thmb/q09unCog3g7x75xiNPD4FqgNVUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sriracha-buffalo-cauliflower-bites-step-09-b9a69156ce184797a415159f12cb93a1.jpg', type: 'veg', quantity: 1 },
  { id: 7, name: 'Chicken Gyoza', price: 250,  image: 'https://imagevars.gulfnews.com/2021/12/12/Chicken-gyoza-recipe-_17daea9e28f_medium.jpg', type: 'non-veg', quantity: 1 },
  { id: 8, name: 'Shrimp Ceviche', price: 250,  image: 'https://allourway.com/wp-content/uploads/2022/03/Ceviche-27-copy-2.jpg-1200-x-1200.jpg', type: 'non-veg', quantity: 1 },
  { id: 9, name: 'Lamb Kofta', price: 220,  image: 'https://img.taste.com.au/Ua5do0iU/taste/2016/11/lamb-kofta-82000-1.jpeg', type: 'non-veg', quantity: 1 },
  ];
  
      export const beverages: FoodItem[] = [
        {id: 21,name: "Raspberry Smoothie",price: 160,image: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/raspberry-smoothie.jpg?quality=82&strip=1",type: "veg",quantity: 1},
        {id: 23,name: "Mint Chocolate Chip Frappe",price: 150,image: "https://media.istockphoto.com/id/533925594/photo/chocolate-chip-frappe.jpg?s=612x612&w=0&k=20&c=pvWN2-qCTmMwPygj9c53Vs_v2bQt2lyPGQ4DzHsbjp4=",type: "veg",quantity: 1},
        {id: 24,name: "Lavender Lemonade",price: 120,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_xUKaT2C-3YVdxfqF6NK2jB2AhB5oulaJA&usqp=CAU",type: "veg",quantity: 1},
        {id: 25,name: "Mango Mint Iced Tea",price: 190,image: "https://food-fanatic-res.cloudinary.com/iu/s---KYwQzp1--/f_auto,q_auto/v1430103572/sweet-mango-green-tea-photo",type: "veg",quantity: 1},
        {id: 26,name: "Pineapple Basil Spritzer",price: 140,image: "https://www.remodelaholic.com/wp-content/uploads/2016/06/DSC_0614-600x400.jpg",type: "veg",quantity: 1}
    ]