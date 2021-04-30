import generateTonic from "../global/tonic.js";
import Intervals from "./intervals.js";
import Sfx from "../global/sfx.js";
import playQuiz from "./play.js";

var AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

const app = new Vue({
  el: "#app",
  data() {
    return {
      correctAnswer: true,
      intervalsObj: null,
      mysteryInterval: null,
      numberCorrect: 0,
      numberWrong: 0,
      sfx: null,
    }
  },
  methods: {
    newQuiz() {
      this.correctAnswer = false;
      let tonic = generateTonic(220, 11);
      this.intervalsObj = new Intervals(context, tonic);
      this.sfx = new Sfx(context, tonic);
      this.mysteryInterval = playQuiz(this.intervalsObj);
    },
    repeatQuiz() {
      playQuiz(this.intervalsObj, this.mysteryInterval)
    },
    checkAnswer(interval) {
      if (interval !== this.mysteryInterval && !this.correctAnswer) {
        this.numberWrong += 1;
        this.sfx.wrong();
        return
      }

      if (interval == this.mysteryInterval && !this.correctAnswer) {
        this.correctAnswer = true;
        this.numberCorrect += 1;
        this.sfx.correct()
      }
    },
    backHome() {
      window.location.href = "./"
    }
  }
})