export default function generateTonic(lowestFreq, maxSemitonesAbove) {
  let number = Math.floor(Math.random() * maxSemitonesAbove) + 1;
  let frequency = lowestFreq * Math.pow(Math.pow(2, (1 / 12)), number);
  return frequency
}