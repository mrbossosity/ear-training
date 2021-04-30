export default function playQuiz(scale, chord=null) {
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

  let degree = Math.floor(Math.random() * 5) + 2;
  let mysteryChord;
  switch (degree) {
    case 2:
      scale.playiiChord(4.0);
      mysteryChord = "ii";
      break;
    case 3:
      scale.playiiiChord(4.0);
      mysteryChord = "iii"
      break;
    case 4:
      scale.playIVChord(4.0);
      mysteryChord = "IV"
      break;
    case 5:
      scale.playVChord(4.0);
      mysteryChord = "V"
      break;
    case 6:
      scale.playviChord(4.0);
      mysteryChord = "vi"
  };

  return mysteryChord
}