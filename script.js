<script src="script.js"></script>
let eyesIndex = 1;
let hairIndex = 1;
let clothesIndex = 1;
let shoesIndex = 1;
let accessoryIndex = 1;
let hatIndex = 1;

const maxEyes = 5;
const maxHair = 5;
const maxClothes = 5;
const maxShoes = 5;
const maxAccessory = 6;
const maxHat = 6;

function changeEyes() {
  eyesIndex++;
  if (eyesIndex > maxEyes) eyesIndex = 1;
  document.getElementById("eyes").src = `assets/eyes${eyesIndex}.png`;
}

function changeHair() {
  hairIndex++;
  if (hairIndex > maxHair) hairIndex = 1;
  document.getElementById("hair").src = `assets/hair${hairIndex}.png`;
}

function changeClothes() {
  clothesIndex++;
  if (clothesIndex > maxClothes) clothesIndex = 1;
  document.getElementById("clothes").src = `assets/clothes${clothesIndex}.png`;
}

function changeShoes() {
  shoesIndex++;
  if (shoesIndex > maxShoes) shoesIndex = 1;
  document.getElementById("shoes").src = `assets/shoes${shoesIndex}.png`;
}

function changeAccessory() {
  accessoryIndex++;
  if (accessoryIndex > maxAccessory) accessoryIndex = 1;
  document.getElementById("accessory").src = `assets/accessory${accessoryIndex}.png`;
}

function changeHat() {
  hatIndex++;
  if (hatIndex > maxHat) hatIndex = 1;
  document.getElementById("hat").src = `assets/hat${hatIndex}.png`;
}

function resetAll() {
  eyesIndex = 1;
  hairIndex = 1;
  clothesIndex = 1;
  shoesIndex = 1;
  accessoryIndex = 1;
  hatIndex = 1;

  document.getElementById("eyes").src = "assets/eyes1.png";
  document.getElementById("hair").src = "assets/hair1.png";
  document.getElementById("clothes").src = "assets/clothes1.png";
  document.getElementById("shoes").src = "assets/shoes1.png";
  document.getElementById("accessory").src = "assets/accessory1.png";
  document.getElementById("hat").src = "assets/hat1.png";
}
