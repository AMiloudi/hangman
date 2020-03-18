<template>
  <div>
    <div class="col12" v-if="showLoserMessage">
      <h1>Haha..! I got you hanged..</h1>
    </div>

    <div class="col12" v-if="showWinnerMessage">
      <h1>You magnificent bastard..</h1>
    </div>

    <svg height="300" width="400">
      <g>
        <g>
          <!--head -->
          <circle
            v-if="pickedLetters.length >= 5"
            cx="200"
            cy="80"
            r="20"
            stroke="black"
            stroke-width="4"
            fill="white"
          />
          <!--dead eyes -->
          <g v-if="showLoserMessage">
            <line
              class="xEyes"
              x1="190"
              y1="78"
              x2="196"
              y2="84"
              v-if="pickedLetters.length >= 5"
            />
            <line
              class="xEyes"
              x1="204"
              y1="78"
              x2="210"
              y2="84"
              v-if="pickedLetters.length >= 5"
            />
            <line
              class="xEyes"
              x1="190"
              y1="84"
              x2="196"
              y2="78"
              v-if="pickedLetters.length >= 5"
            />
            <line
              class="xEyes"
              x1="204"
              y1="84"
              x2="210"
              y2="78"
              v-if="pickedLetters.length >= 5"
            />
          </g>
          <!--normal eyes -->
          <g v-else>
            <circle cx="193" cy="80" r="4" v-if="pickedLetters.length >= 5" />
            <circle cx="207" cy="80" r="4" v-if="pickedLetters.length >= 5" />
          </g>
        </g>
        <!--body -->
        <line
          x1="200"
          y1="100"
          x2="200"
          y2="150"
          v-if="pickedLetters.length >= 6"
        />
        <!--left arm-->
        <line
          x1="200"
          y1="120"
          x2="170"
          y2="140"
          v-if="pickedLetters.length >= 7"
        />
        <!--right arm-->
        <line
          x1="200"
          y1="120"
          x2="230"
          y2="140"
          v-if="pickedLetters.length >= 8"
        />
        <!--left leg-->
        <line
          x1="200"
          y1="150"
          x2="180"
          y2="190"
          v-if="pickedLetters.length >= 9"
        />
        <!--right leg-->
        <line
          x1="200"
          y1="150"
          x2="220"
          y2="190"
          v-if="pickedLetters.length >= 10"
        />
      </g>
      <!--ground-->
      <line
        v-if="pickedLetters.length >= 1"
        x1="10"
        y1="250"
        x2="500"
        y2="250"
      />
      <!--vertical beam-->
      <line
        v-if="pickedLetters.length >= 2"
        x1="100"
        y1="250"
        x2="100"
        y2="20"
      />
      <!--horizontal beam-->
      <line
        v-if="pickedLetters.length >= 3"
        x1="100"
        y1="20"
        x2="200"
        y2="20"
      />
      <!--rope-->
      <line
        v-if="pickedLetters.length >= 4"
        x1="200"
        y1="20"
        x2="200"
        y2="60"
      />
    </svg>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "HangmanFigure",
  computed: {
    ...mapState({
      showWinnerMessage: state => state.showWinnerMessage,
      showLoserMessage: state => state.showLoserMessage,
      pickedLetters: state => state.pickedLetters
    })
  },
  methods: {}
};
</script>

<style>
svg {
  margin: 0 auto;
}
.col12 {
  width: 100%;
}

line {
  stroke: black;
  stroke-width: 4;
}

.xEyes {
  stroke: #bd193a;
}
</style>
