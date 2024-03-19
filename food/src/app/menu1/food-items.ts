export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const soups: FoodItem[] = [
  { id: 1, name: 'Tomato Soup', price: 100,  image: 'https://www.allrecipes.com/thmb/QijITeBBcE99Ur5kDoccAJ35WWo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/277311spicy-fresh-tomato-soupFranceC4x3-56454ad082214f33960f62665fc8c169.jpg', type: 'veg', quantity: 1 },
  { id: 2, name: 'Chicken noodle soup', price: 150,  image: 'https://myheartbeets.com/wp-content/uploads/2020/12/easy-chicken-noodle-soup.jpg', type: 'non-veg', quantity: 1 },
  { id: 3, name: 'Manchow Soup', price: 120,  image: 'https://myfoodstory.com/wp-content/uploads/2016/07/Chicken-Manchow-Soup-2.jpg', type: 'non-veg', quantity: 1 },
  { id: 4, name: 'Hot and Sour Soup', price: 130,  image: 'https://cdn.sanity.io/images/2r0kdewr/production/298c3bd178187141dbdb0ff326a80e1b3ab4fe65-5258x2958.jpg', type: 'veg', quantity: 1 },
];

export const starters: FoodItem[] = [
{ id: 6, name: 'Paneer Tikka', price: 200,  image: 'https://carveyourcraving.com/wp-content/uploads/2021/10/paneer-tikka-skewers.jpg', type: 'veg', quantity: 1 },
{ id: 7, name: 'Chicken Tikka', price: 250,  image: 'https://silkroadrecipes.com/wp-content/uploads/2021/08/Chicken-Tikka-Kebab-square.jpg', type: 'non-veg', quantity: 1 },
{ id: 8, name: 'Panner 65', price: 180,  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvusD6vz5EuBPMei4JicJQ2IICGgnXf6jtWeQww17z_JBJSpD7W5yw1crVUq94_w9CCikAfQNWn0Fqj6p3YtfPdvJl7-7a-T52LWJFId4PX3Ualmpk3Lyp6GL5Ds2ehEz3l5xDeVAhxlE5_iAGxOPV-rG6dMgIkSbqxPvXW6d0ZH_cP9pzTAaS5g8s/s987/paneer-65-recipe.jpg', type: 'veg', quantity: 1 },
{ id: 9, name: 'Fish Fry', price: 280,  image: 'https://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg', type: 'non-veg', quantity: 1 },
];

export const curries: FoodItem[] = [
  {id:11, name: 'Butter Chicken', image: 'https://middlebury.coop/wp-content/uploads/2022/09/Butter-Chicken.-SS.-Low-Res.jpg', price: 350,  type:'non-veg', quantity: 1 },
  {id:12, name: 'Panner Butter Masala', image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1.jpg', price: 300, type:'veg', quantity: 1 },
  {id:14, name: 'Mushroom Masala', image: 'https://indiaphile.info/wp-content/uploads/2022/06/stp-mushroom-masala-7428.jpg', price: 280,  type: 'veg', quantity: 1 },
  {id:15, name: 'Chicken Tikka Masala', image: 'https://www.allrecipes.com/thmb/1ul-jdOz8H4b6BDrRcYOuNmJgt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572-e02a25f8c7b745459a9106e9eb13de10.jpg', price: 320,  type: 'non-veg', quantity: 1 },
];

export const breads: FoodItem[] = [
  {id:21, name: 'Naan', price: 50,  image: 'https://fullofplants.com/wp-content/uploads/2023/05/Homemade-Naan-Bread-Restaurant-Style-Vegan-thumb-1-500x375.jpg', type: 'veg', quantity: 1 },
  {id:23, name: 'Kulcha', price: 60,  image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Richa_Gupta/Stuffed_Veggie_Kulcha.jpg', type: 'veg', quantity: 1 },
  {id:24,name: 'Paratha', price: 40,  image: 'https://www.chefajaychopra.com/assets/img/recipe/1-1666073587GobhiParathawebp.webp', type: 'veg', quantity: 1 },
  {id:25, name: 'Rumali Roti', price: 20,  image: 'https://img-global.cpcdn.com/recipes/a2d6c0c3ae6f1a64/1200x630cq70/photo.jpg', type: 'veg', quantity: 1 },
];
export const mainCourses: FoodItem[] = [
  {id:26, name: 'Veg Biryani', price: 300,  image: 'https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg', type: 'veg', quantity: 1 },
  {id:32, name: 'Paneer Biryani', price: 350,  image: 'https://www.chefkunalkapur.com/wp-content/uploads/2021/10/SRG_-CKK-Shoot-18_226-scaled.jpg?v=1633580575', type: 'veg', quantity: 1 },
  {id:33, name: 'Hyderabadi Biryani', price: 450,  image: 'https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__700_0_0_0_auto.jpg', type: 'non-veg', quantity: 1 },
  {id:34, name: 'Kashmiri Biryani', price: 400,  image: 'https://food-images.files.bbci.co.uk/food/recipes/kashmiri_biryani_14589_16x9.jpg', type: 'non-veg', quantity: 1 },
];
  export const desserts: FoodItem[] = [
    {id:36, name: 'Gulab Jamun', image: 'https://www.ruchikrandhap.com/wp-content/uploads/2018/11/Gulab-Jamoon17_Ruchik-Randhap.jpg', price: 100,  type: 'veg', quantity: 1 },
    {id:37, name: 'Kulfi', image: 'https://www.potsandpans.in/cdn/shop/articles/iStock-657090194-Kulfi-Recipe.jpg?v=1539873741', price: 90,  type: 'veg', quantity: 1 },
    {id:38, name: 'Kheer', image: 'https://www.honeywhatscooking.com/wp-content/uploads/2020/10/Rice-Kheer-Indian-Rice-Pudding44.jpg', price: 120,  type: 'veg', quantity: 1 },
    {id:40, name: 'Ras Malai', image: 'https://www.hindustantimes.com/ht-img/img/2024/03/18/550x309/f5f842cb91597146df97a40f962fa699_1680954640258_1710749619527.jpg', price: 150,  type: 'veg', quantity: 1 },
    ];
    export const iceCreams: FoodItem[] = [
      {id:41, name: 'Caramel Vanilla', price: 50,  image: 'https://pastrychefonline.com/wp-content/uploads/2016/08/ab-Organic-Caramel-Vanilla-Ice-Cream-Recipe-4.jpg', type: 'veg', quantity: 1 },
      {id:42, name: 'Chocolate', price: 60,  image: 'https://cdn.jwplayer.com/v2/media/fRnt3pRj/poster.jpg?width=720', type: 'veg', quantity: 1 },
      {id:43, name: 'Strawberry', price: 60,  image: 'https://aplantifulpath.com/wp-content/uploads/2019/08/Strawberry-Ice-Cream-1.jpg', type: 'veg', quantity: 1 },
      {id:44, name: 'Butterscotch', price: 70,  image: 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2021/12/Butterscotch-ice-cream-hero-4.jpg', type: 'veg', quantity: 1 },
    ];

    export const milkshakes: FoodItem[] = [
      {id:46, name: 'Chocolate Shake', price: 150,  image: 'https://images3.alphacoders.com/133/1330423.png', type: 'veg', quantity: 1 },
      {id:47, name: 'Strawberry Shake', price: 150,  image: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/04/Strawberry_Milkshake.png', type: 'veg', quantity: 1 },
      {id:48, name: 'Vanilla Shake', price: 150,  image: 'https://www.southernliving.com/thmb/3szOY01nJgzoSAYqpp6lTZcdp9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vanilla_Milkshake_009-6cb8046e40f64e2db54764664ce92c13.jpg', type: 'veg', quantity: 1 },
      {id:49, name: 'Oreo Shake', price: 170,  image: 'https://www.oreo.com/media/recipe/MILKSHAKE-STILL1-16X9_2.jpg', type: 'veg', quantity: 1 },
    ];
