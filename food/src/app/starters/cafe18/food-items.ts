export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}
export const starters: FoodItem[] = [
  { id: 1, name: 'Veg Cutlet', price: 200,  image: 'https://www.whiskaffair.com/wp-content/uploads/2020/09/Veg-Cutlet-2-3-500x500.jpg', type: 'veg', quantity: 1 },
  { id: 2, name: 'Paneer Pakora', price: 250,  image: 'https://pipingpotcurry.com/wp-content/uploads/2022/10/Paneer-Pakora-Recipe-Piping-Pot-Curry.jpg', type: 'veg', quantity: 1 },
  { id: 3, name: 'Corn Bhel', price: 180,  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSSi0OZfqWrb5AjOr9jN69gkSLI9dPvFQIQ&usqp=CAU', type: 'veg', quantity: 1 },
  { id: 4, name: 'Stuffed Bell Peppers', price: 280,  image: 'https://hips.hearstapps.com/hmg-prod/images/stuffed-peppers-secondary-649c91e2e0883.jpg', type: 'veg', quantity: 1 },
  { id: 5, name: 'Mushroom Tikka', price: 260,  image: 'https://im.hunt.in/local/Gallery/3030773/s/3030773_11634.jpg', type: 'veg', quantity: 1 },
  { id: 6, name: 'Vegetable Dim Sum', price: 240,  image: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/open_graph_image/public/Original_3377_StockFood-00193424cut.jpg?itok=lNWtN4-4', type: 'veg', quantity: 1 },
  { id: 7, name: 'Chicken Lollipop', price: 250,  image: 'https://assets-global.website-files.com/60d34b8627f6e735cf28df18/62a95eaacb8d206406f1d296_Chicken%20Lollipop%20Hero%204.3.jpg', type: 'non-veg', quantity: 1 },
  { id: 8, name: 'Prawn Tempura', price: 250,  image: 'https://khinskitchen.com/wp-content/uploads/2023/08/prawn-tempura-04.jpg', type: 'non-veg', quantity: 1 },
  { id: 9, name: 'Mutton Galouti Kebab', price: 220,  image: 'https://www.spiceroots.com/spiceroots/wp-content/uploads/2015/05/Galouti-Kebab-5.jpg', type: 'non-veg', quantity: 1 },
  ];
  
      export const beverages: FoodItem[] = [
        {id: 21,name: "Mango Lassi",price: 160,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqNn5TB10oVQzJdFDUbKolEb0_KwDlE6L6A&usqp=CAU",type: "veg",quantity: 1},
        {id: 22,name: "Apple Cider",price: 180,image: "https://hips.hearstapps.com/hmg-prod/images/apple-cider-index-650b034b5aa4d.jpg?crop=1xw:0.998780487804878xh;center,top&resize=1200:*",type: "veg",quantity: 1},
        {id: 23,name: "Mint Lemonade",price: 150,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeANJv2Hnt8_fQWeXVO9z6gFqewIgcxTenAw&usqp=CAU",type: "veg",quantity: 1},
        {id: 24,name: "Iced Matcha Latte",price: 120,image: "https://www.justonecookbook.com/wp-content/uploads/2023/07/Iced-Matcha-Latte-0343-I-1.jpg",type: "veg",quantity: 1},
        {id: 25,name: "Watermelon Mint Cooler",price: 190,image: "https://vanitascorner.com/wp-content/uploads/2018/04/watermeloncooler4.jpg",type: "veg",quantity: 1},
        {id: 26,name: "Ginger Ale",price: 140,image: "https://www.corriecooks.com/wp-content/uploads/2018/08/Instant-Pot-Ginger-Ale.jpg",type: "veg",quantity: 1}
    ]