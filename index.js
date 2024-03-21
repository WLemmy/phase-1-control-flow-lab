function scuberGreetingForFeet(distanceInFeet) {
  if (distanceInFeet <= 400) {
      // If the distance is less than or equal to 400 feet
      return "This one is on me!";
  } else if (distanceInFeet <= 2000) {
      // If the distance is between 401 and 2000 feet
      return "That will be twenty bucks.";
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      // If the distance is between 2001 and 2500 feet
      return "I will gladly take your thirty bucks.";
  } else {
      // If the distance is over 2500 feet
      return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
      case "generous":
          return "Thank you so much.";
      case "not as generous":
          return "Thank you.";
      default:
          return "Bye.";
  }
}