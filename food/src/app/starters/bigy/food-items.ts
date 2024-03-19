export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

  export const starters: FoodItem[] = [
  {id: 28,"name": "Vegetable Spring Rolls",price: 200,image: "https://cdn.pixabay.com/photo/2023/07/18/19/19/spring-rolls-8135469_640.jpg",type: "veg",quantity: 1},
  {id: 29,"name": "Onion Rings",price: 160,image: "https://i.ytimg.com/vi/ke-Mu3Lv_ug/maxresdefault.jpg",type: "veg",quantity: 1},
  {id: 30,"name": "Cheese Balls",price: 180,image: "https://5.imimg.com/data5/SELLER/Default/2024/1/380165439/QK/BJ/NM/36857741/chicken-cheese-balls.jpeg",type: "veg",quantity: 1},
  {id: 31,"name": "Garlic Bread",price: 150,image: "https://hips.hearstapps.com/hmg-prod/images/delish-081821-cheesy-garlicbread-03-jg-1632166353.jpg?crop=0.668xw:1.00xh;0.130xw,0&resize=1200:*",type: "veg",quantity: 1},
  {id: 32,"name": "Spinach and Feta Triangles",price: 220,image: "https://www.abakingjourney.com/wp-content/uploads/2021/05/Spanakopita-triangles-Feature.jpg",type: "veg",quantity: 1},
  {id: 34,"name": "Chicken Satay",price: 270,image: "https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/02/06/0/FNK-Live_112119-Jet-Tila-Chicken-Satay-with-Peanut-Sauce-0005_s4x3.jpg.rend.hgtvcom.616.462.suffix/1581032331905.jpeg",type: "non-veg",quantity: 1},
  {id: 35,"name": "Fish Tikka",price: 300,image: "https://vaya.in/recipes/wp-content/uploads/2018/03/Fish-Tikka.jpg",type: "non-veg",quantity: 1},
  {id: 36,"name": "Chilli Prawns",price: 220,image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chilli-Prawns.jpg",type: "non-veg",quantity: 1}
];


    export const milkshakes: FoodItem[] = [
    {id: 15,name: "Cold Coffee",price: 160,image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Caramel-iced-coffee-f73307b.png",type: "veg",quantity: 1},
    {id: 15,name: "Pineapple Juice",price: 160,image: "https://img.freepik.com/premium-photo/pineapple-juice-with-splashes-with-pineapple-fruit-studio-background-restaurant-with-garden_741910-8035.jpg",type: "veg",quantity: 1},
    {id: 17,name: "Lemonade",price: 120,image: "https://cdn.loveandlemons.com/wp-content/uploads/2022/06/lemonade.jpg",type: "veg",quantity: 1},
    {id: 18,name: "Iced Tea",price: 130,image: "https://realfood.tesco.com/media/images/RFO-1400x919-IcedTea-8e156836-69f4-4433-8bae-c42e174212c1-0-1400x919.jpg",type: "veg",quantity: 1},
    {id: 19,name: "Watermelon Juice",price: 150,image: "https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-homemade-watermelon-juice-1692282475.jpg",type: "veg",quantity: 1},
    {id: 20,name: "Coconut Water",price: 100,image: "https://static.toiimg.com/thumb/imgsize-23456,msid-106997100,width-600,resizemode-4/106997100.jpg",type: "veg",quantity: 1}
    ];
