import generateTonic from "../global/tonic.js";
import MajorScale from "../global/scale.js";
import { progressions } from "./progressions.js"
import Sfx from "../global/sfx.js";
import playQuiz from "./play.js";

var AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

const app = new Vue({
  el: "#app",
  data() {
    return {
      correctAnswer: true,
      correctAnswer1: false,
      correctAnswer2: false,
      scale: null,
      mysteryMotion: "Identify these common chord motions.",
      mysteryChordOne: null,
      mysteryChordTwo: null,
      numberCorrect: 0,
      numberWrong: 0,
      sfx: null,
    }
  },
  methods: {
    newQuiz() {
      this.correctAnswer = false;
      this.correctAnswer1 = false;
      this.correctAnswer2 = false;
      let tonic = generateTonic(261.6256, 11);
      this.scale = new MajorScale(context, tonic);
      this.sfx = new Sfx(context, tonic);
      [this.mysteryMotion, this.mysteryChordOne, this.mysteryChordTwo] = playQuiz(this.scale, null, progressions);
    },
    repeatQuiz() {
      playQuiz(this.scale, [this.mysteryChordOne, this.mysteryChordTwo])
    },
    repeatIChord() {
      this.scale.playIChord(0)
    },
    checkBothAnswers() {
      if (this.correctAnswer1 && this.correctAnswer2) {
        this.correctAnswer = true;
        this.sfx.correct()
      }
    },
    checkAnswerOne(chord) {
      if (chord !== this.mysteryChordOne && !this.correctAnswer1) {
        this.numberWrong += 1;
        this.sfx.wrongAlt();
        return
      }

      if (chord == this.mysteryChordOne && !this.correctAnswer1) {
        this.correctAnswer1 = true;
        this.numberCorrect += 1;
        this.sfx.correctAlt();
        this.checkBothAnswers()
      }
    },
    checkAnswerTwo(chord) {
      if (chord !== this.mysteryChordTwo && !this.correctAnswer2) {
        this.numberWrong += 1;
        this.sfx.wrongAlt();
        return
      }

      if (chord == this.mysteryChordTwo && !this.correctAnswer2) {
        this.correctAnswer2 = true;
        this.numberCorrect += 1;
        this.sfx.correctAlt();
        this.checkBothAnswers()
      }
    },
    backHome() {
      window.location.href = "./"
    }
  }
})