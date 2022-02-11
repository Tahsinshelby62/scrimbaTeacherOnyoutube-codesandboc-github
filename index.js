// const myAge = 26;
// console.log(myAge);

/*let myAge = 26;
let humanDogRatio = 7;

let dogAge = myAge * humanDogRatio;

console.log(dogAge);

let bonusPoints = 50;
console.log(bonusPoints);
bonusPoints += 50;
console.log(bonusPoints);
bonusPoints -= 75;
console.log(bonusPoints);
bonusPoints += 45;
console.log(bonusPoints);

function increment() {
  console.log("the button is clicked");
}
function countDown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
  console.log("go");
}
countDown();
countDown();

function theFortyTwo() {
  console.log(42);
}
theFortyTwo();  

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;
let lapS = lap1 + lap2 + lap3;

function lapSum() {
  console.log(lapS);
}
lapSum(); //

let lapsCompleted = 0;

function laps() {
  lapsCompleted += 1;
}
laps();
laps();
laps(); 

console.log(lapsCompleted); //


let welcomeEL = document.getElementById("welcome-el");

let name = " tahsin";
let greeting = "happy to the club";

welcomeEL.innerHTML = greeting + name; */
// let saveEl = document.getElementById("save-el");
// let countEl = document.getElementById("count-el");
// let count = 0;

// function increment() {
//   count += 1;
//   countEl.innerText = count;
// }

// function save() {
//   let countStr = count + " - ";
//   saveEl.textContent += countStr;
//   console.log(count);
//   countEl.innerText = 0;
//   count = 0;
// }

// let firstName = "Md";
// let lastName = "Tahsin";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// let name = "johny";
// let greeting = "hi there";

// function gre() {
//   console.log(greeting + "," + name + "!");

// }
// gre();

// let myPoints = 3;

// function add3Points() {
//   myPoints += 3;
// }
// function remove1Point() {
//   myPoints -= 1;
// }
// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();

// console.log(myPoints);

// let errorParagraph = document.getElementById("error");
// //console.log(errorParagraph);

// function purchase() {
//   // console.log("button clicked");
//   errorParagraph.textContent = "something went wrong, Please try again";
// }
// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").innerText = num1;
// document.getElementById("num2-el").innerText = num2;
// let sumEL = document.getElementById("sum-el");

// function add() {
//   let ad = num1 + num2;
//   sumEL.innerText += ad;

// }
// function subs() {
//   let su = num1 - num2;
//   sumEL.innerText += su;

// }
// function multiply() {
//   let mu = num1 * num2;
//   sumEL.innerHTML += mu;

// }
// function divide() {
//   let di = num1 / num2;
//   sumEL.innerHTML = di;

// }

// let fCard = 3;
// let sCard = 9;

// let sum = fCard + sCard;
// console.log(sum);
// if (sum < 21) {
//   console.log("do you want to draw new card");
// } else if (sum === 21) {
//   console.log("wohoo! you have won");
// } else if (sum > 21) {
//   console.log("sorry! you have lost");
// }

// let age = 22;
// if (age < 21) {
//   console.log("welcome! to the night club");
// } else {
//   console.log("sorry you cant enter the club");
// }
// let age = 100;

// if (age < 100) {
//   console.log("you are still youger for the card.");
// } else if (age === 100) {
//   console.log("here is your bday card from the king");
// } else {
//   console.log("you have alreay got your card in your 100th bday");
// }

// let firstCard = 13;
// let secondCard = 8;
// let sum = firstCard + secondCard;
// let hasBlackJack = false;

// if (sum <= 20) {
//   console.log("do you want to draw a new card");
// } else if (sum === 21) {
//   console.log("woohoo, you have won.");
//   console.log("hasBlackJack");
// } else {
//   console.log("you are out of the game.");
// }

// let firstCard = 13;
// let secondCard = 8;
// let sum = firstCard + secondCard;
// let isAlive = true;

// if (sum <= 20) {
//   console.log("do you want to draw a new card");
// } else if (sum === 21) {
//   console.log("woohoo, you have won.");
//   //console.log("hasBlackJack");
//   hasBlackJack = true;
// } else {
//   console.log("you are out of the game.");
//   isAlive = false;
// }
// console.log(isAlive);

// let firstCard = 13;
// let secondCard = 8;
// let sum = firstCard + secondCard;
// let message = " ";

// if (sum <= 20) {
//   console.log("do you want to draw a new card");
// } else if (sum === 21) {
//   console.log("woohoo, you have won.");
//   message = "we are logging out";
// } else {
//   console.log("you are out of the game.");
//   message = "we are logging out";
// }
// console.log(message);
//--------------------------//

// let firstCard = 8;
// let secondCard = 9;
// let cards = [firstCard, secondCard];
// let sum = firstCard + secondCard;
// let message = " ";

// //let cardsEL = document.getElementById("cards-el");

// messageEL = document.getElementById("message-el");
// sumEL = document.getElementById("sum-el");
// cardsEL = document.getElementById("cards");

// function startGame() {
//   renderGame();
// }

// function renderGame() {
//   if (sum <= 20) {
//     message = "you need to draw a new card";
//   } else if (sum === 21) {
//     message = "woohoo, you have won.";
//   } else {
//     message = "you are out of the game.";
//   }
//   messageEL.textContent = message;
//   sumEL.textContent = "sum: " + sum;
//   cardsEL.textContent = "cards: " + "" + cards[0] + " - " + cards[1];
// }

// function newCard() {
//   let newCard = 4;
//   sum += newCard;
//   cards.push(newCard);
//   console.log(cards);
//   renderGame();
// }

//--------------------------//

// let mySelf = [
//   "hello! my name is tahsin",
//   "hey hows everything",
//   "nothing much all good"
// ];
// // console.log(mySelf[1]);
// // console.log(mySelf[2]);
// // console.log(mySelf[0]);

// //mySelf.push("so what u guys are upto");
// //console.log(mySelf);
// mySelf.pop("so what u guys are upto");
// console.log(mySelf);

for (let count = 10; count <= 100; count += 10) {
  console.log(count);
}
