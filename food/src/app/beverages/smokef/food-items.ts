export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}


export const cocktails: FoodItem[] = [
  {id:1, name:'Passionfruit Martini', price:150, image:'https://assets.superliquor.co.nz/thumbs/0010296_passionfruit-martini.jpeg',type:'veg',quantity: 1},
  {id:1, name:'Pineapple Mojito', price:150, image:'https://cdn.jwplayer.com/v2/media/GabsZ6LX/poster.jpg?width=720',type:'veg',quantity: 1},
  {id:1, name:'Coconut Rum Punch', price:150, image:'https://lh3.googleusercontent.com/K0DO1VrLC9PWEknw2LfYcn4F8Lw8F7iy0IqEL0_G3oBSBDJjz6auY-g9rUXVi-AalSljnXx_5xoCmEU4znL7L00=w1280-h960-c-rj-v1-e365',type:'veg',quantity: 1},
  {id:1, name:'Grapefruit Negroni', price:150, image:'https://drinkspindrift.com/cdn/shop/articles/sparkling-negroni-e1539365841457-1200x1033.jpg?v=1654282322',type:'veg',quantity: 1},
  {id:1, name:'Lavender Gin Sour', price:150, image:'https://www.terrebleu.ca/cdn/shop/articles/lavenderginsour_banner1_2426x.jpg?v=1664387102',type:'veg',quantity: 1},
  {id:1, name:'Cucumber Elderflower Collins', price:150, image:'https://www.thespruceeats.com/thmb/nCD3sg89YZwmf5kIEoE4IGJweJs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CucumberCollins-001-97928d821c68449096f4b1c55453c173.jpg',type:'veg',quantity: 1},
]
export const mocktails: FoodItem[] = [
  {id:1, name:'Apple Cinnamon Fizz', price:150, image:'https://loveinmyoven.com/wp-content/uploads/2018/09/Apple-Cinnamon-Gin-Fizz-2.jpg',type:'veg', quantity: 1},
  {id:1, name:'Tropical Sunset Sparkle', price:150, image:'https://i.ytimg.com/vi/lSeUWPDhT2g/maxresdefault.jpg',type:'veg', quantity: 1},
  {id:1, name:'Minted Blueberry Lemonade', price:150, image:'https://www.driscolls.eu/assets/styles/header/public/content/header/image/picnic_blueberry_mint_lemonade_10089_cc_190422.jpg?itok=S6pMf5Jr',type:'veg', quantity: 1},
  {id:1, name:'Cherry Limeade Cooler', price:150, image:'https://www.cupcakediariesblog.com/wp-content/uploads/2015/05/DSC_0884-header.jpg',type:'veg', quantity: 1},
  {id:1, name:'Honeydew Basil Refresher', price:150, image:'https://fabeveryday.com/wp-content/uploads/2020/08/Sparkling-Mocktails-with-Mint-Basil-and-Rosemary-2-scaled.jpg',type:'veg', quantity: 1},
  {id:1, name:'Peach Raspberry Spritzer', price:150, image:'https://i0.wp.com/myworldsimplified.com/wp-content/uploads/2016/01/Peach-Melba-Cocktail-Mocktail_-2.jpg?resize=500%2C333',type:'veg', quantity: 1},
]
export const liquor: FoodItem[] = [
  {id:1, name:'Sambuca', price:150, image:'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/24/21/45/picEDnQ6h.jpg',type:'veg', quantity: 1},
  {id:1, name:'Frangelico', price:150, image:'https://i.etsystatic.com/18174485/r/il/2f2034/2265350964/il_fullxfull.2265350964_vhus.jpg',type:'veg', quantity: 1},
  {id:1, name:'Campari', price:150, image:'https://www.foodandwine.com/thmb/snyhsYjvMD0OUrKCBWgWmxjFBr0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fwx-campari-comp-75840a6f488449f7bdc5ad59ce2042a5.jpeg',type:'veg', quantity: 1},
  {id:1, name:'Aperol', price:150, image:'https://i0.wp.com/www.rieglpalate.com/wp-content/uploads/2017/06/Rose-Aperol-Spritz.jpg?fit=3333%2C2222&ssl=1',type:'veg', quantity: 1},
  {id:1, name:'Chartreuse', price:150, image:'https://www.tastefrance.com/sites/tastefrance.com/files/styles/article_main_image/public/2021-03/Chartreuse_Alexander_Propencko.jpg.webp?itok=Y0Muk9eC',type:'veg', quantity: 1},
  {id:1, name:'Pisco', price:150, image:'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/dd/11.jpg',type:'veg', quantity: 1},
]

 