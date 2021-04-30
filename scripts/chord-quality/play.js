export default function playQuiz(scale, quality=null) {
  if (quality !== null) {
    switch (quality) {
      case "maj":
        scale.playMaj(0)
        break;
      case "min":
        scale.playMin(0);
        break;
      case "aug":
        scale.playAug(0);
        break;
      case "dim":
        scale.playDim(0);
        break;
      case "sus2":
        scale.playSus2(0);
        break;
      case "sus4":
        scale.playSus4(0);  
    }

    return
  }

  let degree = Math.floor(Math.random() * 6) + 1;
  let mysteryQuality;
  switch (degree) {
    case 1:
      scale.playMaj(0);
      mysteryQuality = "maj";
      break;
    case 2:
      scale.playMin(0);
      mysteryQuality = "min"
      break;
    case 3:
      scale.playAug(0);
      mysteryQuality = "aug"
      break;
    case 4:
      scale.playDim(0);
      mysteryQuality = "dim"
      break;
    case 5:
      scale.playSus2(0);
      mysteryQuality = "sus2";
      break;
    case 6:
      scale.playSus4(0);
      mysteryQuality = "sus4";
  };

  return mysteryQuality
}