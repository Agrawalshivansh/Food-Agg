export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

 export const desserts: FoodItem[] = [
    {id:36, name: 'Creme Brulee', image: 'https://natashaskitchen.com/wp-content/uploads/2020/02/Creme-Brule-Recipe-SQ.jpg', price: 100,  type: 'veg', quantity: 1 },
    {id:37, name: 'Malai Khaja', image: 'https://www.shutterstock.com/image-photo/indian-malai-khaja-260nw-610264817.jpg', price: 90,  type: 'veg', quantity: 1 },
    {id:38, name: 'Gelatina De Mosaico ', image: 'https://www.thespruceeats.com/thmb/TYSL7_6Zu70TLxjETjlIKbKeD2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gelatina-de-mosaico-5201408-hero-08-134fa96112f041f993719125e961669e.jpg', price: 120,  type: 'veg', quantity: 1 },
    {id:39, name: 'Oreo Cheesecake', image: 'https://grandbaby-cakes.com/wp-content/uploads/2022/05/Oreo-Cheesecake-6-500x375.jpeg', price: 200,  type: 'veg', quantity: 1 },
    {id:40, name: 'Coconut Macaroons', image: 'https://www.rockrecipes.com/wp-content/uploads/2013/11/Easy-Cherry-Almond-Macaroons-shown-on-red-serving-plate-with-Christmas-decorations-in-background-500x500.jpg', price: 150,  type: 'veg', quantity: 1 },
    ];
    export const iceCreams: FoodItem[] = [
      {id:41, name: 'Mint Chocolate Chip', price: 50,  image: 'https://img.freepik.com/premium-photo/bowl-mint-chocolate-chip-ice-cream-with-chocolate-chips-top_391229-4459.jpg', type: 'veg', quantity: 1 },
      {id:42, name: 'Cookie Dough', price: 60,  image: 'https://www.kevinandamanda.com/wp-content/uploads/2010/09/chocolate-chip-cookie-dough-cupcakes-1.jpg', type: 'veg', quantity: 1 },
      {id:43, name: 'Pistachio pudding', price: 60,  image: 'https://www.biggerbolderbaking.com/wp-content/uploads/2022/04/Pistachio-Pudding1-scaled.jpg', type: 'veg', quantity: 1 },
      {id:44, name: 'Chocolate Fudge Brownie', price: 70,  image: 'https://media.istockphoto.com/id/155598375/photo/dessert-chocolate-cake.jpg?s=612x612&w=0&k=20&c=DbBk025te405Suf8zNBdgp67y3iJB9LsyXERPQMTAqY=', type: 'veg', quantity: 1 },
      {id:45, name: 'Vanilla', price: 80,  image: 'https://img.freepik.com/premium-photo/chocolate-vanilla-strawberry-ice-cream-isolated-white_807701-3441.jpg', type: 'veg', quantity: 1 },
    ];
    