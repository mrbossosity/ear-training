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
      mysteryProgression: "Which chord is the tonic?",
      mysteryTonicPosition: null,
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
      [this.mysteryProgression, this.mysteryTonicPosition] = playQuiz(this.scale);
    },
    repeatQuiz() {
      playQuiz(this.scale, this.mysteryProgression)
    },
    playV7() {
      this.scale.playV7Chord(0)
    },
    checkAnswer(tonicPosition) {
      if (tonicPosition !== this.mysteryTonicPosition && !this.correctAnswer) {
        this.numberWrong += 1;
        this.sfx.wrong();
        return
      }

      if (tonicPosition == this.mysteryTonicPosition && !this.correctAnswer) {
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