export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const starters: FoodItem[] = [
{ id: 1, name: 'Vegetable Pakora', price: 200,  image: 'https://recipes.net/wp-content/uploads/2023/05/air-fryer-vegetable-pakoras_6a3f14ddeb50173239853d3b6fd68a23.jpeg', type: 'veg', quantity: 1 },
{ id: 2, name: 'Corn Cutlets', price: 250,  image: 'https://i.ytimg.com/vi/skXsuZ-O_-8/sddefault.jpg', type: 'veg', quantity: 1 },
{ id: 3, name: 'Aloo Chaat', price: 180,  image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMrn-TfZrSNiiiCwIjVh6rOaRLQbXvkh-pEGNViZ5fr1oZ8lDOTX0qCeLOxp2B4lW_qk1w-_-Hmv3djReYCjcaBtlZ8Rf74hWI8GgvmH3FNrd3zbjPd8A-J-QGRsR0eBcjHuLr5r9aoKlz_TomFMPD3h_uo37F5rYzhwrLykYHqdZO0QCd9T0tjhnRPA/s1080/Street%20Style%20Aalu%20Chaat.jpg', type: 'veg', quantity: 1 },
{ id: 4, name: 'Hara Bhara Kebab', price: 280,  image: 'https://1.bp.blogspot.com/-X-anqIw-Nug/YKPAjJJYxjI/AAAAAAAAmb4/ot46CDpMUasTLtb3pyq1CKaAnODrqs07wCLcBGAsYHQ/s2048/_MG_3359.jpeg', type: 'veg', quantity: 1 },
{ id: 5, name: 'Paneer Chilli', price: 260,  image: 'https://i.ytimg.com/vi/hdYiNdYMpmM/maxresdefault.jpg', type: 'veg', quantity: 1 },
{ id: 6, name: 'Crispy Tofu Bites', price: 240,  image: 'https://thecozyapron.com/wp-content/uploads/2014/03/crispy-tofu_thecozyapron_1.jpg', type: 'veg', quantity: 1 },
{ id: 7, name: 'Fish Amritsari', price: 250,  image: 'https://sinfullyspicy.com/wp-content/uploads/2022/07/1200-by-1200-images-4.jpg', type: 'non-veg', quantity: 1 },
{ id: 8, name: 'Chicken Wings ', price: 250,  image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Wings-min.jpg', type: 'non-veg', quantity: 1 },
{ id: 9, name: 'Lamb Seekh Kebab', price: 220,  image: 'https://media.istockphoto.com/id/501027041/photo/behrai-kabab-1.jpg?s=612x612&w=0&k=20&c=T5d7Aa29Xao8Hf60-nMJ09ca6bEO0kKRjjHZQIxxsso=', type: 'non-veg', quantity: 1 },
];

    export const beverages: FoodItem[] = [
      {id: 21,name: "Mint Mojito",price: 160,image: "https://w0.peakpx.com/wallpaper/537/270/HD-wallpaper-mojitos-mint-drinks-mojito-glasses-summer-cocktails-mint-lime-thumbnail.jpg",type: "veg",quantity: 1},
      {id: 22,name: "Blueberry Smoothie",price: 180,image: "https://www.alphafoodie.com/wp-content/uploads/2022/03/Blueberry-Smoothie-Square.jpeg",type: "veg",quantity: 1},
      {id: 23,name: "Peach Iced Tea",price: 150,image: "https://foodtasia.com/wp-content/uploads/2021/08/peach-tea-24.jpg",type: "veg",quantity: 1},
      {id: 24,name: "Lime Soda",price: 120,image: "https://c4.wallpaperflare.com/wallpaper/253/297/219/ice-cocktail-lime-ice-wallpaper-preview.jpg",type: "veg",quantity: 1},
      {id: 25,name: "Avocado Smoothie",price: 190,image: "https://recipes.net/wp-content/uploads/2023/05/keto-avocado-smoothie-recipe_1989aa748aa35fd424ff5b163f413a73.jpeg",type: "veg",quantity: 1},
      {id: 26,name: "Raspberry Lemonade",price: 140,image: "https://realfood.tesco.com/media/images/163-RaspberryLemonade-LH-db966779-209b-4cfe-a59c-32f583775a4b-0-1400x919.jpg",type: "veg",quantity: 1}
  ]
  
