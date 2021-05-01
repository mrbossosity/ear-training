import generateTonic from "../global/tonic.js";
import Qualities from "./qualities.js";
import Sfx from "../global/sfx.js";
import playQuiz from "./play.js";

var AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

const app = new Vue({
  el: "#app",
  data() {
    return {
      correctAnswer: true,
      qualities: null,
      majCheck: {
        checked: true,
        quality: "maj"
      },
      minCheck: {
        checked: true,
        quality: "min"
      },
      augCheck: {
        checked: false,
        quality: "aug"
      },
      dimCheck: {
        checked: false,
        quality: "dim"
      },
      sus2Check: {
        checked: false,
        quality: "sus2"
      },
      sus4Check: {
        checked: false,
        quality: "sus4"
      },
      mysteryQuality: null,
      numberCorrect: 0,
      numberWrong: 0,
      sfx: null,
    }
  },
  methods: {
    newQuiz() {
      this.correctAnswer = false;
      let tonic = generateTonic(261.6256, 11);
      this.qualities = new Qualities(context, tonic);
      this.sfx = new Sfx(context, tonic);
      let all = [this.majCheck, this.minCheck, this.augCheck, this.dimCheck, this.sus2Check, this.sus4Check];
      let checked = all.filter(quality => quality.checked)
      this.mysteryQuality = playQuiz(this.qualities, null, checked);
    },
    repeatQuiz() {
      playQuiz(this.qualities, this.mysteryQuality)
    },
    playMaj() {
      this.qualities.playMaj(0);
    },
    checkAnswer(quality) {
      if (quality !== this.mysteryQuality && !this.correctAnswer) {
        this.numberWrong += 1;
        this.sfx.wrong();
        return
      }

      if (quality == this.mysteryQuality && !this.correctAnswer) {
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