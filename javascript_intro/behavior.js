//add a variable that references the <p> element below
let paragraph = document.querySelector("p");

//change the text inside of the <p>
paragraph.innerHTML += " Archer";

//put a random number in the <span> element
let span = document.querySelector("span.number");
span.innerHTML = Math.random();