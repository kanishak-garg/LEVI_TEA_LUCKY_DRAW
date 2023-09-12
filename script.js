//Get a reference to the button
var button = document.getElementById("generate");
var reset = document.getElementById("reset");
//Run the function on button click
button.onclick = async function generate() {
  // Create a variable to hold a random number between 1 and 100
  reset.disabled = true;
  this.disabled = true;
  var el = document.getElementById("ranNum");
  var text = document.getElementById("head");
  var congo = document.getElementById("congo");
  congo.innerHTML = "Are you Exited?";
  text.innerHTML = " ";
  //var randomNum = Math.floor(Math.random() * 3000 + 1);
  await rotatenumber();
  // Create a variable el to hold the ranNum element

  // Write the number into that element
  //el.innerHTML = randomNum;
  text.innerHTML = "LEVI LUCKY WINNER";
  congo.innerHTML = "Congratulations!!!";

  reset.disabled = false;
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function rotatenumber() {
  for (let i = 1; i < 60; i++) {
    await sleep(50);
    var randomNum = Math.floor(Math.random() * 3000 + 1);
    var el = document.getElementById("ranNum");
    el.innerHTML = randomNum;
  }

  for (let i = 1; i < 50; i++) {
    if (i <= 46) {
      await sleep(15 * i);
    }
    var randomNum = Math.floor(Math.random() * 2999 + 1);
    var el = document.getElementById("ranNum");
    el.innerHTML = randomNum;
    if (i == 49) {
      for (let j = 10; j < 20; j++) {
        await sleep(50 * j);
        randomNum++;
        if (randomNum > 3000) {
          break;
        }
        el.innerHTML = randomNum;
      }
    }
    if (i >= 47 && i < 49) {
      for (let j = 1; j < 10; j++) {
        await sleep(400);
        randomNum++;
        if (randomNum > 3000) {
          break;
        }
        el.innerHTML = randomNum;
      }
      //   await sleep(20 * i);
    }
  }
}

reset.onclick = function reset() {
  // Create a variable to hold a random number between 1 and 100

  // Create a variable el to hold the ranNum element
  var el = document.getElementById("ranNum");
  var text = document.getElementById("head");
  var congo = document.getElementById("congo");
  // Write the number into that element
  el.innerHTML = 0;
  text.innerHTML = "Get the Next Winner";
  congo.innerHTML = "Lets Start";
  button.disabled = false;
};
