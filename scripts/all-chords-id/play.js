export default function playQuiz(scale, chord=null, checked) {
  if (chord !== null) {
    switch (chord) {
      case "ii":
        scale.playiiChord(0)
        break;
      case "iii":
        scale.playiiiChord(0);
        break;
      case "IV":
        scale.playIVChord(0);
        break;
      case "V":
        scale.playVChord(0);
        break;
      case "vi":
        scale.playviChord(0);
    }

    return
  }

  scale.tonicize();

  let mysteryChord = checked[Math.floor(Math.random() * checked.length)].chord;
  switch (mysteryChord) {
    case "ii":
      scale.playiiChord(4.0);
      break;
    case "iii":
      scale.playiiiChord(4.0);
      break;
    case "IV":
      scale.playIVChord(4.0);
      break;
    case "V":
      scale.playVChord(4.0);
      break;
    case "vi":
      scale.playviChord(4.0);
      break;
    case "vii":
      scale.playviiChord(4.0);
  };

  return mysteryChord
}