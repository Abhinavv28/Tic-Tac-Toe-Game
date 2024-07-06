let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newbtn");
let message = document.querySelector(".message");
let msg = document.querySelector("#msg");

let turnO = true;
let counter = 0;

// Array of Win logic
const WinPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// Reset Button Code
const resetGame = () => {
    turnO = true;
    enableBoxes();
    message.classList.add("hide");
}

// Box Click Code
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        counter++;
        console.log("Box was Clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color ="#FFCC00";
            turnO = true;
        }
        if(counter === 9){
            msg.innerText = "This is a tie";
            message.classList.remove("hide");
        }

        box.disabled = true;
        checkWinner();
    });
});


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const showWinner =(winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    message.classList.remove("hide");
    disableBoxes();
};

// Winner Check logic
const checkWinner = () => {
    for(let pattern of WinPatterns) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText, 
            boxes[pattern[1]].innerText, 
            boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

// New and reset button
newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);