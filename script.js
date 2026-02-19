// Índices iniciais
let eyeIndex = 1;
let hairIndex = 1;
let clothesIndex = 1;
let shoesIndex = 1;
let accessoryIndex = 1;
let hatIndex = 1;

// Número de opções por categoria
const eyeTotal = 3;        // olhos1.png, olhos2.png, olhos3.png
const hairTotal = 3;       // hair1.png, hair2.png, hair3.png
const clothesTotal = 4;    // clothes1.png, clothes2.png, clothes3.png, clothes4.png
const shoesTotal = 3;      // shoes1.png, shoes2.png, shoes3.png
const accessoryTotal = 3;  // accessory1.png, accessory2.png, accessory3.png
const hatTotal = 6;        // hat1.png, hat2.png, hat3.png, hat4.png, hat5.png, hat6.png

// Funções para trocar as camadas
function changeEyes() {
  eyeIndex++;
  if (eyeIndex > eyeTotal) eyeIndex = 1;
  document.getElementById("eyes").src = `assets/eyes${eyeIndex}.png`;
}

function changeHair() {
  hairIndex++;
  if (hairIndex > hairTotal) hairIndex = 1;
  document.getElementById("hair").src = `assets/hair${hairIndex}.png`;
}

function changeClothes() {
  clothesIndex++;
  if (clothesIndex > clothesTotal) clothesIndex = 1;
  document.getElementById("clothes").src = `assets/clothes${clothesIndex}.png`;
}

function changeShoes() {
  shoesIndex++;
  if (shoesIndex > shoesTotal) shoesIndex = 1;
  document.getElementById("shoes").src = `assets/shoes${shoesIndex}.png`;
}

function changeAccessory() {
  accessoryIndex++;
  if (accessoryIndex > accessoryTotal) accessoryIndex = 1;
  document.getElementById("accessory").src = `assets/accessory${accessoryIndex}.png`;
}

function changeHat() {
  hatIndex++;
  if (hatIndex > hatTotal) hatIndex = 1;
  document.getElementById("hat").src = `assets/hat${hatIndex}.png`;
}

// Função para resetar tudo
function resetAll() {
  eyeIndex = 1;
  hairIndex = 1;
  clothesIndex = 1;
  shoesIndex = 1;
  accessoryIndex = 1;
  hatIndex = 1;

  document.getElementById("eyes").src = `assets/eyes${eyeIndex}.png`;
  document.getElementById("hair").src = `assets/hair${hairIndex}.png`;
  document.getElementById("clothes").src = `assets/clothes${clothesIndex}.png`;
  document.getElementById("shoes").src = `assets/shoes${shoesIndex}.png`;
  document.getElementById("accessory").src = `assets/accessory${accessoryIndex}.png`;
  document.getElementById("hat").src = `assets/hat${hatIndex}.png`;
}
