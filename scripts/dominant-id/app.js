import generateTonic from "../global/tonic.js";
import Scale from "../global/scale.js";
import Sfx from "../global/sfx.js";
import playQuiz from "./play.js";

var AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

const app = new Vue({
  el: "#app",
  data() {
    return {
      correctAnswer: true,
      scale: null,
      mysteryProgression: "Which chord is the dominant (V or vii)?",
      mysteryDomPosition: null,
      numberCorrect: 0,
      numberWrong: 0,
      sfx: null,
    }
  },
  methods: {
    newQuiz() {
      this.correctAnswer = false;
      let tonic = generateTonic(233.0819, 11);
      this.scale = new Scale(context, tonic);
      this.sfx = new Sfx(context, tonic);
      [this.mysteryProgression, this.mysteryDomPosition] = playQuiz(this.scale);
    },
    repeatQuiz() {
      playQuiz(this.scale, this.mysteryProgression)
    },
    playI() {
      this.scale.playIChord(0)
    },
    checkAnswer(domPosition) {
      if (domPosition !== this.mysteryDomPosition && !this.correctAnswer) {
        this.numberWrong += 1;
        this.sfx.wrong();
        return
      }

      if (domPosition == this.mysteryDomPosition && !this.correctAnswer) {
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