<script setup>
import useValidate from "@vuelidate/core";

import { required, email, numeric, alpha } from "@vuelidate/validators";
import { RouterLink, RouterView } from "vue-router";
</script>

<script>
export default {
  data() {
    return {
      v$: useValidate(),
      Förnamn: "",
      Efternamn: "",
      Email: "",
      Tel: "",
      shadow: "0 0 10px red",
    };
  },

  computed: {
    priceCalc() {
      return this.$store.getters.priceCalc;
    },
  },
  methods: {
    submitForm() {
      this.v$.$validate();
    },
  },

  validations() {
    return {
      Förnamn: { required, alpha },
      Efternamn: { required, alpha },
      Email: { required, email },
      Tel: { required, numeric },
    };
  },
};
</script>

<template>
  <div class="booking__container height__fix--media">
    <h1 class="booking__title">Bordsbokning:</h1>
    <div class="booking__para--container">
      <div class="booking__para--variables">
        <div
          v-if="$store.state.time && $store.state.date && $store.state.table"
          class="v-if"
        >
          <p class="booking__para">{{ $store.state.time }}</p>
          <p class="booking__para">Bord: {{ $store.state.table }}</p>
          <p class="booking__para">{{ $store.state.date }}</p>
        </div>

        <div v-else class="v-else">
          <p class="booking__para">Tid: Ej valt</p>
          <p class="booking__para">Bord: Ej Valt</p>
          <p class="booking__para">Datum: Ej valt</p>
        </div>
      </div>
      <div class="booking__change">
        <RouterLink class="nav__link" to="/booking">
          <p class="booking__para border__bottom textdecor border__media">
            Ändra
          </p>
        </RouterLink>
      </div>
    </div>
  </div>

  <div class="booking__container minimum__height">
    <h1 class="booking__title">beställning:</h1>
    <div class="booking__para--container flexdirection height__auto">
      <li
        class="booking__para--orders--list"
        v-for="(food, index) in $store.state.chosenFood"
        :key="food.id"
      >
        <div class="booking__para--variables">
          <p class="booking__para">{{ food }}</p>
        </div>
        <div class="booking__change">
          <p class="booking__para">
            {{ $store.state.chosenFoodPrice[index] }}kr
          </p>
        </div>
      </li>
      <div class="booking__change minimum__width margin__top displayflex">
        <RouterLink class="nav__link" to="/ordering">
          <p class="booking__para border__bottom textdecor media__border--fix">
            Lägg Till/Ta Bort
          </p>
        </RouterLink>

        <p v-if="$store.state.count" class="booking__para">
          Quiz Rabatt: {{ $store.state.count }}kr
        </p>
        <p v-else class="booking__para">Quiz Rabatt: 0kr</p>
      </div>
      <p class="booking__para textalignleft">Total: {{ priceCalc }}kr</p>
    </div>
  </div>
  <h1 class="booking__title">Går våran quiz och få rabatt redan idag!</h1>

  <RouterLink class="nav__link" to="/Quiz">
    <div class="button">
      <h1 class="booking__title button__title">quiza och få rabatt</h1>
    </div>
  </RouterLink>
  <div
    class="booking__container height__third--media height__third margin__bot--none"
  >
    <h1 class="booking__title booking__title--media">personuppgifter:</h1>
    <div class="booking__para--container flexdirection">
      <div class="input__field--container">
        <p class="booking__para margin__fix">Förnamn:</p>

        <input
          v-model="Förnamn"
          type="text"
          required
          placeholder="Förnamn"
          name="Förnamn"
          class="cred__input"
          errorFörnamn
          :style="{ boxShadow: v$.Förnamn.$error ? shadow : null }"
        />

        <p class="booking__para margin__fix margin__fix--two">Efternamn:</p>

        <input
          v-model="Efternamn"
          type="text"
          required
          placeholder="Efternamn"
          name="Efternamn"
          class="cred__input length__fix--two"
          :style="{ boxShadow: v$.Efternamn.$error ? shadow : null }"
        />
      </div>
      <div class="input__field--container pos__fix">
        <p class="booking__para margin__fix pos__fix--two">E-Mail:</p>

        <input
          v-model="Email"
          type="email"
          required
          placeholder="E-mail"
          :style="{ boxShadow: v$.Email.$error ? shadow : null }"
          name="E-Mail"
          class="cred__input length__fix margin__fix--three"
        />

        <p class="booking__para margin__fix margin__fix--two">Tel:</p>

        <input
          v-model="Tel"
          type="tel"
          required
          placeholder="Tel"
          name="Tel"
          class="cred__input"
          :style="{ boxShadow: v$.Tel.$error ? shadow : null }"
        />
      </div>
    </div>
    <h1 class="booking__title position__fix--five booking__title--media">
      Betalningsmetod:
    </h1>
  </div>

  <div class="booking__container height__third margin__top--none color__fix">
    <div class="booking__container--checkboxes">
      <div class="checkbox">
        <div class="checkbox__container">
          <input type="radio" name="methodpay" checked />
          <div class="checkbox__paras">
            <p class="checkbox__para para__top">swish</p>
            <p class="checkbox__para para__bot">Betala direkt</p>
          </div>
        </div>
        <div class="checkbox__method">
          <p class="method__para">0Kr</p>
          <img
            src="../assets/pics/swishlogo.png"
            class="image size__fix"
            alt=""
          />
        </div>
      </div>

      <div class="checkbox">
        <div class="checkbox__container">
          <input type="radio" name="methodpay" />
          <div class="checkbox__paras">
            <p class="checkbox__para para__top">BANKÖVERFÖRING</p>
            <p class="checkbox__para para__bot">Betala direkt</p>
          </div>
        </div>
        <div class="checkbox__method">
          <p class="method__para">0Kr</p>
          <img
            src="../assets/pics/bankid logo.svg"
            class="image size__fix"
            alt=""
          />
        </div>
      </div>
      <div class="checkbox">
        <div class="checkbox__container">
          <input type="radio" name="methodpay" />
          <div class="checkbox__paras">
            <p class="checkbox__para para__top">Klarna Faktura</p>
            <p class="checkbox__para para__bot">Ät nu - betala sen</p>
          </div>
        </div>
        <div class="checkbox__method">
          <p class="method__para">29Kr</p>
          <img src="../assets/pics/klarnalogo.jpg" class="image" alt="" />
        </div>
      </div>
    </div>
  </div>
  <button
    @click="submitForm"
    class="button width__fix button__margin booking__title button__title"
  >
    <RouterLink class="landing-link" to="/ThanksForOrdering">Betala</RouterLink>
  </button>
  <RouterView />
</template>
<style>
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

.displayflex {
  display: flex;
  justify-content: space-between;
}
.margin__top {
  margin-top: 15px;
}
.minimum__width {
  width: 100%;
}
.height__auto {
  height: auto !important;
}
.flexdirection {
  flex-direction: column;
}
h1,
p {
  cursor: default;
}
.textdecor {
  cursor: pointer;
}
.booking__container {
  border-radius: 10px;
  margin-bottom: 47px;
  width: 100%;
  max-width: 674px;
  height: 115px;
  background-color: #1c1c1c;
  padding-left: 32px;
  padding-top: 20px;
  padding-right: 32px;
}
.booking__title {
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 25px;

  font-family: "Amiko";
  font-style: normal;
  letter-spacing: 1px;
  line-height: 27px;
}

.landing-link {
  text-decoration: none;
  color: #fff;
}

.booking__para--container {
  width: 100%;
  max-width: 611px;
  height: 48px;
  display: flex;
  justify-content: space-between;
}
.booking__para {
  margin-top: 10px;
  color: white;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  font-family: "Amiko";
  font-style: normal;
}
.booking__para--variables {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.v-if,
.v-else {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.border__bottom {
  border-bottom: 2px solid white;
}
.minimum__height {
  min-height: 275px;
  height: auto !important;
  padding-bottom: 20px;
}
.minimum__height--two {
  height: auto !important;
}
.booking__para--orders--list {
  display: flex;
  width: 100%;
  max-width: 611px;
  justify-content: space-between;
  height: 25px;
}
.button {
  width: 266px;
  height: 54px;
  background-color: #221109;
  border-radius: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ad8e6d;
  margin-top: 20px;
  cursor: pointer;
}
.button__title {
  font-size: 18px;
  margin-bottom: 0;
  cursor: pointer;
}
.height__third {
  margin-top: 127px;
  height: 233px;
}
.cred__input {
  width: 100%;
  max-width: 185px;
  height: 25px;
  background: #d9d9d9;
  border-radius: 5px;
  margin-left: 5px;
  border: 2px solid transparent;
  transition: all 300ms ease;
}

.margin__fix {
  margin-top: 1rem;
}
.margin__fix--two {
  margin-left: 15px;
}
.input__field--container {
  display: flex;
  align-items: center;
}

.length__fix {
  width: 100%;
  max-width: 281px;
}
.pos__fix {
  position: relative;
  top: -15px;
}
.margin__fix--three {
  margin-left: 26px;
}
.length__fix--two {
  max-width: 215px;
}
.position__fix--five {
  position: relative;
  top: 80px;
}
.margin__top--none {
  margin-top: 0px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}
.margin__bot--none {
  margin-bottom: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.color__fix {
  background: rgba(28, 28, 28, 0.7);
}
.booking__container--checkboxes {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
.checkbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
}
.checkbox__paras {
  display: flex;
  flex-direction: column;
  margin-left: 21px;
}
.checkbox__para {
  margin: 0 !important;
  color: white;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;

  font-style: normal;
  height: 15px;
}
.para__top {
  font-weight: normal;
  font-size: 18px;
  text-transform: uppercase;
}
.para__bot {
  font-size: 12px;
  margin-top: 5px !important;
}
.checkbox__container {
  display: flex;
}
.image {
  width: 40px;
  height: 40px;
}
.checkbox__method {
  display: flex;
  align-items: center;
}
.method__para {
  color: white;
  margin-right: 10px;
  font-weight: 400;

  letter-spacing: 1px;
  font-style: normal;
}
.width__fix {
  width: 130px;
}
.button__margin {
  margin-bottom: 170px;
}
.nav__link {
  text-decoration: none;
}
.textalignleft {
  text-align: end;
}
@media (max-width: 710px) {
  .input__field--container {
    flex-direction: column;
    align-items: center;
  }
  .booking__title--media {
    text-align: center;
  }
  .height__third--media {
    height: 500px;
    max-width: 400px;
  }
  .height__third {
    max-width: 400px;
  }
  .booking__para--container {
    height: auto;
  }
  .pos__fix {
    top: 0;
  }
  .length__fix--two {
    width: 200px;
  }
  .cred__input {
    max-width: 200px;
  }
  .margin__fix--three {
    margin-left: 5px;
  }
}
@media (max-width: 650px) {
  .booking__para--container {
    flex-direction: column;
  }
  .booking__para--variables {
    width: 100%;
  }
  .v-else,
  .v-if {
    flex-direction: column;
  }

  .height__fix--media {
    height: 300px;
  }
  .border__bottom {
    width: 100%;
  }
  .border__media {
    width: 55px;
  }
  .media__border--fix {
    width: 150px;
  }
}
@media (max-width: 500px) {
  .booking__change {
    flex-direction: column;
  }
  .booking__para {
    text-align: left;
  }
}
@media (max-width: 573px) {
  .booking__title {
    text-align: center;
  }
}
@media (max-width: 400px) {
  .para__top {
    font-size: 15px;
  }
  .checkbox__paras {
    margin-left: 8px;
  }
}
</style>
