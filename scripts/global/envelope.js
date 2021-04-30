export default function adEnvelope(gainNode, scheduledStart, amp, a, d) {
  let attack = scheduledStart + a;
  let decay = attack + d;
  gainNode.gain.linearRampToValueAtTime(amp, attack);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, decay)
}