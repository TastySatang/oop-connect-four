import Game from './game.js'

let game = undefined;


function updateUI() {
  let gameHolder = document.getElementById('board-holder')
  let gameName = document.getElementById('game-name')

  if (game) {
    gameHolder.classList.remove('is-invisible')
    gameName.innerHTML = game.getName()
  }
  // else {
  //   gameHolder.classList.add('is-invisible')
  // }

  let target = document.getElementById('click-targets')
  console.log(game.currentPlayer)
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

    game.playInColumn();
    updateUI();
  })
})
