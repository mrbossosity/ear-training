export default function playQuiz(scale, quality=null, checked) {
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

  let randomQuality = checked[Math.floor(Math.random() * checked.length)].quality;
  let mysteryQuality;
  switch (randomQuality) {
    case "maj":
      scale.playMaj(0);
      mysteryQuality = "maj";
      break;
    case "min":
      scale.playMin(0);
      mysteryQuality = "min"
      break;
    case "aug":
      scale.playAug(0);
      mysteryQuality = "aug"
      break;
    case "dim":
      scale.playDim(0);
      mysteryQuality = "dim"
      break;
    case "sus2":
      scale.playSus2(0);
      mysteryQuality = "sus2";
      break;
    case "sus4":
      scale.playSus4(0);
      mysteryQuality = "sus4";
  };

  return mysteryQuality
}