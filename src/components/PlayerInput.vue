<template>
  <div>
    <div class="col12">
      <span v-for="(char, index) in charArray" :key="index" class="dashes">{{
        pickedLetters.includes(char) ? char : "_"
      }}</span>
    </div>
    <div class="col12 clear">
      <button
        v-if="this.showLoserMessage || this.showWinnerMessage"
        class="button"
        @click="resetState"
      >
        Stop game
      </button>
    </div>
    <div
      class="col12 clear"
      v-if="!(this.showLoserMessage || this.showWinnerMessage)"
    >
      <div class="col12">
        <button
          :style="pickedLetters.includes(letter) ? 'visibility: hidden' : ''"
          v-for="(letter, index) in alfabetArray.slice(0, 13)"
          :key="index"
          class="letter-button"
          @click="addToPickedLetters(letter)"
        >
          {{ letter }}
        </button>
      </div>
      <div class="col12">
        <button
          :style="pickedLetters.includes(letter) ? 'visibility: hidden' : ''"
          v-for="(letter, index) in alfabetArray.slice(13, 26)"
          :key="index"
          class="letter-button"
          @click="addToPickedLetters(letter)"
        >
          {{ letter }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PlayerInput",
  computed: {
    ...mapState({
      showWinnerMessage: state => state.showWinnerMessage,
      showLoserMessage: state => state.showLoserMessage,
      charArray: state => state.charArray,
      pickedLetters: state => state.pickedLetters,
      alfabetArray: state => state.alfabetArray,
      pickedWord: state => state.pickedWord
    })
  },
  created() {
    let array = [];
    array = this.pickedWord.toUpperCase().split("");
    this.$store.commit("setCharArray", array);
  },
  methods: {
    addToPickedLetters(letter) {
      this.$store.commit("addLetterToPickedLetters", letter);
      this.checkWinnerOrLoser();
    },
    checkWinnerOrLoser() {
      if (this.charArray.every(c => this.pickedLetters.includes(c))) {
        this.$store.state.showWinnerMessage = true;
      } else if (this.pickedLetters.length > 9) {
        this.$store.state.showLoserMessage = true;
      }
    },
    resetState() {
      this.$store.commit("resetState");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.col-4 {
  width: 33.33%;
}
.col-8 {
  width: 66.66%;
}
.col-12 {
  width: 100%;
}
.clear {
  clear: both;
}
.letter-button {
  background-color: #bd193a;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

.dashes {
  float: left;
  margin-right: 0.5em;
  color: #bd193a;
  font-size: 32px;
}
</style>
