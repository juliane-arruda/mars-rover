let rover = {
  diretion: "N",
  x: 0,
  y: 0,
  travelLog: [{
    x: 0,
    y: 0
  }]
};

function turnLeft(rover) {

  if (rover.diretion === "N") {
    rover.diretion = "W";
  } else if (rover.diretion === "W") {
    rover.diretion = "S";
  } else if (rover.diretion === "S") {
    rover.diretion = "E";
  } else if (rover.diretion === "E") {
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
      if (rover.y < 9 && board[rover.y + 1][rover.x]==='') {
        rover.y = rover.y + 1;
      }
      break;
    case "E":
      if (rover.x < 9 && board[rover.y][rover.x + 1]==='') {
        rover.x = rover.x + 1;
      }
      break;
    case "S":
      if (rover.y > 0 && board[rover.y -1][rover.x]==='') {
        rover.y = rover.y - 1;
      }
      break;
    case "W":
      if (rover.x > 0 && board[rover.y][rover.x - 1]==='') {
        rover.x = rover.x - 1;
      }
      break;
  }
  rover.travelLog.push({
    x: rover.x,
    y: rover.y
  })

  console.log("moveForward was called")
}

function moveBackward(rover) {
  switch (rover.diretion) {
    case "N":
      if (rover.y > 0 && board[rover.y - 1][rover.x]==='') {
        rover.y = rover.y - 1;
      }
      break;
    case "E":
      if (rover.x > 0 && board[rover.y][rover.x - 1]==='') {
        rover.x = rover.x - 1;
      }
      break;
    case "S":
      if (rover.y < 9 && board[rover.y + 1][rover.x]==='') {
        rover.y = rover.y + 1;
      }
      break;
    case "W":
      if (rover.x < 9 && board[rover.y][rover.x + 1]==='') {
        rover.x = rover.x + 1;
      }
      break;
  }
  rover.travelLog.push({
    x: rover.x,
    y: rover.y
  })


  console.log("moveBackward was called")

}


function goForward(letras) {
  let p = 0;
  while (p < letras.length) {
    let letra = letras[p];
    if (letra === "f") {
      moveForward(rover)
    }
    if (letra === "r") {
      turnRight(rover)
    }
    if (letra === "l") {
      turnLeft(rover)
    }
    if (letra === "b") {
      turnLeft(rover)
    }
    p++;
  }
}


goForward('rffrfflfrff');




console.log(rover.travelLog);


const board = [
  ['','','o','','','','','','','',],
  ['','','','','','','o','','','',],
  ['','','','o','','','','','','',],
  ['','','','','o','','','','','',],
  ['','o','','','','','','','','',],
  ['','','','','','o','','','','',],
  ['','','','','','','','o','','',],
  ['','','','','','','','','','o',],
  ['','','','','','','o','','','',],
  ['o','','','','','','','','','',],
  ['','','','','','','','','o','',]
];






/*console.log(rover);
turnRight(rover);
console.log(rover);
turnRight(rover);
console.log(rover);
moveForward(rover);
console.log(rover);
moveForward(rover);
console.log(rover);*/