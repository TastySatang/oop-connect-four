import Column from './column.js'
class Game {
  constructor(player1, player2, ) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = 1;
    this.columns = [new Column, new Column, new Column, new Column, new Column, new Column, new Column]; 
  }

  getName() {
    return `${this.player1} vs ${this.player2}`
  }

  playInColumn(index) {
    this.columns[index].add(this.currentPlayer)
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }

  getTokenAt(rowIndex, columnIndex){
    return this.columns[columnIndex].getTokenAt(rowIndex);
  }

  isColumnFull(columnIndex){
    return this.columns[columnIndex].isFull();
  }



}

export default Game;
