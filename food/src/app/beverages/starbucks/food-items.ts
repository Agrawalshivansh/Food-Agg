export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}


export const cocktails: FoodItem[] = [
  {id:1, name:'Amaretto Sour', price:150, image:'https://cookingwithcocktailrings.com/wp-content/uploads/2022/03/Amaretto-Sour-12-scaled.jpg',type:'veg',quantity: 1},
  {id:1, name:'French Martini', price:150, image:'https://egl-assets.scene7.com/is/image/endeavour/20220411_C_IN%20ARTICLE%2001_French%20Martini?$dans-daily-web-image$',type:'veg',quantity: 1},
  {id:1, name:'Whiskey Smash', price:150, image:'https://www.liquor.com/thmb/Zuw9L_fqx4lSTrSa-ezPC28R-dw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-smash-1200x628-email-abaaec60e0514af4964a9f8c76776878.jpg',type:'veg',quantity: 1},
  {id:1, name:'Dark and Stormy', price:150, image:'https://i0.wp.com/www.meatlessmakeovers.com/wp-content/uploads/2019/01/Meyer-Mint-Dark-and-Stormy-4.jpg?fit=6000%2C4000&ssl=1',type:'veg',quantity: 1},
  {id:1, name:'Long Island Iced Tea', price:150, image:'https://www.long-island-iced-tea.com/images/long-island-iced-tea-cocktail2.jpg',type:'veg',quantity: 1},
  {id:1, name:'Boulevardier', price:150, image:'https://idealistfoods.com/wp-content/uploads/2021/10/Cocktail_CoffeeBoulevardier_optimized_sp.jpg',type:'veg',quantity: 1},
]
export const mocktails: FoodItem[] = [
  {id:1, name:'Cranberry Ginger Fizz', price:150, image:'https://www.heinens.com/wp-content/uploads/2020/07/Cranberry-Gin-Fizz.jpg',type:'veg', quantity: 1},
  {id:1, name:'Rosemary Citrus Spritz', price:150, image:'https://realfood.tesco.com/media/images/RFO-1400x919-Rosemary-and-citrus-spritz-c1b56282-8883-44b9-afb9-d9f47f96aa67-0-1400x919.jpg',type:'veg', quantity: 1},
  {id:1, name:'Blackberry Basil Smash', price:150, image:'https://balancedhealthstyles.com/wp-content/uploads/2022/08/basil-blackberry-smash-mocktail-with-kombucha-feature-1200x630-1.png',type:'veg', quantity: 1},
  {id:1, name:'Pineapple Mint Sparkler', price:150, image:'https://recipes.net/wp-content/uploads/2023/05/pineapple-ginger-mocktail-recipe_9c01e7e36d844770173c341bcf47ab31.jpeg',type:'veg', quantity: 1},
  {id:1, name:'Raspberry Lemonade Refresher', price:150, image:'https://images.squarespace-cdn.com/content/v1/5f9b6df57e950808cac2a3eb/1655241325310-O9E71T18M7BW197HU69G/DSC02833.jpeg',type:'veg', quantity: 1},
  {id:1, name:'Coconut Pineapple Cooler', price:150, image:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut_cooler-da94438.jpg',type:'veg', quantity: 1},
]
export const liquor: FoodItem[] = [
  {id:1, name:'Midori', price:150, image:'https://stevethebartender.com.au/wp-content/uploads/2019/08/midori-cocktails-thumb.jpg',type:'veg', quantity: 1},
  {id:1, name:'Kirsch', price:150, image:'https://recipes.net/wp-content/uploads/2024/01/how-to-drink-kirsch-1705755448.jpg',type:'veg', quantity: 1},
  {id:1, name:'Limoncello', price:150, image:'https://www.giallozafferano.com/images/227-22704/limoncello-lemon-flavored-liqueur_1200x800.jpg',type:'veg', quantity: 1},
  {id:1, name:'Drambuie', price:150, image:'https://recipes.net/wp-content/uploads/2021/04/drambuie-rusty-nail-cocktail-1024x682.jpg',type:'veg', quantity: 1},
  {id:1, name:'Crème de Menthe', price:150, image:'https://www.sixstoreys.com/wp-content/uploads/2023/06/Best-Creme-De-Menthe-Cocktails.jpg',type:'veg', quantity: 1},
  {id:1, name:'Grand Marnier', price:150, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLxYtXYqovahPo7NAd2f18zqkrVtgCD3c-g&usqp=CAU',type:'veg', quantity: 1},
]

 