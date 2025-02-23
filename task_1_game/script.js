// Initializing necessary variables to keep track the flow of the program
let currL; // track of current level
let boxes = document.getElementsByClassName("box"); // all boxes 
let click; // track of number of clicks
let currScore = 0; // track of score
let currClick = 0; //track of currently clicked box
let clickedBoxes = []; // track of clicked boxes
let isStarted = false; // to check if the game has started or not

// checking if the user have some previous highscore on the browser or not

if (localStorage.getItem("highscore") == null) {
    localStorage.setItem("highscore", 0);
}

// setting the highscore

let highScore = localStorage.getItem("highscore");

// it will start on the start of the program

function start() {

    // adding event listener to the boxes to track which box is pressed

    document.addEventListener("keydown", () => {        

        if (!isStarted) { // checking if the game is started or not
            if (highScore != 0) {
                let m = document.getElementsByClassName("highscore"); // setting highscore

                // making effects to make the user feel like the game has started 

                m[0].classList.remove("invisible"); 
                m[1].classList.remove("invisible");
                m[1].innerHTML = highScore;
            }
            isStarted = true; // telling the game has started

            // setting display of hint and game-over

            document.querySelector(".game-over").classList.add("none");
            document.querySelector(".help-container").classList.remove("none");
            document.querySelector(".rules").classList.remove("invisible");

            // setting currrent score and clicks

            currL = 0;
            click = 0;
            clickedBoxes.length = 0;

            // displaying points

            let y = document.getElementsByClassName("points");
            y[0].classList.remove("invisible");
            y[1].classList.remove("invisible");
            y[1].textContent = '0';
            let x = document.getElementsByClassName("heading");
            x[0].classList.add("hide");
            x[1].classList.remove("hide");
            x[2].classList.remove("hide");
            setTimeout(() => { // delaing between pressing key and the game start
                game();
            }, 1000);
        }

    });

    for (let i = 0; i < 4; i++) {
        boxes[i].addEventListener("click", () => { // adding event listener click to the boxes
            if (isStarted) {  // checking the game is started or not
                boxes[i].classList.toggle("clicked");
                setTimeout(() => {
                    boxes[i].classList.toggle("clicked");
                }, 100);
                currClick = i; // updating current click
                if (check()) {
                    setTimeout(() => { // updating the game when one level is croosed
                        document.getElementsByClassName("points")[1].textContent = currL*10;
                        game();
                        document.getElementsByClassName("heading")[2].textContent = currL + 1;
                    }, 500);

                }
            }

        });
    }

    let help = document.getElementsByClassName("help"); // setting teh help icon
    console.log(help);
    help[0].addEventListener("click", () => {
        if (isStarted) { // checking the game is started or not

            // displaying tracked boxes

            help[0].classList.toggle("effect");
            help[1].textContent = `${clickedBoxes}`; 
            help[1].classList.toggle("invisible");
            setTimeout(() => {
                help[0].classList.toggle("effect");
                help[1].classList.toggle("invisible");
            }, 1000);
        }
    });

}

// to make the game in a new version

// async function game(){ 
//     for(let i = 0;i<5 ; i++){
//         let rand = Math.floor(Math.random()*4);
//         boxes[rand].classList.toggle("shadow");
//         await delay(250);
//         boxes[rand].classList.toggle("shadow");
//         await delay(100);
//     }
// }
// const delay = (delay)=> new Promise((resolve) => setTimeout(resolve, delay));

// starting game

function game() {
    let rand = Math.floor(Math.random() * 4); // selecting a random boc
    clickedBoxes.push(rand);    // adding the box to keep its track 
    boxes[rand].classList.toggle("shadow"); // giving effects to let the user know that the box has comed
    setTimeout(() => {
        boxes[rand].classList.toggle("shadow");
    }, 250);
}
function check() {

    // checking the game status if the user is playing right or not

    if (clickedBoxes[click] != currClick) { // to check he has selected correct or wrong box
        isStarted = false;
        showResult();
    }
    click++; // its like moving the index 
    if (click == clickedBoxes.length) { // checking if all required boxes have been clicked or not
        click = 0; // to make the user click all boxes again
        currL++; // updating level
        return true; // to start the next level game
    }
}
function showResult() {

    // when user clicked wrong box to show its result  and update highscore

    if (currL * 10 > highScore) {
        highScore = currL * 10;
        localStorage.setItem("highscore", highScore);
    }
    let x = document.getElementsByClassName("heading");
    x[0].classList.remove("hide");
    x[0].textContent = "Press any key to restart";
    x[1].classList.add("hide");
    x[2].classList.add("hide");
    x[2].innerHTML = "1";
    let o = document.querySelector(".container");

    // giving game over effect

    o.classList.toggle("over");
    setTimeout(() => {
        o.classList.toggle("over");
        document.querySelector(".game-over").classList.remove("none");
        document.querySelector(".help-container").classList.add("none");
        document.querySelector(".rules").classList.add("invisible");
    }, 100);
}