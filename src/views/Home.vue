<template>
  <div class="home">
    <h1>Hangman</h1>
    <div v-if="!gameIsStarted">
      <p>
        I will pick a word, you'll never guess!<br />
        Prepare to be hanged!
      </p>
      <button class="button" @click="chooseWord">
        Start game
      </button>
    </div>
    <HangmanFigure v-if="gameIsStarted" />
    <PlayerInput v-if="gameIsStarted" />
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerInput from "@/components/PlayerInput.vue";
import HangmanFigure from "@/components/HangmanFigure.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    PlayerInput,
    HangmanFigure
  },
  computed: {
    ...mapState({
      pickedWord: state => state.pickedWord
    }),
    gameIsStarted() {
      return this.pickedWord !== "";
    }
  },
  methods: {
    chooseWord: function() {
      let wordArray = [
        "Wizard",
        "Crystal",
        "Centaur",
        "Fairydust",
        "Kingdom",
        "Dwarves",
        "Chimera"
      ];
      let shuffledArray = this.shuffleArray(wordArray);
      this.$store.commit("setPickedWord", shuffledArray[0]);
    },
    shuffleArray: function(array) {
      return array
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
    }
  }
};
</script>

<style>
.body {
  position: relative;
  height: 100vh;
  margin: 0;
}
.home {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: left;
  margin-left: 20%;
}
@media only screen and (max-width: 780px) {
  .home {
    margin-left: 2%;
  }
}
@media only screen and (max-width: 540px) {
  .home {
    margin-left: 0;
  }
}
.button {
  background-color: white;
  border: 3px solid #bd193a;
  color: #bd193a;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}
.button:hover {
  background-color: #bd193a;
  color: white;
}
</style>
