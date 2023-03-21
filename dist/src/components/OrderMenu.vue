<script>
export default {
  created() {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((result) => {
        this.appetizers = result[0].pre;
        this.mains = result[0].main;
        this.deserts = result[0].desert;
        this.drinks = result[0].drink;
      });
  },
  data() {
    return {
      appetizers: null,
      mains: null,
      deserts: null,
      drinks: null,
    };
  },
  methods: {
    plus(food, price, id) {
      this.$store.commit("addFood", { food, price, id });
    },
    minus(food, price, id) {
      this.$store.commit("deleteFood", { food, price, id });
    },
  },
};
</script>

<template>
  <div class="menu-container">
    <h2>Meny</h2>
    <h3>Förrätter</h3>
    <ul class="menu-ul">
      <li class="menu-li" v-for="appetizer in appetizers" :key="appetizer.id">
        <p class="product">{{ appetizer.product }}</p>
        <p class="price">{{ appetizer.price }}kr</p>
        <button
          class="plus"
          @click="plus(appetizer.product, appetizer.price, appetizer.id)"
        ></button>
        <button
          @click="minus(appetizer.product, appetizer.price, appetizer.id)"
          class="minus"
        ></button>
      </li>
    </ul>
    <h3>Varmrätter</h3>
    <ul class="menu-ul">
      <li class="menu-li" v-for="main in mains" :key="main.id">
        <p class="product">{{ main.product }}</p>
        <p class="price">{{ main.price }}kr</p>
        <button
          @click="plus(main.product, main.price, main.id)"
          class="plus"
        ></button>
        <button
          @click="minus(main.product, main.price, main.id)"
          class="minus"
        ></button>
      </li>
    </ul>
    <h3>Deserter</h3>
    <ul class="menu-ul">
      <li class="menu-li" v-for="desert in deserts" :key="desert.id">
        <p class="product">{{ desert.product }}</p>
        <p class="price">{{ desert.price }}kr</p>
        <button
          @click="plus(desert.product, desert.price, desert.id)"
          class="plus"
        ></button>
        <button
          @click="minus(desert.product, desert.price, desert.id)"
          class="minus"
        ></button>
      </li>
    </ul>
    <h3>Drycker</h3>
    <ul class="menu-ul">
      <li class="menu-li" v-for="drink in drinks" :key="drink.id">
        <p class="product">{{ drink.product }}</p>
        <p class="price">{{ drink.price }}kr</p>
        <button
          @click="plus(drink.product, drink.price, drink.id)"
          class="plus"
        ></button>
        <button
          @click="minus(drink.product, drink.price, drink.id)"
          class="minus"
        ></button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu-container {
  background-color: #1c1c1c;
  color: #ffffff;
  font-family: "Cutive Mono", monospace;
  width: 35.25rem;
  height: 45rem;
  margin: 1.5rem;
  overflow-y: scroll;
  border-top: 2rem solid #1c1c1c;
  border-bottom: 2rem solid #1c1c1c;
}

.menu-container > h2 {
  display: flex;
  justify-content: center;
  font-size: 1.87rem;
  margin-top: 1vh;
  margin-bottom: 2vh;
}

.menu-container > h3 {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-size: 1.25rem;
}

.menu-ul {
  list-style: none;
  font-size: 1.25rem;
  padding: 0;
}

.menu-li {
  display: flex;
  justify-content: center;
  margin: 0.8rem 0 0 0;
  height: 1.5rem;
}

.product {
  width: 60%;
}

.plus {
  background-color: #1c1c1c;
  background-image: url(../assets/pics/logos/plus.png);
  background-size: cover;
  height: 1.5rem;
  width: 1.5rem;
  border: 0;
  margin-left: 0.5rem;
}

.minus {
  background-color: #1c1c1c;
  background-image: url(../assets/pics/logos/minus.png);
  background-size: cover;
  height: 1.3rem;
  width: 1.2rem;
  border: 0;
  margin-left: 0.5rem;
}

@media only screen and (max-width: 564px) {
  .menu-container {
    width: 100%;
  }
}
</style>
