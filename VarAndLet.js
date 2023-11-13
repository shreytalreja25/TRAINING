var x = 1;
var y = 2;
const z = 4;

console.log("X  : ", x, " ", " Y : ", y);

if (true) {
  var x = 4;
  let y = 3;
  console.log("X  : ", x, " ", " Y : ", y);
  // x += 1;
  y = y + 10;
  console.log(y);
}

console.log("X  : ", x, " ", " Y : ", y);
