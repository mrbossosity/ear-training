import playPitch from "../global/pitch.js"

export default class Qualities {
  constructor(context, tonic) {
    this.context = context;
    this.one = tonic;
    this.two = this.one * Math.pow(Math.pow(2, (1 / 12)), 2);
    this.b3 = this.one * Math.pow(Math.pow(2, (1 / 12)), 3);
    this.three = this.one * Math.pow(Math.pow(2, (1 / 12)), 4);
    this.four = this.one * Math.pow(Math.pow(2, (1 / 12)), 5);
    this.b5 = this.one * Math.pow(Math.pow(2, (1 / 12)), 6);
    this.five = this.one * Math.pow(Math.pow(2, (1 / 12)), 7);
    this.sharp5 = this.one * Math.pow(Math.pow(2, (1 / 12)), 8);
  }
  playMaj(schedule) {
    playPitch(this.context, this.one, schedule, 2.5);
    playPitch(this.context, this.three, schedule + 0.03, 2.5);
    playPitch(this.context, this.five, schedule + 0.06, 2.5);
  }
  playMin(schedule) {
    playPitch(this.context, this.one, schedule, 2.5);
    playPitch(this.context, this.b3, schedule + 0.03, 2.5);
    playPitch(this.context, this.five, schedule + 0.06, 2.5);
  }
  playAug(schedule) {
    playPitch(this.context, this.one, schedule, 2.5);
    playPitch(this.context, this.three, schedule + 0.03, 2.5);
    playPitch(this.context, this.sharp5, schedule + 0.06, 2.5);
  }
  playDim(schedule) {
    playPitch(this.context, this.one, schedule, 2.5);
    playPitch(this.context, this.b3, schedule + 0.03, 2.5);
    playPitch(this.context, this.b5, schedule + 0.06, 2.5);
  }
  playSus2(schedule) {
    playPitch(this.context, this.one, schedule);
    playPitch(this.context, this.two, schedule + 0.03, 2.5);
    playPitch(this.context, this.five, schedule + 0.06, 2.5);
  }
  playSus4(schedule) {
    playPitch(this.context, this.one, schedule);
    playPitch(this.context, this.four, schedule + 0.03, 2.5);
    playPitch(this.context, this.five, schedule + 0.06, 2.5);
  }
}