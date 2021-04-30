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

      case "I / ii / V":
        scale.playIChord(0);
        scale.playiiChord(1.5);
        scale.playVChord(3);
        break;

      case "ii / V / I":
        scale.playiiChord(0);
        scale.playVChord(1.5);
        scale.playIChord(3);
        break;

      case "I / vi / IV":
        scale.playIChord(0);
        scale.playviChord(1.5);
        scale.playIVChord(3);
        break;

      case "vi / IV / I":
        scale.playviChord(0);
        scale.playIVChord(1.5);
        scale.playIChord(3);
        break;

      case "IV / V / vi":
        scale.playIVChord(0);
        scale.playVChord(1.5);
        scale.playviChord(3);
        break;

      case "V / vi / IV":
        scale.playVChord(0);
        scale.playviChord(1.5);
        scale.playIVChord(3);
    }

    return
  }

  let degree = Math.floor(Math.random() * 10) + 1;
  let mysteryProgression, mysterySubPosition; 
  switch (degree) {
    case 1:
      scale.playIChord(0);
      scale.playIVChord(1.5);
      scale.playVChord(3);
      mysteryProgression = "I / IV / V";
      mysterySubPosition = "second";
      break;
    case 2:
      scale.playIVChord(0);
      scale.playVChord(1.5);
      scale.playIChord(3);
      mysteryProgression = "IV / V / I";
      mysterySubPosition = "first";
      break;
    case 3:
      scale.playIVChord(0);
      scale.playIChord(1.5);
      scale.playVChord(3);
      mysteryProgression = "IV / I / V";
      mysterySubPosition = "first";
      break;
    case 4:
      scale.playVChord(0);
      scale.playIChord(1.5);
      scale.playIVChord(3);
      mysteryProgression = "V / I / IV";
      mysterySubPosition = "third";
      break;
    case 5:
      scale.playIChord(0);
      scale.playVChord(1.5);
      scale.playIVChord(3);
      mysteryProgression = "I / V / IV";
      mysterySubPosition = "third";
      break;
    case 6:
      scale.playVChord(0);
      scale.playIVChord(1.5);
      scale.playIChord(3);
      mysteryProgression = "V / IV / I";
      mysterySubPosition = "second";
      break;

    case 7:
      scale.playIChord(0);
      scale.playiiChord(1.5);
      scale.playVChord(3);
      mysteryProgression = "I / ii / V";
      mysterySubPosition = "second";
      break;

    case 8:
      scale.playiiChord(0);
      scale.playVChord(1.5);
      scale.playIChord(3);
      mysteryProgression = "ii / V / I";
      mysterySubPosition = "first";
      break;

    case 9:
      scale.playIChord(0);
      scale.playviChord(1.5);
      scale.playIVChord(3);
      mysteryProgression = "I / vi / IV";
      mysterySubPosition = "third";
      break;

    case 10:
      scale.playviChord(0);
      scale.playIVChord(1.5);
      scale.playIChord(3);
      mysteryProgression = "vi / IV / I";
      mysterySubPosition = "second";
      break;

    case 11:
      scale.playIVChord(0);
      scale.playVChord(1.5);
      scale.playviChord(3);
      mysteryProgression = "IV / V / vi";
      mysterySubPosition = "first";
      break;

    case 12:
      scale.playVChord(0);
      scale.playviChord(1.5);
      scale.playIVChord(3);
      mysteryProgression = "V / vi / IV";
      mysterySubPosition = "third";
  };

  return [mysteryProgression, mysterySubPosition]
}