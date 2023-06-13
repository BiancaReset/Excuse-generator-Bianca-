/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["My computer", "The waiter", "My watch", "The car"];
let action = ["fell", "stole", "loosened", "caught fire"];
let what = [
  "inside the pool",
  "money from the guests",
  "and dissapeared",
  "and exploded"
];
let when = [
  "before the class",
  "on Sunday night",
  "when I finished",
  "during my skuba lessons",
  "in the highway"
];
function getRandomInt(max) {
  let random = Math.random() * max;
  let randomInt = Math.floor(random);
  return randomInt;
}
let randomWho = getRandomInt(who.length);
let randomAction = getRandomInt(action.length);
let randomWhat = getRandomInt(what.length);
let randomWhen = getRandomInt(when.length);
console.log(
  `${who[randomWho]} ${action[randomAction]}, ${what[randomWhat]}, ${when[randomWhen]}`
);
document.getElementById(
  "excuse"
).innerHTML = `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;
