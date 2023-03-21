<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div v-for="(quiz, index) in quizes" :key="index" id="col" class="col">
    <div v-show="index === questionIndex">
      <div id="card" class="card" style="width: 10">
        <img src="" class="card-img-top" />
        <div id="quiztext" class="card-body">
          <h1>Fråga {{ question }}</h1>
          <h5 class="card-title">{{ quiz.fråga }}</h5>
          <a
            a
            id="button1"
            class="btn btn-primary"
            :class="{ a: !clicked }"
            @click="
              model(quiz.svar);
              clicked = !clicked;
            "
          >
            {{ quiz.svar }}</a
          >

          <a
            id="button2"
            :class="{ a: !clicked1 }"
            class="btn"
            @click="
              model(quiz.felsvar1);
              clicked1 = !clicked1;
            "
            >{{ quiz.felsvar1 }}</a
          >
          <a
            id="button3"
            :class="{ a: !clicked2 }"
            class="btn"
            @click="
              model(quiz.felsvar2);
              clicked2 = !clicked2;
            "
            >{{ quiz.felsvar2 }}</a
          >
          <a
            id="button4"
            :class="{ a: !clicked3 }"
            class="btn"
            @click="
              model(quiz.felsvar3);
              clicked3 = !clicked3;
            "
            >{{ quiz.felsvar3 }}</a
          >
          <h4
            class="btn"
            v-on:click="
              next();
              pong(quiz.svar === selected);
            "
          >
            Nästa
          </h4>
          <h6 class="btn" v-if="questionIndex > 0" v-on:click="prev()">prev</h6>
        </div>
      </div>
    </div>
  </div>
  <div id="col">
    <div id="card" v-show="questionIndex === 5" class="card" style="width: 18">
      <div id="quiztext" class="card-body">
        <h7 id="card-title">GRATTIS!</h7>
        <p id="text" class="card-text">
          Du har svarat rätt på {{ value }} frågor! <br />
          Vi har nu dragit av {{ count }} kr av din beställning
        </p>
        <a id="route" :class="{ a: !clicked }" class="btn">
          <RouterLink
            class="nav-link"
            to="/checkout"
            @Click="$store.commit('updateCount', this.count)"
            >TILLBAKA TILL KASSAN</RouterLink
          >
        </a>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      count: 0,
      quizes: [],
      questionIndex: 0,
      value: 0,
      question: 1,
      selected: null,
      clicked: false,
      clicked1: false,
      clicked2: false,
      clicked3: false,
    };
  },

  mounted() {
    this.fetchData();
    console.log(this.value);
  },
  methods: {
    async fetchData() {
      const response = await axios.get("frågesport.json");
      const result = await response.data;
      this.quizes = result;
    },

    model(val) {
      this.selected = val;
      console.log(this.selected);
    },

    pong(val) {
      if (val === true) {
        this.value++;
        this.count = this.value * 20;
      }
      console.log(this.value);
      console.log(this.count);
    },

    next: function () {
      this.questionIndex++;
      this.clicked = false;
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.question++;
    },

    prev: function () {
      this.questionIndex--;
      this.question--;
    },
  },
};
</script>

<style>
#card-title {
  grid-area: title;
  justify-self: center;
  align-self: center;
  color: white;
  font-size: 2.5rem;
}
#text {
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 1.125rem;
}
#route {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 0.625rem;
  background-color: #221109;
}
#quiztext {
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "title title";
}
#quiztext > h5 {
  grid-area: title;
  justify-self: center;
  align-self: center;
  color: white;
  font-size: 1.25;
}
#quiztext > h4 {
  font-size: 1.3rem;
  color: #fff;
  grid-column-start: 2;
  grid-row-start: 4;
  align-self: self-end;
  margin-left: auto;
}
#quiztext > a {
  justify-self: center;
  align-self: center;
  position: relative;
  width: 15rem;
  height: 3rem;
  color: #fff;
  background-color: #492717;
  border: 2px solid #ad8e6d;
  border-radius: 1.8rem;
  font-size: 1.25rem;
}
#quiztext > .a {
  justify-self: center;
  align-self: center;
  position: relative;
  width: 15rem;
  height: 3rem;
  color: #fff;
  background-color: #221109;
  border: 2px solid #ad8e6d;
  border-radius: 1.8rem;
  font-size: 1.25rem;
}
#quiztext > a:hover {
  background-color: #492717;
}
#quiztext > a:active {
  background-color: #6d3d27;
}
#quiztext > h6 {
  color: #fff;
  font-size: 1.37rem;
  margin-right: auto;
}
#button1 {
  position: relative;
  left: 3.1rem;
  top: 0.625rem;
}
#button2 {
  position: relative;
  right: 3.1rem;
  top: 0.625rem;
}
#button3 {
  position: relative;
  left: 3.1rem;
  bottom: 0.625rem;
}
#button4 {
  position: relative;
  right: 3.1rem;
  bottom: 0.625rem;
}
#quiztext > h1 {
  grid-column-start: 1;
  grid-row-start: 1;
  font-size: 1.125rem;
}
</style>
