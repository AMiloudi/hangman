import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pickedWord: "",
    showLoserMessage: false,
    showWinnerMessage: false,
    charArray: [],
    pickedLetters: [],
    alfabetArray: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ]
  },
  mutations: {
    setCharArray(state, payload) {
      state.charArray = payload;
    },
    addLetterToPickedLetters(state, payload) {
      state.pickedLetters.push(payload);
    },
    setPickedWord(state, payload) {
      state.pickedWord = payload;
    },
    resetState(state) {
      state.pickedWord = "";
      state.showLoserMessage = false;
      state.showWinnerMessage = false;
      state.charArray = [];
      state.pickedLetters = [];
    }
  },
  actions: {},
  modules: {}
});
