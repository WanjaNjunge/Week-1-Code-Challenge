//prompt user to input car speed number
const speed = parseInt(prompt("Enter car speed (in km/h): "));

//define max speed limit
const speedLimit = 70;

//define km/s that equals a demerit point
const kmPerDemeritPoint = 5;


//calc demerit points
if (speed <= speedLimit) {
  console.log("Ok");
} else {
  const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
}
