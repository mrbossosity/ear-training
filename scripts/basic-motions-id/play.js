export default function playQuiz(scale, motion=null, progressions) {
  if (motion !== null) {
    motion.forEach((chord, index) => {
      switch (chord) {
        case "I":
          scale.playIChord(0 + index);
          break;
        case "ii":
          scale.playiiChord(0 + index);
          break;
        case "iii":
          scale.playiiiChord(0 + index);
          break;
        case "loiii":
          scale.playLoiiiChord(0 + index);
          break;
        case "III":
          scale.playIIIChord(0 + index);
          break;
        case "IV":
          scale.playIVChord(0 + index);
          break;
        case "V":
          scale.playVChord(0 + index);
          break;
        case "vi":
          scale.playviChord(0 + index);
          break;
        case "vii":
          scale.playviiChord(0 + index);
      }
    })

    return
  }

  scale.tonicizeAlt();

  let randomProg = progressions[Math.floor(Math.random() * progressions.length)]
  let mysteryMotion = [randomProg.chordOne, randomProg.chordTwo];
  mysteryMotion.forEach((chord, index) => {
    switch (chord) {
      case "I":
        scale.playIChord(2.4 + index);
        break;
      case "ii":
        scale.playiiChord(2.4 + index);
        break;
      case "iii":
        scale.playiiiChord(2.4 + index);
        break;
      case "loiii":
        scale.playLoiiiChord(2.4 + index);
        break;
      case "III":
        scale.playIIIChord(2.4 + index);
        break;
      case "IV":
        scale.playIVChord(2.4 + index);
        break;
      case "V":
        scale.playVChord(2.4 + index);
        break;
      case "vi":
        scale.playviChord(2.4 + index);
        break;
      case "vii":
        scale.playviiChord(2.4 + index);
    };
  });

  return [randomProg.motion, ...mysteryMotion]
}