import generateTonic from "../global/tonic.js";
import MajorScale from "../global/scale.js";
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
      iiCheck: {
          checked: false,
          chord: "ii"
      },
      iiiCheck: {
        checked: false,
        chord: "iii"
      },
      ivCheck: {
        checked: true,
        chord: "IV"
      },
      vCheck: {
        checked: true,
        chord: "V"
      },
      viCheck: {
        checked: true,
        chord: "vi"
      },
      viiCheck: {
        checked: false,
        chord: "vii"
      },
      mysteryChord: null,
      numberCorrect: 0,
      numberWrong: 0,
      sfx: null,
    }
  },
  methods: {
    newQuiz() {
      this.correctAnswer = false;
      let tonic = generateTonic(261.6256, 11);
      this.scale = new MajorScale(context, tonic);
      this.sfx = new Sfx(context, tonic);
      let all = [this.iiCheck, this.iiiCheck, this.ivCheck, this.vCheck, this.viCheck, this.viiCheck];
      let checked = all.filter(chord => chord.checked);
      this.mysteryChord = playQuiz(this.scale, null, checked);
    },
    repeatQuiz() {
      playQuiz(this.scale, this.mysteryChord)
    },
    repeatIChord() {
      this.scale.playIChord(0)
    },
    checkAnswer(chord) {
      if (chord !== this.mysteryChord && !this.correctAnswer) {
        this.numberWrong += 1;
        this.sfx.wrong();
        return
      }

      if (chord == this.mysteryChord && !this.correctAnswer) {
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