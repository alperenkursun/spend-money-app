import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const maxPiece = (items, indexx, totalMoney) => {
  if (indexx === 41) {
    return 1;
  }
  if (indexx === 44) {
    return 30;
  }
  let otherItems = items.filter((item, index) => index !== indexx);
  let otherTotalCost = 0;
  otherItems.map((item) => {
    otherTotalCost += item.piece * item.price;
    return "";
  });

  let maxcost = 100000000000 - otherTotalCost;

  let maxpiece = maxcost / items[indexx].price;

  return parseInt(maxpiece);
};

const totalCost = (items) => {
  let Items = items.filter((item) => item.piece !== 0);

  let itemsTotalCost = 0;
  let cost;
  Items.map((item) => {
    cost = item.piece * item.price;
    itemsTotalCost += cost;
    return "";
  });

  return 100000000000 - itemsTotalCost;
};

const receipts = (items) => {
  let Items = items.filter((item) => item.piece !== 0);

  return Items;
};

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    items: [
      {
        img: "https://neal.fun/spend/images/big-mac.jpg",
        name: "Big Mac",
        price: 2,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/flip-flops.jpg",
        name: "Flip Flops",
        price: 3,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/coca-cola-pack.jpg",
        name: "Coca-Cola Pack",
        price: 5,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/movie-ticket.jpg",
        name: "Movie Ticket",
        price: 12,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/book.jpg",
        name: "Book",
        price: 15,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/lobster-dinner.jpg",
        name: "Lobster Dinner",
        price: 45,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/video-game.jpg",
        name: "Video Game",
        price: 60,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/amazon-echo.jpg",
        name: "Amazon Echo",
        price: 99,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/year-of-netflix.jpg",
        name: "Year of Netflix",
        price: 100,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/air-jordans.jpg",
        name: "Air Jordans",
        price: 125,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/airpods.jpg",
        name: "Airpods",
        price: 199,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/gaming-console.jpg",
        name: "Gaming Console",
        price: 299,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/drone.jpg",
        name: "Drone",
        price: 350,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/smartphone.jpg",
        name: "Smartphone",
        price: 699,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/bike.jpg",
        name: "Bike",
        price: 800,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/kitten.jpg",
        name: "Kitten",
        price: 1500,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/puppy.jpg",
        name: "Puppy",
        price: 1500,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/auto-rickshaw.jpg",
        name: "Auto Rickshaw",
        price: 2300,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/horse.jpg",
        name: "Horse",
        price: 2500,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/acre-of-farmland.jpg",
        name: "Acre of Farmland",
        price: 3000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/designer-handbag.jpg",
        name: "Designer Handbag",
        price: 5500,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/hot-tub.jpg",
        name: "Hot Tub",
        price: 6000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/luxury-wine.jpg",
        name: "Luxury Wine",
        price: 7000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/diamond-ring.jpg",
        name: "Diamond Ring",
        price: 10000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/jet-ski.jpg",
        name: "Jet Ski",
        price: 12000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/rolex.jpg",
        name: "Rolex",
        price: 15000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/ford-f-150.jpg",
        name: "Ford F-150",
        price: 30000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/tesla.jpg",
        name: "Tesla",
        price: 75000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/monster-truck.jpg",
        name: "Monster Truck",
        price: 150000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/ferrari.jpg",
        name: "Ferrari",
        price: 250000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/single-family-home.jpg",
        name: "Single Family Home",
        price: 300000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/gold-bar.jpg",
        name: "Gold Bar",
        price: 700000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/mcdonalds-franchise.jpg",
        name: "McDonalds Franchise",
        price: 1500000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/superbowl-ad.jpg",
        name: "Superbowl Ad",
        price: 5250000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/yacht.jpg",
        name: "Yacht",
        price: 7500000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/m1-abrams.jpg",
        name: "M1 Abrams",
        price: 8000000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/formula-1-car.jpg",
        name: "M1 Abrams",
        price: 15000000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/apache-helicopter.jpg",
        name: "Apache Helicopter",
        price: 31000000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/mansion.jpg",
        name: "Mansion",
        price: 45000000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/make-a-movie.jpg",
        name: "Make a Movie",
        price: 100000000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/boeing-747.jpg",
        name: "Boeing 747",
        price: 148000000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/mona-lisa.jpg",
        name: "Mona Lisa",
        price: 780000000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/skyscraper.jpg",
        name: "Skyscraper",
        price: 850000000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/cruise-ship.jpg",
        name: "Cruise Ship",
        price: 930000000,
        piece: 0,
      },
      {
        img: "https://neal.fun/spend/images/nba-team.jpg",
        name: "NBA Team",
        price: 2120000000,
        piece: 0,
      },
    ],
    totalMoney: 100000000000,
    receipt: [],
  },
  reducers: {
    setItemMoney: (state, action) => {
      state.itemMoney = action.payload;
    },
    editItemPiece: (state, action) => {
      let index = action.payload.index;
      state.items[index].piece = parseInt(action.payload.value);
      let maxpiece = maxPiece(current(state.items), index, state.totalMoney);

      if (maxpiece < action.payload.value) {
        state.items[index].piece = maxpiece;
      }

      let cost = totalCost(current(state.items));
      state.totalMoney = cost;
      state.receipt = receipts(state.items);
    },
    incItemPiece: (state, action) => {
      let index = action.payload.index;
      state.items[index].piece += 1;
      let maxpiece = maxPiece(current(state.items), index, state.totalMoney);

      if (maxpiece < state.items[index].piece) {
        state.items[index].piece = maxpiece;
      }
      let cost = totalCost(current(state.items));
      state.totalMoney = cost;
      state.receipt = receipts(state.items);
    },
    decItemPiece: (state, action) => {
      let index = action.payload.index;
      if (state.items[index].piece !== 0) state.items[index].piece -= 1;
      let maxpiece = maxPiece(current(state.items), index, state.totalMoney);

      if (maxpiece < state.items[index].piece) {
        state.items[index].piece = maxpiece;
      }
      let cost = totalCost(current(state.items));
      state.totalMoney = cost;
      state.receipt = receipts(state.items);
    },
  },
});

export const { setItemMoney, editItemPiece, incItemPiece, decItemPiece } =
  moneySlice.actions;

export const selectTotalMoney = (state) => state.money.totalMoney;
export const selectItemMoney = (state) => state.money.itemMoney;
export const selectItems = (state) => state.money.items;
export const selectReceipt = (state) => state.money.receipt;

export default moneySlice.reducer;
