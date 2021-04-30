export default function playQuiz(scale, progression=null) {
  if (progression !== null) {
    switch (progression) {
      case "I / IV / V":
        scale.playIChord(0);
        scale.playIVChord(1.5);
        scale.playVChord(3);
        break;
      case "IV / V / I":
        scale.playIVChord(0);
        scale.playVChord(1.5);
        scale.playIChord(3);
        break;
      case "IV / I / V":
        scale.playIVChord(0);
        scale.playIChord(1.5);
        scale.playVChord(3);
        break;
      case "V / I / IV":
        scale.playVChord(0);
        scale.playIChord(1.5);
        scale.playIVChord(3);
        break;
      case "I / V / IV":
        scale.playIChord(0);
        scale.playVChord(1.5);
        scale.playIVChord(3);
        break;
      case "V / IV / I":
        scale.playVChord(0);
        scale.playIVChord(1.5);
        scale.playIChord(3);
        break;

      case "I / ii / iii":
        scale.playIChord(0);
        scale.playiiChord(1.5);
        scale.playiiiChord(3);
        break;

      case "ii / V / I":
        scale.playiiChord(0);
        scale.playVChord(1.5);
        scale.playIChord(3);
        break;

      case "I / vii / vi":
        scale.playIChord(0);
        scale.playviiChord(1.5);
        scale.playviChord(3);
        break;

      case "vi / I / V":
        scale.playviChord(0);
        scale.playIChord(1.5);
        scale.playVChord(3);
        break;

      case "ii / I / V":
        scale.playviChord(0);
        scale.playIChord(1.5);
        scale.playVChord(3);
        break;

      case "I / vi / V":
        scale.playIChord(0);
        scale.playviChord(1.5);
        scale.playVChord(3);
        break;

      case "vi / IV / I":
        scale.playviChord(0);
        scale.playIVChord(1.5);
        scale.playIChord(3);
        break;

      case "I / V / vi":
        scale.playIChord(0);
        scale.playVChord(1.5);
        scale.playviChord(3);
    }

    return
  }

  let degree = Math.floor(Math.random() * 14) + 1;
  let mysteryProgression, mysteryTonicPosition; 
  switch (degree) {
    case 1:
      scale.playIChord(0);
      scale.playIVChord(1.5);
      scale.playVChord(3);
      mysteryProgression = "I / IV / V";
      mysteryTonicPosition = "first";
      break;
    case 2:
      scale.playIVChord(0);
      scale.playVChord(1.5);
      scale.playIChord(3);
      mysteryProgression = "IV / V / I";
      mysteryTonicPosition = "third";
      break;
    case 3:
      scale.playIVChord(0);
      scale.playIChord(1.5);
      scale.playVChord(3);
      mysteryProgression = "IV / I / V";
      mysteryTonicPosition = "second";
      break;
    case 4:
      scale.playVChord(0);
      scale.playIChord(1.5);
      scale.playIVChord(3);
      mysteryProgression = "V / I / IV";
      mysteryTonicPosition = "second";
      break;
    case 5:
      scale.playIChord(0);
      scale.playVChord(1.5);
      scale.playIVChord(3);
      mysteryProgression = "I / V / IV";
      mysteryTonicPosition = "first";
      break;
    case 6:
      scale.playVChord(0);
      scale.playIVChord(1.5);
      scale.playIChord(3);
      mysteryProgression = "V / IV / I";
      mysteryTonicPosition = "third";
      break;

    case 7:
      scale.playIChord(0);
      scale.playiiChord(1.5);
      scale.playiiiChord(3);
      mysteryProgression = "I / ii / iii";
      mysteryTonicPosition = "first";
      break;

    case 8:
      scale.playiiChord(0);
      scale.playVChord(1.5);
      scale.playIChord(3);
      mysteryProgression = "ii / V / I";
      mysteryTonicPosition = "third";
      break;

    case 9:
      scale.playIChord(0);
      scale.playviiChord(1.5);
      scale.playviChord(3);
      mysteryProgression = "I / vii / vi";
      mysteryTonicPosition = "first";
      break;

    case 10:
      scale.playviChord(0);
      scale.playIChord(1.5);
      scale.playVChord(3);
      mysteryProgression = "vi / I / V";
      mysteryTonicPosition = "second";
      break;

    case 11:
      scale.playiiChord(0);
      scale.playIChord(1.5);
      scale.playVChord(3);
      mysteryProgression = "ii / I / V";
      mysteryTonicPosition = "second";
      break;

    case 12:
      scale.playIChord(0);
      scale.playviChord(1.5);
      scale.playVChord(3);
      mysteryProgression = "I / vi / V";
      mysteryTonicPosition = "first";
      break;

    case 13:
      scale.playviChord(0);
      scale.playIVChord(1.5);
      scale.playIChord(3);
      mysteryProgression = "vi / IV / I";
      mysteryTonicPosition = "third";
      break;

    case 14:
      scale.playIChord(0);
      scale.playVChord(1.5);
      scale.playviChord(3);
      mysteryProgression = "I / V / vi";
      mysteryTonicPosition = "first";
  };

  return [mysteryProgression, mysteryTonicPosition]
}