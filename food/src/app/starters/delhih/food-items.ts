export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const starters: FoodItem[] = [
  { id: 1, name: 'Vegetable Tempura', price: 200,  image: 'https://static01.nyt.com/images/2013/10/23/dining/23JPFLEX1/23JPFLEX1-superJumbo.jpg', type: 'veg', quantity: 1 },
  { id: 2, name: 'Spinach Artichoke Dip', price: 250,  image: 'https://www.persnicketyplates.com/wp-content/uploads/2014/07/crock-pot-spinach-artichoke-dip1-SQUARE.jpg', type: 'veg', quantity: 1 },
  { id: 3, name: 'Stuffed Mushrooms', price: 180,  image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/11/Stuffed-Mushrooms-main-1-1.jpg', type: 'veg', quantity: 1 },
  { id: 4, name: 'Zucchini Fritters', price: 280,  image: 'https://www.allrecipes.com/thmb/gBkKog0-xgXdzuKzSA4063Q-kJM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241422-easy-zucchini-fritters-DDMFS-4x3-bc4d3297e15b479aafee05dbf9eb67d3.jpg', type: 'veg', quantity: 1 },
  { id: 5, name: 'Caprese Skewers', price: 260,  image: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/08/caprese-skewers.jpg', type: 'veg', quantity: 1 },
  { id: 6, name: 'Cauliflower Wings', price: 240,  image: 'https://www.kitchensanctuary.com/wp-content/uploads/2018/06/Asian-Cauliflower-Wings-square-FS.jpg', type: 'veg', quantity: 1 },
  { id: 7, name: 'BBQ Chicken Sliders', price: 250,  image: 'https://www.tastesoflizzyt.com/wp-content/uploads/2022/07/barbecuesliders-11.jpg', type: 'non-veg', quantity: 1 },
  { id: 8, name: 'Shrimp Cocktail', price: 250,  image: 'https://assets.bonappetit.com/photos/5b3bed6d02847f05a1933429/1:1/w_2560%2Cc_limit/ba-best-shrimp-cocktail-2.jpg', type: 'non-veg', quantity: 1 },
  { id: 9, name: 'Beef Satay', price: 220,  image: 'https://hot-thai-kitchen.com/wp-content/uploads/2022/06/beef-satay-sq.jpg', type: 'non-veg', quantity: 1 },
  ];
  
      export const beverages: FoodItem[] = [
        {id: 21,name: "Pineapple Coconut Smoothie",price: 160,image: "https://www.thespruceeats.com/thmb/IjwEQ_JIzGowOE99XQ2IAMee1lM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/thespruceeats.com-pineapple-coconut-smoothie-recipe-2096958-hero-03-03335ffd7ff549b6999ff6c8f98934b5.jpg",type: "veg",quantity: 1},
        {id: 22,name: "Blueberry Lemonade",price: 180,image: "https://www.dixiecrystals.com/sites/default/files/recipe/Muddled-Blueberry-Lemonade-imperial.jpg",type: "veg",quantity: 1},
        {id: 23,name: "Iced Peach Tea",price: 150,image: "https://foodhub.scene7.com/is/image/woolworthsltdprod/2201-peach-iced-tea:Mobile-1300x1150",type: "veg",quantity: 1},
        {id: 24,name: "Mint Mojito Iced Coffee",price: 120,image: "https://www.thebeancoffeecompany.com/cdn/shop/articles/FullSizeRender_1_2000x.jpg?v=1654295170",type: "veg",quantity: 1},
        {id: 25,name: "Cucumber Mint Cooler",price: 190,image: "https://www.whiskaffair.com/wp-content/uploads/2021/01/Cucumber-Cooler-2-3.jpg",type: "veg",quantity: 1},
        {id: 26,name: "Orange Creamsicle Shake",price: 140,image: "https://www.liveeatlearn.com/wp-content/uploads/2016/03/orange-creamsicle-smoothie-vert-500x375.jpg",type: "veg",quantity: 1}
    ]