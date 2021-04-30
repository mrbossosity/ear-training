export default function playQuiz(intervalsObj, interval=null) {
  if (interval !== null) {
    switch (interval) {
      case "m2":
        intervalsObj.playMin2(4.0);
        break;
      case "maj2":
        intervalsObj.playMaj2(4.0);
        break;
      case "m3":
        intervalsObj.playMin3(4.0);
        break;
      case "maj3":
        intervalsObj.playMaj3(4.0);
        break;
      case "p4":
        intervalsObj.playPerfect4(4.0);
        break;
      case "d5":
        intervalsObj.playDim5(4.0);
        break;
      case "p5":
        intervalsObj.playPerfect5(4.0);
        break;
      case "m6":
        intervalsObj.playMin6(4.0);
        break;
      case "maj6":
        intervalsObj.playMaj6(4.0);
        break;
      case "m7":
        intervalsObj.playMin7(4.0);
        break;
      case "maj7":
        intervalsObj.playMaj7(4.0);
        break;
      case "octave":
        intervalsObj.playOctave(4.0);
        break;
    }

    return
  }

  let randomInt = Math.floor(Math.random() * 12 ) + 1;
  let mysteryInterval;
  switch (randomInt) {
    case 1:
      intervalsObj.playMin2();
      mysteryInterval = "m2";
      break;
    case 2:
      intervalsObj.playMaj2();
      mysteryInterval = "maj2";
      break;
    case 3:
      intervalsObj.playMin3();
      mysteryInterval = "m3";
      break;
    case 4:
      intervalsObj.playMaj3();
      mysteryInterval = "maj3";
      break;
    case 5:
      intervalsObj.playPerfect4();
      mysteryInterval = "p4";
      break;
    case 6:
      intervalsObj.playDim5();
      mysteryInterval = "d5";
      break;
    case 7:
      intervalsObj.playPerfect5();
      mysteryInterval = "p5";
      break;
    case 8:
      intervalsObj.playMin6();
      mysteryInterval = "m6";
      break;
    case 9:
      intervalsObj.playMaj6();
      mysteryInterval = "maj6";
      break;
    case 10:
      intervalsObj.playMin7();
      mysteryInterval = "m7";
      break;
    case 11:
      intervalsObj.playMaj7();
      mysteryInterval = "maj7";
      break;
    case 12:
      intervalsObj.playOctave();
      mysteryInterval = "octave"  
  };

  return mysteryInterval
}