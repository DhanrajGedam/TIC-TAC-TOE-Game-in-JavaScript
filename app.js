let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#reset-btn");
let NewGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true; //when turn is O then the next turn will be X
const WinPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const ResetGame = ()=>{
    turnO = true;
    EnableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked");
        if(turnO === true){
            box.innerText = "O";
            turnO =false;
        }
        else{
            box.innerText = "X";
            turnO =true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const DisableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const EnableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    console.log(`Congratulations, The Winner is ${winner}`);
    msgContainer.classList.remove("hide");
    DisableBoxes();
}

const checkWinner = ()=>{
    for(let pattern of WinPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!=="" &&pos2val!=="" &&pos3val!==""){
            if(pos1val ===pos2val && pos2val === pos3val){
                console.log("You are the Winner " + pos1val);
                showWinner(pos1val);
            }
        }
    }
}

NewGameBtn.addEventListener("click",ResetGame);
restBtn.addEventListener("click", ResetGame);
