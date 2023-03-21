<script setup>
import QuizComp from "../components/QuizComp.vue";
</script>

<template>
  <div id="backg">
    <div id="Quizdefault">
      <h2>Quiz</h2>
      <h3>
        Svara rätt på alla fem frågor och vinn upp till 100kr rabatt på din
        beställning.
      </h3>
    </div>
    <div id="cardquiz">
      <QuizComp> </QuizComp>
    </div>
  </div>
</template>

<script></script>

<style>
#backg {
  background: url(../assets/pics/quiz_page.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
#card {
  background: #1c1c1c;
  width: 744px;
  height: 449px;
  border: 2px solid #6e6e6e;
  border-radius: 26px;
}
#cardquiz {
  margin-top: 20vh;
  margin-bottom: 10vh;
  display: grid;
}
#col {
  margin: auto;
}
#Quizdefault h2 {
  font-family: amiko;
  font-weight: 400;
  font-size: 35px;
  color: white;
  position: relative;
  text-align: center;
  top: 50px;
}
#Quizdefault h3 {
  font-family: amiko;
  font-weight: 400;
  font-size: 18px;
  color: white;
  position: relative;
  top: 50px;
  text-align: center;
}
@media screen and (max-width: 747px) {
  #card {
    width: auto;
    height: 400px;
  }
  #Quizdefault h2 {
    font-family: amiko;
    font-weight: 400;
    font-size: 35px;
    color: white;
    position: relative;
    text-align: center;
    top: 50px;
  }
  #Quizdefault h3 {
    font-family: amiko;
    font-weight: 400;
    font-size: 18px;
    color: white;
    position: relative;
    top: 50px;
    text-align: center;
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
    border-radius: 30px;
    font-size: 19px;
  }
  #quiztext > .a {
    justify-content: center;
    align-self: center;
    position: relative;
    width: 15rem;
    height: 3rem;
    color: #fff;
    background-color: #221109;
    border: 2px solid #ad8e6d;
    border-radius: 30px;
    font-size: 19px;
  }
  #quiztext > a:hover {
    background-color: #492717;
  }
  #quiztext > a:active {
    background-color: #6d3d27;
  }
  #button1 {
    position: relative;
    left: 1px;
    top: 10px;
  }
  #button2 {
    position: relative;
    right: 1px;
    top: 10px;
  }
  #button3 {
    position: relative;
    left: 1px;
    bottom: 10px;
  }
  #button4 {
    position: relative;
    right: 1px;
    bottom: 10px;
  }
  #quiztext > h5 {
    grid-area: title;
    justify-self: center;
    align-self: center;
    color: white;
    font-size: 20px;
    position: relative;
    top: 10px;
  }
}
@media screen and (max-width: 520px) {
  #backg {
    background: url(../assets/pics/quiz_page.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 200vh;
  }
  #card {
    width: auto;
    height: 700px;
  }
  #quiztext {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }
  #button1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    position: relative;
    top: 0px;
  }
  #button2 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    position: relative;
    top: 0px;
  }
  #button3 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
    position: relative;
    bottom: 0px;
  }
  #button4 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
    position: relative;
    bottom: 0px;
  }
  #quiztext > h5 {
    grid-area: title;
    justify-self: center;
    align-items: center;
    color: white;
    font-size: 20px;
    position: relative;
    top: 30px;
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
    border-radius: 30px;
    font-size: 19px;
  }
  #quiztext > .a {
    justify-content: center;
    align-self: center;
    position: relative;
    width: 15rem;
    height: 3rem;
    color: #fff;
    background-color: #221109;
    border: 2px solid #ad8e6d;
    border-radius: 30px;
    font-size: 19px;
  }
  #quiztext > h4 {
    grid-row-start: 6;
    position: relative;
    bottom: 15px;
  }
  #quiztext > h6 {
    color: #fff;
    font-size: 22px;
    text-align: center;
    margin-right: auto;
    margin-top: auto;
    position: relative;
    bottom: 15px;
  }
}
</style>
