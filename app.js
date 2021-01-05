
let boxes = document.querySelectorAll(".gamePlace");
let nextPlayer = document.querySelector("#status");
let reset = document.querySelector("#Reset");
let changePlayer = document.querySelector("#changePlayer");

function move(n){

    n = n.target;
    if(n.innerHTML == ''){
        n.innerHTML = nextPlayer.innerHTML;
        nextPlayer.innerHTML = nextPlayer.innerHTML == 'O' ? 'X' : 'O';
    }  
}

reset.addEventListener("click",resetGame);

function resetGame(){
    boxes.forEach(function (box){
        box.innerHTML = ""
    })
    nextPlayer.innerHTML = "X"
}

changePlayer.addEventListener("click",playerChanger);

function playerChanger(){
    if( boxes.forEach()){
        box.innerHTML == ""
            nextPlayer.innerHTML = nextPlayer.innerHTML == 'O' ? 'X' : 'O';
    }
}

function checkWinner(){
    // TODO
}




boxes.forEach(function (box){
    box.addEventListener("click", move);
})
