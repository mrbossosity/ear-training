import adEnvelope from "./envelope.js"

export default function playPitch(context, frequency, schedule, decay=1.6, amp=0.2, duration=5) {
  let now = context.currentTime;
  let scheduledStart = now + schedule;
  let scheduledOff = scheduledStart + duration;

  let osc = context.createOscillator();
  osc.frequency.setValueAtTime(frequency, now); 
  let gainNode = context.createGain();
  osc.connect(gainNode);
  gainNode.connect(context.destination);
  osc.start(scheduledStart);
  adEnvelope(gainNode, scheduledStart, amp, 0, decay);
  osc.stop(scheduledOff);
}