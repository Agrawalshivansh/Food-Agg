export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}


export const cocktails: FoodItem[] = [
  {id:1, name:'Paloma Paradise', price:150, image:'https://images.getrecipekit.com/v1619470280_Firefly_Paloma_qxnovm.jpg?aspect_ratio=16:9&quality=90&',type:'veg',quantity: 1},
  {id:1, name:'Whiskey Ginger Gold', price:150, image:'https://www.liquor.com/thmb/2zn4MPTt9KymeRULZnWU28zjTA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gold-rush-1200x628-facebook-d1004fa2b1c647a1ac4bd41540c98322.jpg',type:'veg',quantity: 1},
  {id:1, name:'Blue Lagoon Bliss', price:150, image:'https://winedharma.com/wine-dharma/uploads/2020/10/2426-blue-lagoon-cocktail-ricetta-cocktail-pi-famosi-e-bevuti-discoteca-vodka.jpg',type:'veg',quantity: 1},
  {id:1, name:'Raspberry Mojito Fusion', price:150, image:'https://easeyourcooking.com/wp-content/uploads/2023/09/alcohol-free-raspberry-mojito.jpg',type:'veg',quantity: 1},
  {id:1, name:'Espresso Martini Euphoria', price:150, image:'https://bruvi.com/cdn/shop/articles/CoffeeCocktail_1300x.jpg?v=1643050643',type:'veg',quantity: 1},
  {id:1, name:'French 75 Fantasy', price:150, image:'https://parade.com/.image/t_share/MTkwNTc4Mzg0MDA3MTQ0NTcz/cranberrycocktail-ftr.jpg',type:'veg',quantity: 1},
]
export const mocktails: FoodItem[] = [
  {id:1, name:'Citrus Splash', price:150, image:'https://mojo.generalmills.com/api/public/content/GYeK-lvX0ESHvrxiW2eMHA_gmi_hi_res_jpeg.jpeg?v=32673400&t=466b54bb264e48b199fc8e83ef1136b4',type:'veg', quantity: 1},
  {id:1, name:'Pineapple Paradise', price:150, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU95dfwis2QN_0Gr0G-lRdGnRktgEMy_KZQg&usqp=CAU',type:'veg', quantity: 1},
  {id:1, name:'Strawberry Fields Forever', price:150, image:'https://blackberrymagazine.s3.amazonaws.com/assets/images/farm-stories/_1600x700_crop_center-center_75_none/BMTN_21_09_22_RAU_RETAIL_SHRUB-5684.jpg',type:'veg', quantity: 1},
  {id:1, name:'Minted Lemonade Delight', price:150, image:'https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2015/03/the-consolation-prize-a-pineapple-lime-coconut-and-mint-mocktail1.jpg?fit=1200%2C800&ssl=1',type:'veg', quantity: 1},
  {id:1, name:'Coconut Cream Dream', price:150, image:'https://www.mashed.com/img/gallery/refreshing-coconut-cream-mocktail-recipe/l-intro-1626871109.jpg',type:'veg', quantity: 1},
  {id:1, name:'Blueberry Basil Breeze', price:150, image:'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_650,h_650/https://basilandbubbly.com/wp-content/uploads/2019/03/basil-blueberry-margaritas-featured.jpg',type:'veg', quantity: 1},
]
export const liquor: FoodItem[] = [
  {id:1, name:'Belvedere Vodka', price:150, image:'https://images-cdn.ubuy.co.in/63400c254e01f1625725a1a3-belvedere-vodka-750ml-80-proof.jpg',type:'veg', quantity: 1},
  {id:1, name:'Glenlivet Scotch Whisky', price:150, image:'https://www.theglenlivet.com/wp-content/uploads/2024/01/Glenlivet_Fusion_Cask.jpg',type:'veg', quantity: 1},
  {id:1, name:'Cointreau Triple Sec', price:150, image:'https://www.insidehook.com/wp-content/uploads/2023/09/Cointreau.jpg?fit=1500%2C1000',type:'veg', quantity: 1},
  {id:1, name:'Hendricks Gin', price:150, image:'https://cdn.luxe.digital/media/20230121131550/hendricks-gin-bottle-price-size-luxe-digital-1.jpg',type:'veg', quantity: 1},
  {id:1, name:'Don Q Rum', price:150, image:'https://robbreport.com/wp-content/uploads/2023/01/DonQ_Rum_Premium.jpg',type:'veg', quantity: 1},
  {id:1, name:'Disaronno Amaretto', price:150, image:'https://www.disaronno.com/wp-content/uploads/hero-disaronno-scaled.jpg',type:'veg', quantity: 1},
]

 