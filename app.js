/*
<table style="margin: auto;">
    <tr>
        <th colspan="3" id="title">Tic-Tac-Toe</th>
    </tr>

    <tr>
        <th id="currentPlayer">Change player</th>
        <th><span id="status">X</span> is next</th>
        <th id="reset">Reset</th>
    </tr>

    <tr>
        <td class="gamePlace V1 H1 D1"></td>
        <td class="gamePlace V2 H1"></td>
        <td class="gamePlace V3 H1 D2"></td>
    </tr>

    <tr>
        <td class="gamePlace V1 H2"></td>
        <td class="gamePlace V2 H2 D1 D2"></td>
        <td class="gamePlace V3 H2"></td>
    </tr>

    <tr>
        <td class="gamePlace V1 H3 D2"></td>
        <td class="gamePlace V2 H3"></td>
        <td class="gamePlace V3 H3 D1"></td>
    </tr>
</table>
*/

let table = document.createElement("table");
table.setAttribute("style","margin:auto");
document.body.appendChild(table);

let tr = []
for (let i = 0; i < 5; i++) {
    tr.push(document.createElement("tr"));
}

let td = []
for (let i = 0; i < 9; i++) {
    td.push(document.createElement("td"));
}

let th = []
for (let i = 0; i < 4; i++) {
    th.push(document.createElement("th"));
}

th[0].setAttribute('colspan', 3);
th[0].setAttribute('id', 'title');
th[0].innerHTML = 'Tic-Tac-Toe';
tr[0].appendChild(th[0]);
table.appendChild(tr[0]);

th[1].setAttribute('id', 'currentPlayer');
th[1].innerHTML = 'Change Player';
tr[1].appendChild(th[1]);

const span = document.createElement("span");
span.innerHTML = "X";
span.setAttribute("id", "status");
th[2].innerHTML = span.outerHTML + ' is next';
tr[1].appendChild(th[2]);

th[3].setAttribute('id', 'reset');
th[3].innerHTML = 'Reset';
tr[1].appendChild(th[3]);

td[0].setAttribute('class', 'gamePlace V1 H1 D1');
tr[2].appendChild(td[0]);

td[1].setAttribute('class', 'gamePlace V2 H1');
tr[2].appendChild(td[1]);

td[2].setAttribute('class', 'gamePlace V3 H1 D2')
tr[2].appendChild(td[2]);

td[3].setAttribute('class', 'gamePlace V1 H2');
tr[3].appendChild(td[3]);

td[4].setAttribute('class', 'gamePlace V2 H2 D1 D2');
tr[3].appendChild(td[4]);

td[5].setAttribute('class', 'gamePlace V3 H2');
tr[3].appendChild(td[5]);

td[6].setAttribute('class', 'gamePlace V1 H3 D2');
tr[4].appendChild(td[6]);

td[7].setAttribute('class', 'gamePlace V2 H3');
tr[4].appendChild(td[7]);

td[8].setAttribute('class', 'gamePlace V3 H3 D1');
tr[4].appendChild(td[8]);




table.appendChild(tr[1]);
table.appendChild(tr[2]);
table.appendChild(tr[3]);
table.appendChild(tr[4]);


































let boxes = document.querySelectorAll(".gamePlace");
let nextPlayer = document.querySelector("#status");
let reset = document.querySelector("#reset");
let currentPlayer = document.querySelector("#currentPlayer");
let gameStarted = false;
let moveCount = 0;
let winnerFound = false;
let comboNames = ['.V1', '.V2', '.V3', '.H1', '.H2', '.H3', '.D1', '.D2']
let combos = comboNames.map((className) => {
    return document.querySelectorAll(className);
})



const move = n => {
    gameStarted = true;
    n = n.target;
    if(!winnerFound){
        if(n.innerHTML == ''){
            moveCount++;
            n.innerHTML = nextPlayer.innerHTML;
            nextPlayer.innerHTML = nextPlayer.innerHTML == 'O' ? 'X' : 'O';
        }
        if(moveCount >= 5 ){
            const s = checkWinner()
            if(s) {
                winnerFound = true;
                alert(s);
            }
            else if(moveCount == boxes.length){
                winnerFound = true;
                alert("Game is tie");
            }
        }
    }
}

const resetGame = () => {
    moveCount=0;
    gameStarted = false;
    winnerFound = false;
    boxes.forEach((box) => {
        box.innerHTML = ""
    })
    nextPlayer.innerHTML = "X"
}

const changePlayer = () => {
    if(!gameStarted){
        nextPlayer.innerHTML = nextPlayer.innerHTML == 'O' ? 'X' : 'O';
    }         
}

const checkWinner = () => {
    for (let i = 0; i < combos.length; i++){
        for (let j = 1; j < combos[i].length; j++){
            if (combos[i][j].innerHTML !== combos[i][j-1].innerHTML){
                break;
            }
            if (combos[i][j].innerHTML && j + 1  === combos[i].length){
                return combos[i][j].innerHTML;
            }
        }
    }
}

reset.addEventListener("click",resetGame);

currentPlayer.addEventListener("click",changePlayer);

boxes.forEach((box) => {
    box.addEventListener("click", move);
})
