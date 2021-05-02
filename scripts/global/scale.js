import playPitch from "./pitch.js"

export default class MajorScale {
  constructor(context, tonic) {
    this.context = context;
    this.one = tonic;
    this.two = this.one * Math.pow(Math.pow(2, (1 / 12)), 2);
    this.three = this.one * Math.pow(Math.pow(2, (1 / 12)), 4);
    this.hiFour = this.one * Math.pow(Math.pow(2, (1 / 12)), 5);
    this.loFour = this.one / Math.pow(Math.pow(2, (1 / 12)), 7);
    this.hiFive = this.one * Math.pow(Math.pow(2, (1 / 12)), 7);
    this.loFive = this.one / Math.pow(Math.pow(2, (1 / 12)), 5);
    this.hiSix = this.one * Math.pow(Math.pow(2, (1 / 12)), 9);
    this.loSix = this.one / Math.pow(Math.pow(2, (1 / 12)), 3);
    this.hiSeven = this.one * Math.pow(Math.pow(2, (1 / 12)), 11);
    this.loSeven = this.one / Math.pow(2, (1 / 12));
  }
  tonicize() {
    playPitch(this.context, this.one, 0);
    playPitch(this.context, this.loSeven, 0.6);
    playPitch(this.context, this.one, 1.2);
    playPitch(this.context, this.hiFive, 1.8);
    this.playIChord(2.4);
  }
  playIChord(schedule) {
    playPitch(this.context, this.one, schedule);
    playPitch(this.context, this.three, schedule + 0.03, 1.6, 0.1);
    playPitch(this.context, this.hiFive, schedule + 0.06, 1.6, 0.1);
  }
  playiiChord(schedule) {
    playPitch(this.context, this.two, schedule);
    playPitch(this.context, this.hiFour, schedule + 0.03, 1.6, 0.1);
    playPitch(this.context, this.hiSix, schedule + 0.06, 1.6, 0.1);
  }
  playiiiChord(schedule) {
    playPitch(this.context, this.three, schedule);
    playPitch(this.context, this.hiFive, schedule + 0.03, 1.6, 0.1);
    playPitch(this.context, this.hiSeven, schedule + 0.06, 1.6, 0.1);
  }
  playIVChord(schedule) {
    playPitch(this.context, this.loFour, schedule);
    playPitch(this.context, this.loSix, schedule + 0.03, 1.6, 0.1);
    playPitch(this.context, this.one, schedule + 0.06, 1.6, 0.1);
  }
  playVChord(schedule) {
    playPitch(this.context, this.loFive, schedule);
    playPitch(this.context, this.loSeven, schedule + 0.03, 1.6, 0.1);
    playPitch(this.context, this.two, schedule + 0.06, 1.6, 0.1);
  }
  playV7Chord(schedule) {
    playPitch(this.context, this.loFive, schedule);
    playPitch(this.context, this.loSeven, schedule + 0.03, 1.6, 0.1);
    playPitch(this.context, this.two, schedule + 0.06, 1.6, 0.1);
    playPitch(this.context, this.hiFour, schedule + 0.09, 1.6, 0.1);
  }
  playviChord(schedule) {
    playPitch(this.context, this.loSix, schedule);
    playPitch(this.context, this.one, schedule + 0.03, 1.6, 0.1);
    playPitch(this.context, this.three, schedule + 0.06, 1.6, 0.1);
  }
  playviiChord(schedule) {
    playPitch(this.context, this.loSeven, schedule);
    playPitch(this.context, this.two, schedule + 0.03, 1.6, 0.1);
    playPitch(this.context, this.hiFour, schedule + 0.06, 1.6, 0.1);
  }
}