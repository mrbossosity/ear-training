import Scale from "./scale.js"
import playPitch from "../global/pitch.js"

export default class Sfx extends Scale {
  constructor(context, tonic) {
    super(context, tonic);
    this.hiOne = tonic * Math.pow(Math.pow(2, (1 / 12)), 12);
  }
  correct() {
    playPitch(this.context, this.one, 0, 0.8);
    playPitch(this.context, this.three, 0.05, 0.8);
    playPitch(this.context, this.hiFive, 0.1, 0.8);
    playPitch(this.context, this.hiOne, 0.15, 1);
    playPitch(this.context, this.hiFive, 0.32, 0.8);
    playPitch(this.context, this.three, 0.49, 0.8);
    playPitch(this.context, this.one, 0.66, 0.65);
  }
  wrong() {
    playPitch(this.context, this.hiSix, 0, 0.5);
    playPitch(this.context, this.three, 0.05, 0.5);
    playPitch(this.context, this.one, 0.1, 0.5);
    playPitch(this.context, this.loSix, 0.15, 0.5);

  }
}