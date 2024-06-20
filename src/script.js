let computerOne = document.getElementById("one");
let computerTwo = document.getElementById("two");
let computerThree = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

four.addEventListener("click", function() {
    let number = (Math.floor(Math.random() * 3)) + 1;
    p2.innerHTML = "Rock Selected";
    setTimeout(() => {
        if (number == 1) {
            p1.innerHTML = "Rock Selected";
            seven.innerHTML = "Match draw !!";
        } else if (number == 2) {
            p1.innerHTML = "Paper Selected";
            seven.innerHTML = "Computer wins, you lost &#128542 !!";
        } else {
            p1.innerHTML = "Scissor Selected";
            seven.innerHTML = "Congratulation, you win &#129395 !!";
        }
    }, 1000);
});

five.addEventListener("click", function() {
    let number = (Math.floor(Math.random() * 3)) + 1;
    p2.innerHTML = "Paper Selected";
    setTimeout(() => {
        if (number == 1) {
            p1.innerHTML = "Rock Selected";
            seven.innerHTML = "Congratulation, you win &#129395 !!";
        } else if (number == 2) {
            p1.innerHTML = "Paper Selected";
            seven.innerHTML = "Match draw !!";
        } else {
            p1.innerHTML = "Scissor Selected";
            seven.innerHTML = "Computer wins, you lost &#128542!!";
        }
    }, 1000);
});

six.addEventListener("click", function() {
    let number = (Math.floor(Math.random() * 3)) + 1;
    p2.innerHTML = "Scissor Selected";
    setTimeout(() => {
        if (number == 1) {
            p1.innerHTML = "Rock Selected";
            seven.innerHTML = "Computer wins, you lost &#128542!!";
        } else if (number == 2) {
            p1.innerHTML = "Paper Selected";
            seven.innerHTML = "Congratulation, you win &#129395 !!";
        } else {
            p1.innerHTML = "Scissor Selected";
            seven.innerHTML = "Match draw !!";
        }
    }, 1000);
});
