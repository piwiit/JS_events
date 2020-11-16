//Fonctionnalité 1 :

const onClickFooter = document.querySelector("footer");
n = 0;
function clickOnConsole() {
  n += 1;
  console.log(`clique n°${n}`);
}
onClickFooter.addEventListener("click", clickOnConsole);

//Fonctionnalité 2 :
let buttonClick = document.querySelector(".navbar-toggler");
let userNavbar = document.querySelector("#navbarHeader");

function onClickUserNavBar() {
  userNavbar.classList.toggle("collapse");
}
buttonClick.addEventListener("click", onClickUserNavBar);

//Fonctionnalité 3 :
let editFocus = document.querySelector(
  "body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary"
);
let textCard = document.querySelector(".card-text");
function redColor() {
  textCard.className = "card-text text-danger";
}
editFocus.addEventListener("click", redColor);

//Fonctionnalité 4 :
let editSecondFocus = document.querySelector(
  "body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary"
);
let textCard2 = document.querySelector(
  "body > main > div > div > div > div:nth-child(2) > div > div > p"
);
function greenColor() {
  if (textCard2.className == "card-text") {
    textCard2.className = "card-text text-success";
  } else {
    textCard2.className = "card-text";
  }
}
editSecondFocus.addEventListener("click", greenColor);

//Fonctionnalité 5 :
let nuclearBombe = document.querySelector("head > link");
let tryThis = document.querySelector(
  "body > header > div.navbar.navbar-dark.bg-dark.box-shadow"
);
function deleteAllCss() {
  if (nuclearBombe.disabled === false) {
    nuclearBombe.disabled = true;
  } else {
    nuclearBombe.disabled = false;
  }
}
tryThis.addEventListener("dblclick", deleteAllCss);
userNavbar.addEventListener("dblclick", deleteAllCss);

//Fonctionnalité 6 :
let cards = document.querySelectorAll(".card");
for (i = 0; i < cards.length; i++) {
  let viewBtn = cards[i].querySelector(".btn-success");
  let textCardHover = cards[i].querySelector(".card-text");
  let imgHover = cards[i].querySelector(".card-img-top");
  let status = true;
  function hoverCard() {
    if (status == true) {
      imgHover.style.width = "20%";
      imgHover.style.margin = "auto";
      textCardHover.style.display = "none";
      status = false;
    } else {
      imgHover.style.width = "100%";
      textCardHover.style.display = "block";
      status = true;
    }
  }
  viewBtn.addEventListener("mouseover", hoverCard);
}

//Fonctionnalité 7 :
let grayArrow = document.querySelector(
  "body > main > section > div > p > a.btn.btn-secondary.my-2"
);
const container = document.querySelector("body > main > div > div > div");
function reverseChilde() {
  container.insertBefore(container.children[0], container.children[length - 1]);
}
grayArrow.addEventListener("click", reverseChilde);

//Fonctionnalité 8 :
let blueArrow = document.querySelector(
  "body > main > section > div > p > a.btn.btn-primary.my-2"
);
blueArrow.href = "#";
function reverseBlueChilde() {
  container.insertBefore(container.children[5], container.children[0]);
}
blueArrow.addEventListener("click", reverseBlueChilde);

//Fonctionnalité 9 :
let focusLogo = document.querySelector(
  "body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a"
);
let bodyElement = document.querySelector("body");

function amazingFouction(e) {
  if (e.key == "a") {
    bodyElement.className = "col-4";
  } else if (e.key == "p") {
    bodyElement.className = "offset-md-8";
  } else if (e.key == "y") {
    bodyElement.className = "col-4 offset-md-4";
  } else if (e.key == "b") {
    bodyElement.className = "";
  }
}
focusLogo.addEventListener("keydown", amazingFouction);
