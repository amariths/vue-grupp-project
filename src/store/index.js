import { createStore } from "vuex";

const store = createStore({
  state: {
    food: {
      product: [],
      price: [],
    },
    date: "",
    time: "",
    guests: "",
    count: "",
    foodId: [],
    chosenFood: [],
    amountFood: [],
    chosenFoodPrice: [],
    foodTotalPrice: 0,
  },
  getters: {
    priceCalc: (state) => {
      return state.foodTotalPrice - state.count;
    },
  },

  mutations: {
    // Add product name and price to OrderNote component
    addItem(state, items) {
      state.food.product.push(items.product);
      state.food.price.push(items.price);
    },
    // Remove the latest name and price
    remItem(state) {
      state.food.product.pop();
      state.food.price.pop();
    },
    increment(state, amount) {
      state.counter += amount;
    },
    updateDate(state, payload) {
      state.date = payload;
    },
    updateTime(state, payload) {
      state.time = payload;
    },
    updateGuests(state, payload) {
      state.guests = payload;
    },
    selectSeat(state, seat) {
      state.table = seat;
      console.log(state.table);
    },
    updateCount(state, payload) {
      state.count = payload;
    },

    /*ADD FOOD BUTTON*/

    addFood(state, { food, price, id }) {
      /* AMOUNT OF APPETIZERS "x2" */

      state.amountFood.push(food);

      var count = 0;
      var b = state.amountFood.length;

      for (let i = 0; i < b; i++) {
        if (food === state.amountFood[i]) {
          count++;
        }
      }

      /* TOTAL PRICE */

      state.foodTotalPrice = state.foodTotalPrice + price;

      /* SEPARATE PRICE */

      var c = state.foodId.length;
      var exists = false;

      for (let i = 0; i < c; i++) {
        if (id === state.foodId[i]) {
          exists = true;
          state.chosenFoodPrice[i] = state.chosenFoodPrice[i] + price;
        }
      }

      if (exists === false) {
        state.chosenFoodPrice.push(price);
        state.foodId.push(id);
      }

      /* ADD APPETIZER TO NOTE*/

      if (state.chosenFood[0] === undefined) {
        state.chosenFood.push(food);
      } else {
        var a = state.chosenFood.length;
        var same = false;

        for (let i = 0; i < a; i++) {
          if (state.chosenFood[i].includes(food)) {
            same = true;
            state.chosenFood.splice([i], 1, food + " x" + count);
          }
        }
        if (same === false) {
          state.chosenFood.push(food);
        }
      }
    },

    /*DELETE FOOD BUTTON*/

    deleteFood(state, { food, price, id }) {
      if ((state.foodTotalPrice > 0, state.amountFood.includes(food))) {
        /* AMOUNT OF APPETIZERS "x2" */

        var amount = state.amountFood.length;
        var count = 0;

        for (let i = 0; i < amount; i++) {
          if (food === state.amountFood[i]) {
            count++;
          }
        }

        count = count - 1;

        for (let i = 0; i < amount; i++) {
          if (food === state.amountFood[i]) {
            delete state.amountFood[i];
            break;
          }
        }

        /* TOTAL PRICE */

        state.foodTotalPrice = state.foodTotalPrice - price;

        /* SEPARATE PRICE */

        var c = state.foodId.length;
        var exists = false;

        for (let i = 0; i < c; i++) {
          if (id === state.foodId[i]) {
            exists = true;
            state.chosenFoodPrice[i] = state.chosenFoodPrice[i] - price;

            if (state.chosenFoodPrice[i] === 0) {
              state.chosenFoodPrice.splice([i], 1);
              state.foodId.splice([i], 1);
              break;
            }
          }
        }

        /* SUB APPETIZER FROM NOTE*/

        var a = state.chosenFood.length;

        for (let i = 0; i < a; i++) {
          if (state.chosenFood[i].includes(food)) {
            state.chosenFood.splice([i], 1, food + " x" + count);

            if (count === 1) {
              state.chosenFood.splice([i], 1, food);
            } else if (count === 0) {
              state.chosenFood.splice([i], 1);
              break;
            }
          }
        }
      }
    },
  },
});

export default store;
