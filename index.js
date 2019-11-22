// Rover Object Goes Here
// ======================
let rover = {
  diretion: "N",
  x: 0,
  y: 0,
  travelLog: [{
    x: 0,
    y: 0
  }]
};




// ======================
function turnLeft(rover) {

  if (rover.diretion == "N") {
    rover.diretion = "W";
  } else if (rover.diretion == "W") {
    rover.diretion = "S";
  } else if (rover.diretion == "S") {
    rover.diretion = "E";
  } else if (rover.diretion == "E") {
    rover.diretion = "N";
  }

  console.log("turnLeft was called!");
}

function turnRight(rover) {

  switch (rover.diretion) {
    case "N":
      rover.diretion = "E";
      break;
    case "E":
      rover.diretion = "S";
      break;
    case "S":
      rover.diretion = "W";
      break;
    case "W":
      rover.diretion = "N";
      break;
  }

  console.log("turnRight was called!");
}

function moveForward(rover) {
  switch (rover.diretion) {
    case "N":
      rover.y = rover.y + 1;
      break;
    case "E":
      rover.x = rover.x + 1;
      break;
    case "S":
      rover.y = rover.y - 1;
      break;
    case "W":
      rover.x = rover.x - 1;
      break;
  }
  rover.travelLog.push({
    x: rover.x,
    y: rover.y
  })


  console.log("moveForward was called")

}

function goForward(letras) {
  let p = 0;
  while (p < letras.length) {
    let letra = letras[p];
    if (letra == "f") {
      moveForward(rover)
    }
    if (letra == "r") {
      turnRight(rover)
    }
    if (letra == "l") {
      turnLeft(rover)
    }
    p++;
  }
}


goForward('rffrfflfrff');




console.log(rover.travelLog);








/*console.log(rover);
turnRight(rover);
console.log(rover);
turnRight(rover);
console.log(rover);
moveForward(rover);
console.log(rover);
moveForward(rover);
console.log(rover);*/