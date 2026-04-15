let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turnO = true;// playerx, player0

const WinPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        // if(turnO){
        //     box.innerText = "O";
        //     turnO = false;
            

        // }else {
        //     box.innerText = "X";
        //     turnO = true;

        // }
        if(turnO){
            box.innerText = "O";
            box.classList.add("O-style");
            box.classList.remove("x-style");
            turnO=false;

        }
        else{
             box.innerText = "x";
            box.classList.add("x-style");
            box.classList.remove("O-style");
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
            });
});
const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;

    }
};
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
};

const showWinner = (winner) =>{
    msg.innerText =`congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
disableBoxes();
};

// const noWinner=()=>{
//     msg.innerText= "no any one winner try again";
//     msgContainer.classList.remove("hide");
// };


       const checkWinner = ()=>{
          
            for(let pattern of WinPatterns){
              
            let pos1val= boxes[pattern[0]].innerText;
             let pos2val= boxes[pattern[1]].innerText;
            let pos3val= boxes[pattern[2]].innerText;
           
             if(pos1val != "" && pos2val != "" && pos3val != ""){
     if(pos1val===pos2val && pos2val===pos3val){
     console.log("Winner",pos1val);
    showWinner(pos1val);
        }
    }

        
}

    
    // let filledBoxes =0;
    // for (let box of boxes){
    //     if (box.innerText !== ""){
    //         filledBoxes++;
    //     }
    // }
    //    if (filledBoxes===9){
    //     noWinner();
    //    }
      };
        
        
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


