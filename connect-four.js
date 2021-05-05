import Game from './game.js'

let game = undefined;


function updateUI() {
  let gameHolder = document.getElementById('board-holder')
  let gameName = document.getElementById('game-name')

  if (game) {
    gameHolder.classList.remove('is-invisible')
    gameName.innerHTML = game.getName()
  }

  for(let columns = 0; columns <= 6; columns++){
    const currentColumn = document.getElementById(`column-${columns}`)
    if(game.isColumnFull(columns)){
      currentColumn.classList.add("full")
    }else{
      currentColumn.classList.remove("full")
    }
  }

  for(let row = 0; row <= 5; row++){
    for(let column = 0; column <= 6; column++){
      const square = document.getElementById(`square-${row}-${column}`)
      square.innerHTML = ""; 
      const tokenMethod = game.getTokenAt(row, column)
      
      if( tokenMethod === 1){
        const actualToken = document.createElement("div")
        actualToken.classList.add("token", "black")
        square.appendChild(actualToken);

      } if(tokenMethod === 2) {
        const actualToken = document.createElement("div")
        actualToken.classList.add("token", "red")
        square.appendChild(actualToken);
      }
    }
  }

  let target = document.getElementById('click-targets')
  if (game.currentPlayer === 2) {

    target.classList.add('red')
    target.classList.remove('black');
    console.log(`i'm working`)


  } else {

    target.classList.add('black')
    target.classList.remove('red');
    console.log(`i'm working`)

  }
}

//does new game;
window.addEventListener("DOMContentLoaded", e => {
  let player1name = document.getElementById('player-1-name');
  let player2name = document.getElementById('player-2-name');
  let newGameButton = document.getElementById('new-game');


  player1name.addEventListener('keyup', event => {
    if (player2name.value.length > 0) {
      newGameButton.disabled = false;
    }
  })

  player2name.addEventListener('keyup', event => {
    if (player1name.value.length > 0) {
      newGameButton.disabled = false;
    }
  })

  newGameButton.addEventListener('click', e => {
    game = new Game(player1name.value, player2name.value);

    player1name.value = '';
    player2name.value = '';
    newGameButton.disabled = false;
    updateUI();
  })

  let clickTarget = document.getElementById('click-targets')
  clickTarget.addEventListener('click', e => {

    const targetId = e.target.id;
    let columnIndex;

    if(targetId.startsWith("column-")){
      columnIndex = Number.parseInt(targetId[targetId.length - 1]);
    }
    game.playInColumn(columnIndex);
    updateUI();
  })
})
