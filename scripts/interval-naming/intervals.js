import playPitch from "../global/pitch.js"

export default class Intervals {
  constructor(context, tonic) {
    this.context = context;
    this.one = tonic;
    this.b2 = this.one * Math.pow(Math.pow(2, (1 / 12)), 1);
    this.two = this.one * Math.pow(Math.pow(2, (1 / 12)), 2);
    this.b3 = this.one * Math.pow(Math.pow(2, (1 / 12)), 3);
    this.three = this.one * Math.pow(Math.pow(2, (1 / 12)), 4);
    this.four = this.one * Math.pow(Math.pow(2, (1 / 12)), 5);
    this.b5 = this.one * Math.pow(Math.pow(2, (1 / 12)), 6);
    this.five = this.one * Math.pow(Math.pow(2, (1 / 12)), 7);
    this.b6 = this.one * Math.pow(Math.pow(2, (1 / 12)), 8);
    this.six = this.one * Math.pow(Math.pow(2, (1 / 12)), 9);
    this.b7 = this.one * Math.pow(Math.pow(2, (1 / 12)), 10);
    this.seven = this.one * Math.pow(Math.pow(2, (1 / 12)), 11);
    this.eight = this.one * Math.pow(Math.pow(2, (1 / 12)), 12);
  }
  playMin2() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.b2, 0.75, 2.20);
  }
  playMaj2() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.two, 0.75, 2.20);
  }
  playMin3() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.b3, 0.75, 2.20);
  }
  playMaj3() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.three, 0.75, 2.20);
  }
  playPerfect4() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.four, 0.75, 2.20);
  }
  playDim5() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.b5, 0.75, 2.20);
  }
  playPerfect5() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.five, 0.75, 2.20);
  }
  playMin6() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.b6, 0.75, 2.20);
  }
  playMaj6() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.six, 0.75, 2.20);
  }
  playMin7() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.b7, 0.75, 2.20);
  }
  playMaj7() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.seven, 0.75, 2.20);
  }
  playOctave() {
    playPitch(this.context, this.one, 0, 2.20);
    playPitch(this.context, this.eight, 0.75, 2.20);
  }
}