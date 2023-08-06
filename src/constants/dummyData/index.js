// import { appImages, Add, Apple } from "@assets";
// import { strings } from "../strings";
// import { SCREENS } from '@constants';

import { appImages } from "../../assets";

export const data = {
  products: [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Vegetables",
      img: appImages.veg,
    },
    {
      id: 3,
      title: "Fish",
      img: appImages.fish,
    },
    {
      id: 4,
      title: "Fruits",
      img: appImages.veg,
    },
    {
      id: 5,
      title: "Others",
      // img: require('../assets/images/fish.png'),
    },
  ],
  topProducts: [
    {
      id: 1,
      img: appImages.brocolli,
      name: "Brocolli",
      weight: "100g",
      price: "$4/kg",
    },
    {
      id: 2,
      img: appImages.banana,
      name: "Banana",
      weight: "100g",
      price: "$10/kg",
    },
    {
      id: 3,
      img: appImages.orange,
      name: "Orange",
      weight: "100g",
      price: "$4/kg",
    },
  ],
  recomendations: [
    {
      id: 1,
      img: appImages.avacado,
      name: "Avacado",
      weight: "200g",
      price: "$9/kg",
    },
    {
      id: 2,
      img: appImages.orange,
      name: "Orange",
      weight: "100g",
      price: "$4/kg",
    },
    {
      id: 3,
      img: appImages.brocolli,
      name: "Brocolli",
      weight: "100g",
      price: "$4/kg",
    },
  ],

  vegetables: [
    {
      id: 1,
      img: appImages.brocolli,
      name: "Brocolli",
      weight: "20g",
      price: "$10/kg",
    },
    {
      id: 2,
      img: appImages.tomatoes,
      name: "Tomatoes",
      weight: "10g",
      price: "$8/kg",
    },
    {
      id: 3,
      img: appImages.pepper,
      name: "Pepper",
      weight: "100g",
      price: "$10/kg",
    },
    {
      id: 4,
      img: appImages.carrot,
      name: "Carrot",
      weight: "30g",
      price: "$13/kg",
    },
    {
      id: 5,
      img: appImages.raddish,
      name: "Raddish",
      weight: "80g",
      price: "$8/kg",
    },
    {
      id: 6,
      img: appImages.corn,
      name: "Corn",
      weight: "100g",
      price: "$16/kg",
    },
  ],

  fruits: [
    {
      id: 1,
      img: appImages.avacado,
      name: "Avacado",
      weight: "220g",
      price: "$9/kg",
    },
    {
      id: 2,
      img: appImages.orange,
      name: "Orange",
      weight: "160g",
      price: "$4/kg",
    },

    {
      id: 3,
      img: appImages.banana,
      name: "Banana",
      weight: "100g",
      price: "$10/kg",
    },
  ],
};
