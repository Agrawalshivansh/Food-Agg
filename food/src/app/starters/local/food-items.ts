export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}
export const starters: FoodItem[] = [
  { id: 1, name: 'Crispy Okra', price: 200,  image: 'https://images.immediate.co.uk/production/volatile/sites/2/2022/05/Crispy-okra-069bbc5.jpg?quality=90&resize=556,505', type: 'veg', quantity: 1 },
  { id: 2, name: 'Paneer Manchurian', price: 250,  image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/paneer_manchurian_dry_zdish.png', type: 'veg', quantity: 1 },
  { id: 3, name: 'Mushroom Arancini', price: 180,  image: 'https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/12912/baked-mushroom-arancini.jpg', type: 'veg', quantity: 1 },
  { id: 4, name: 'Grilled Halloumi Skewers', price: 280,  image: 'https://www.sainsburysmagazine.co.uk/uploads/media/3200x1800/00/11800-Halloumi-skewers.jpg?v=1-0', type: 'veg', quantity: 1 },
  { id: 5, name: 'Stuffed Jalapeños', price: 260,  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOT5QV_ua1NcqHC8edT-s36w4Jy9zlJ0lsg&usqp=CAU', type: 'veg', quantity: 1 },
  { id: 6, name: 'Quinoa Stuffed Peppers', price: 240,  image: 'https://veganheaven.org/wp-content/uploads/2017/11/Quinoa-Stuffed-Bell-Peppers-in-the-Slow-Cooker-2.jpg', type: 'veg', quantity: 1 },
  { id: 7, name: 'Chicken Popcorn', price: 250,  image: 'https://www.corriecooks.com/wp-content/uploads/2023/08/Popcorn-Chicken.jpg', type: 'non-veg', quantity: 1 },
  { id: 8, name: 'Lamb Sish Kebabs', price: 250,  image: 'https://flawlessfood.co.uk/wp-content/uploads/2020/08/blog-200730-Takeaway-Lamb-Shish-Kebab-24048-2.jpg', type: 'non-veg', quantity: 1 },
  { id: 9, name: 'Prawn Cocktail', price: 220,  image: 'https://realfood.tesco.com/media/images/RFO-1400x919-PrawnCocktail-e1b7d9be-cc59-4f9d-a10e-dbf495ac6e2f-0-1400x919.jpg', type: 'non-veg', quantity: 1 },
  ];
  
      export const beverages: FoodItem[] = [
        {id: 21,name: "Strawberry Basil Lemonade",price: 160,image: "https://whatsgabycooking.com/wp-content/uploads/2021/05/WGC-Strawberry-Basil-Lemonade-1200x800-1.jpg",type: "veg",quantity: 1},
        {id: 23,name: "Pomegranate Green Tea",price: 150,image: "https://paleoleap.com/wp-content/uploads/2015/01/pomegranate-green-tea-facebook.jpg",type: "veg",quantity: 1},
        {id: 24,name: "Coconut Pineapple Smoothie",price: 120,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YuKphZMLlacrvuUiS5UBz79ETwf_62hqNw&usqp=CAU",type: "veg",quantity: 1},
        {id: 25,name: "Vanilla Lavender Latte",price: 190,image: "https://www.magenta-inc.com/cdn/shop/articles/Magenta_070820-535-2_1_1_4b62aa29-69df-4bda-ab49-6ea14a1983e8_764x643.jpg?v=1615509665",type: "veg",quantity: 1},
        {id: 26,name: "Blueberry Mint Lemonade",price: 140,image: "https://www.tresagaves.com/userfiles/cms/cocktail/images/12/blueberry-mint-lemonade-copy.jpg",type: "veg",quantity: 1}
    ]