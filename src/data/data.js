export const cuisineData = [
  { id: 1, name: "Italian", reviews: [], averageRating: 4 },
  { id: 2, name: "Mexican", reviews: [], averageRating: 4 },
  { id: 3, name: "Chinese", reviews: [], averageRating: 4 },
  { id: 4, name: "Indian", reviews: [], averageRating: 4 },
];

export const restaurantsData = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine_id: 1,
    address: "123 Main Street",
    phone: "555-1234",
    menu: [
      {
        name: "Margherita Pizza",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/9e7/bdf4fa911a76e5ba0656f5adad9749e7.png?output-format=webp",
        price: 500,
        qty: "one",
      },
      {
        name: "Pepperoni Pizza",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/6c9/c89a5e86eece9f96e3b8be3f6bb2c6c9.jpg?output-format=webp",
        price: 400,
        qty: "two",
      },
      {
        name: "Pasta Carbonara",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/6d8/84eeabf844ca5c9c310a8ed3671086d8.jpg?output-format=webp",
        price: 250,
        qty: "one",
      },
      {
        name: "Tiramisu",
        imgSrc:
          "https://b.zmtcdn.com/data/o2_assets/87c70510634544f14945f5c2acf173a11632716549.png",
        price: 300,
        qty: "one",
      },
    ],
    ratings: [
      {
        rating: 2,
        comment: "Disappointing food and slow service",
        revName: "Riya",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
      },
      {
        rating: 2,
        comment: "Overpriced menu for mediocre quality",
        revName: "Krish",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
      },
      {
        rating: 1,
        comment: "Lackluster flavors and unappealing presentation",
        revName: "Kripla",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
      },
    ],
    averageRating: 4.3,
    description: "Delicious pizzas and pasta.",
  },
  {
    id: 5,
    name: "Yummy Section",
    cuisine_id: 1,
    address: "555 No Street",
    phone: "888-7574",
    menu: [
      {
        name: "Capsicum Pizza",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/ab6/7e971ab815c31b32526ff32b70470ab6.jpg",
        price: 150,
        qty: "one",
      },
      {
        name: "Tomato Pizza",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/d19/86520521016d1860d50556146b172d19.jpg?output-format=webp",
        price: 150,
        qty: "one",
      },
      {
        name: "White Sauce Pasta",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/d2f/26b3e83665ae7019dfae69cbd20a0d2f.png?output-format=webp",
        price: 150,
        qty: "one",
      },
      {
        name: "Italiano",
        imgSrc:
          "https://b.zmtcdn.com/data/o2_assets/6e4652a07d4850046388c830ebb71ac41678798512.jpeg",
        price: 250,
        qty: "one",
      },
    ],
    ratings: [
      {
        rating: 1,
        comment: "Too spicy and unbalanced spices",
        revName: "Riya",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
      },
      {
        rating: 5,
        comment: "Delicious food and exceptional service",
        revName: "Krish",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
      },
      {
        rating: 4,
        comment: "A hidden gem with mouthwatering dishes",
        revName: "Kripla",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
      },
    ],
    averageRating: 3.3,
    description: "Authentic Italian food.",
  },
  {
    id: 2,
    name: "Taco Town",
    cuisine_id: 2,
    address: "456 Elm Street",
    phone: "555-5678",
    menu: [
      {
        name: "Tacos al Pastor",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/bac/4ed982a105a49f1b998c72b127ae7bac.jpg?output-format=webp",
        price: 650,
        qty: "two",
      },
      {
        name: "Guacamole",
        imgSrc:
          "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Guacamole-1-2.jpg",
        price: 550,
        qty: "two",
      },
      {
        name: "Quesadillas",
        imgSrc:
          "https://www.simplyrecipes.com/thmb/KE5S60KPY7_1SBTldQaWmLLfqG4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg",
        price: 200,
        qty: "one",
      },
      {
        name: "Churros",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/24b/c3aa5e4de50ee0fa29ebf50bd521724b.jpg",
        price: 100,
        qty: "one",
      },
    ],
    ratings: [
      {
        rating: 4,
        comment: "Top-notch cuisine that will leave you craving for more",
        revName: "Riya",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
      },
      {
        rating: 1,
        comment: "Uncooked dishes and unresponsive staff",
        revName: "Krish",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
      },
      {
        rating: 4,
        comment: "Delivery is quick and waiting time is low",
        revName: "Kripla",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
      },
    ],
    averageRating: 3,
    description: "Authentic Mexican street food.",
  },
  {
    id: 3,
    name: "Wok This Way",
    cuisine_id: 3,
    address: "789 Oak Avenue",
    phone: "555-9876",
    menu: [
      {
        name: "Sweet and Sour Chicken",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/a14/322d4cb5da03767ca6941d30dd49fa14.jpg",
        price: 500,
        qty: "one",
      },
      {
        name: "Fried Rice",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/1eb/5839f6b9e4f1e044b7e7da5d4fa2f1eb.jpg",
        price: 300,
        qty: "one",
      },
      {
        name: "Spring Rolls",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/3fc/04e913e2a47b839e703c6e7c5cce23fc.jpg",
        price: 150,
        qty: "one",
      },
      {
        name: "Peking Duck",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/f7b/707370baf33e732b57a44280b78c2f7b.jpg",
        price: 600,
        qty: "one",
      },
    ],
    ratings: [
      {
        rating: 3,
        comment: "Solid flavors but could use more spice",
        revName: "Riya",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
      },
      {
        rating: 5,
        comment: "Best Asian food in town!",
        revName: "Krish",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
      },
      {
        rating: 2,
        comment: "Service was slow and food was mediocre",
        revName: "Kripla",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
      },
    ],
    averageRating: 4,
    description: "Authentic Chinese cuisine.",
  },
  {
    id: 4,
    name: "Curry House",
    cuisine_id: 4,
    address: "321 Pine Street",
    phone: "555-4321",
    menu: [
      {
        name: "Butter Chicken",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/376/cb7a376b6885cf344a00840c49b8376c.jpg",
        price: 450,
        qty: "one",
      },
      {
        name: "Paneer Tikka",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/f7c/e97197cf18224d1c7e43284634460f7c.jpg",
        price: 300,
        qty: "one",
      },
      {
        name: "Biryani",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/3f6/f19e16a9d95d6aa9f3a15b1d7150a3f6.jpg",
        price: 700,
        qty: "one",
      },
      {
        name: "Raita",
        imgSrc:
          "https://b.zmtcdn.com/data/dish_photos/25c/ff13a0ab593edc1129e6da1b2f5625c.jpg",
        price: 150,
        qty: "one",
      },
    ],
    ratings: [
      {
        rating: 4,
        comment: "Spices were just right and the ambiance was nice",
        revName: "Riya",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
      },
      {
        rating: 2,
        comment: "Lack of flavor and presentation was poor",
        revName: "Krish",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
      },
      {
        rating: 5,
        comment: "Heavenly flavors, worth every penny",
        revName: "Kripla",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
      },
    ],
    averageRating: 4,
    description: "Delicious Indian curry and bread.",
  },
];
