let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let main = document.querySelector("main");

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked!");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const resetGame = ()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    main.classList.remove("hide-main");
}
//disable boxes after completion of game
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true
    }
};
//enable boxes after completion of game to start new game
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
//to show winner of the game
const showWinner =(winner)=>{
     msg.innerText=`Congrats, Winner is ${winner}`;
     msgContainer.classList.remove("hide");
     main.classList.add("hide-main");
     disableBoxes();
}
//to check the winner of the game
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner");
                showWinner(pos1val);
                
            }
        }

    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);