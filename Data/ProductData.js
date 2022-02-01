import Zawadi from "../public/zawadi.jpg";

export const Tours = [
  {
    title: "Zanzibar Easter",
    hotels: [
      {
        name: "Zawadi Beach Villas",
        mealPlan: "Bed & Breakfast",
        price: 70500,
        rating: 3,
        img: Zawadi,
      },
      {
        name: "Langi Langi Beach Bungalows",
        mealPlan: "Bed & Breakfast",
        price: 71000,
        rating: 3,
      },
      {
        name: "Mnarani Beach Cottages",
        mealPlan: "Half Board",
        price: 89999,
        rating: 3,
      },
      {
        name: "Zanbluu Beach Hotel",
        mealPlan: "Half Board",
        price: 90500,
        rating: 4,
      },
      {
        name: "Ocean Paradise",
        mealPlan: "Half Board",
        price: 90500,
        rating: 4,
      },
      {
        name: "Sandles Baobab Beach",
        mealPlan: "All Inclusive",
        price: 101500,
        rating: 4,
      },
      {
        name: "Diamond Mapenzi Beach",
        mealPlan: "All Inclusive",
        price: 101999,
        rating: 4,
      },
      {
        name: "Breezes Beach Club",
        mealPlan: "Half Board",
        price: 102500,
        rating: 5,
      },
      {
        name: "Double Tree by Hilton",
        mealPlan: "All Inclusive",
        price: 102500,
        rating: 4,
      },
      {
        name: "Essque Zalu",
        mealPlan: "Half Board",
        price: 107999,
        rating: 4,
      },
      {
        name: "Blue Bay Beach Resort",
        mealPlan: "Half Board",
        price: 110500,
        rating: 4,
      },
      {
        name: "Sultan Sands",
        mealPlan: "Half Board",
        price: 110500,
        rating: 4,
      },
      {
        name: "The Royal Zanzibar",
        mealPlan: "All Inclusive",
        price: 126500,
        rating: 5,
      },
      {
        name: "Mella Zanzibar",
        mealPlan: "All Inclusive",
        price: 133000,
        rating: 5,
      },
      {
        name: "Tui Blue Bahari",
        mealPlan: "All Inclusive",
        price: 134999,
        rating: 5,
      },
      {
        name: "The Palms Zanzibar ",
        mealPlan: "All Inclusive",
        price: 206500,
        rating: 5,
      },
      {
        name: "Baraza Resort",
        mealPlan: "All Inclusive",
        price: 212500,
        rating: 5,
      },
    ],
    dates: "15th April - 19th April",

    location: "Zanzibar",
    typeOfTour: ["International"],
    inclusions: [
      "Return Flight",
      "Return Airport Transfers",
      "4 Nights Accomodation",
      "Spice Tour and Stone Town tour",
      "Meals plan as per hotel chosen",
      "Mnemba Island Day tour",
      "Evening traditional dhow cruise",
    ],
    exclusions: ["Tips"],
    activities: [],
  },
  {
    title: "AIN DUBAI",
    hotels: [
      {
        name: "Golden Tulip Al Barsha",
        mealPlan: [
          "Half Board",
          "FullBoard",
          "All Inclusive",
          "Bed & Breakfast",
          "Daily Buffet BreakFast",
        ],
      },
      {
        name: "Copthorne Dubai",
        mealPlan: [
          "Half Board",
          "FullBoard",
          "All Inclusive",
          "Bed & Breakfast",
          "Daily Buffet BreakFast",
        ],
      },
      {
        name: "Novotel Bur Dubai",
        mealPlan: [
          "Half Board",
          "FullBoard",
          "All Inclusive",
          "Bed & Breakfast",
          "Daily Buffet BreakFast",
        ],
      },
      {
        name: "Avani Deira",
        mealPlan: [
          "Half Board",
          "FullBoard",
          "All Inclusive",
          "Bed & Breakfast",
          "Daily Buffet BreakFast",
        ],
      },
      {
        name: "TRYP by Wyndham",
        mealPlan: [
          "Half Board",
          "FullBoard",
          "All Inclusive",
          "Bed & Breakfast",
          "Daily Buffet BreakFast",
        ],
      },
      {
        name: "Novotel Al Barsha",
        mealPlan: [
          "Half Board",
          "FullBoard",
          "All Inclusive",
          "Bed & Breakfast",
          "Daily Buffet BreakFast",
        ],
      },
    ],
    dates: ["Valid upto 31st March"],

    location: "Dubai",
    typeOfTour: "International",
    inclusions: [],
    exclusions: [],
    activities: [],
  },
];

export const HotelNames = Tours.map((tour) =>
  tour.hotels.map((hotel) => hotel.name)
);
