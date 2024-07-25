let boxes = document.querySelectorAll(".box");
let resultbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg");
let msg1 = document.querySelector("#msg-1")

let turn = true;

const winpatt =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const  diableboxes = () =>{
    for(let box of boxes ){
        box.disabled = true;
    }
}
const  enableboxes = () =>{
    for(let box of boxes ){
        box.disabled = false;
        box.innerText = "";
    }
}
const resetgame = () =>{
    trun = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
            if (turn){
                box.innerText = "O";
                turn = false;
            }else{
                box.innerText = "X";
                turn = true;
            }
            box.disabled = true;
        checkWinner();
    });
});
const  Showwinner = (winner) => {
    msg1.innerText = `Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    diableboxes();
}

const checkWinner = ()=> {
    for(let pattern of winpatt){
      
          let pos1=  boxes[pattern[0]].innerText;
          let pos2=  boxes[pattern[1]].innerText;
          let pos3=  boxes[pattern[2]].innerText;
     if (pos1 != "" && pos2 != "" && pos3 != ""){
        if (pos1 === pos2 && pos2 === pos3){
        console.log("winner", pos1);
        Showwinner(pos1);
        }
     }
        }

};

newbtn.addEventListener("click",resetgame);
resultbtn.addEventListener("click",resetgame);