export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}
export const starters: FoodItem[] = [
  { id: 1, name: 'Vegetable Samosas', price: 200,  image: 'https://khaddoroshik.com/wp-content/uploads/2023/12/Vegetable-Samosa3.webp', type: 'veg', quantity: 1 },
  { id: 2, name: 'Crispy Brussel Sprouts', price: 250,  image: 'https://images.ctfassets.net/3vz37y2qhojh/8ZgSSevsnz8HRaCcHcE71/15dd1dfa29a592ae5edf22a7c03409a3/Honey-Balsamic-Glazed-Brussels-Sprouts-Olga-Ivanova-hero.jpg?w=750&fit=fill&fm=webp', type: 'veg', quantity: 1 },
  { id: 3, name: 'Paneer Tikka', price: 180,  image: 'https://www.jagranimages.com/images/newimg/19052023/19_05_2023-chutney_panner_tikka_f_23416003.webp', type: 'veg', quantity: 1 },
  { id: 4, name: 'Stuffed Bell Peppers', price: 280,  image: 'https://www.jessicagavin.com/wp-content/uploads/2019/06/stuffed-peppers-1200.jpg', type: 'veg', quantity: 1 },
  { id: 5, name: 'Corn Fritters', price: 260,  image: 'https://assets.epicurious.com/photos/54ad719c6529d92b2c0474ac/master/pass/51188440_corn-fritters-zucchini_1x1.jpg', type: 'veg', quantity: 1 },
  { id: 6, name: 'Spinach and Feta Triangles', price: 240,  image: 'https://www.abakingjourney.com/wp-content/uploads/2021/05/Spanakopita-triangles-Feature.jpg', type: 'veg', quantity: 1 },
  { id: 7, name: 'Chicken Wings', price: 250,  image: 'https://t3.ftcdn.net/jpg/02/06/45/54/360_F_206455496_BStGIyW9AcinRXNqgwn3hPYahiwm7iL9.jpg', type: 'non-veg', quantity: 1 },
  { id: 8, name: 'Fish Tacos', price: 250,  image: 'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg', type: 'non-veg', quantity: 1 },
  { id: 9, name: 'Beef Skewers', price: 220,  image: 'https://img.texasmonthly.com/2022/10/recipe-lao-beef-skewers-cookbook.jpg?auto=compress&crop=faces&fit=fit&fm=pjpg&ixlib=php-3.3.1&q=45', type: 'non-veg', quantity: 1 },
  ];
  
      export const beverages: FoodItem[] = [
        {id: 21,name: "Hibiscus Iced Tea",price: 160,image: "https://media.istockphoto.com/id/1940389117/photo/delicious-hibiscus-tea-and-beautiful-flower-on-light-wooden-table-closeup.webp?b=1&s=170667a&w=0&k=20&c=6VqF_YtqvGMOqFY6I42K5L01pzbwLcpHOvr_2MGTgkM=",type: "veg",quantity: 1},
        {id: 23,name: "Mango Pineapple",price: 150,image: "https://inthekitch.net/wp-content/uploads/how-to-make-a-mango-pineapple-smoothie-featured.jpg",type: "veg",quantity: 1},
        {id: 24,name: "Cucumber Mint Lemonade",price: 120,image: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Boozy-Refreshing-Cucumber-Cocktail-with-Lemon.jpg",type: "veg",quantity: 1},
        {id: 25,name: "Turmeric Ginger Lemonade",price: 190,image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/05/Ginger-Turmeric-Lemonade-1300x865.jpg?v=1621140032",type: "veg",quantity: 1},
        {id: 26,name: "Cherry Limeade",price: 140,image: "https://realhousemoms.com/wp-content/uploads/Cherry-Limeade-RECIPE-CARD.jpg",type: "veg",quantity: 1}
    ]