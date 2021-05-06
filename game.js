import ColumnWinInspector from './column-win-inspector.js';
import Column from './column.js'
import DiagonalWinInspector from './diagonal-win-inspector.js';
import RowWinInspector from './row-win-inspector.js';


class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = 1;
    this.columns = [new Column, new Column, new Column, new Column, new Column, new Column, new Column];
    this.winnerNumber = 0;
  }

  getName() {
    if (this.winnerNumber === 3) {
      return `${this.player1} ties with ${this.player2}`
    }

    if (this.winnerNumber === 1) {
      return `${this.player1} wins!`
    }

    if (this.winnerNumber === 2) {
      return `${this.player2} wins!`
    }

    return `${this.player1} vs ${this.player2}`
  }

  playInColumn(index) {
    this.columns[index].add(this.currentPlayer)
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }

    this.checkForTie();
    this.checkForColumnWin();
    this.checkForRowWin();
    this.checkForDiagonalWin()
  }

  checkForTie() {
    const checkForTie = this.columns.every(e => e.isFull())
    if (checkForTie) {
      this.winnerNumber = 3;
    }
  }

  getTokenAt(rowIndex, columnIndex) {
    return this.columns[columnIndex].getTokenAt(rowIndex);
  }

  isColumnFull(columnIndex) {
    if (this.winnerNumber === 1 || this.winnerNumber === 2) return true;
    return this.columns[columnIndex].isFull();
  }

  checkForColumnWin() {
    if (this.winnerNumber !== 0) return

    for (let i = 0; i < 7; i++) {
      let ele = this.columns[i];

      const checkForWin = new ColumnWinInspector(ele);
      if (checkForWin.inspect() === 1) {
        this.winnerNumber = 1;
      }
      if (checkForWin.inspect() === 2) {
        this.winnerNumber = 2;
      }
    }
  }

  checkForRowWin() {
    if (this.winnerNumber !== 0) return;

    for (let i = 0; i <= 3; i++) {
      let ele = this.columns.slice(i, i + 4);
      let checkForWin = new RowWinInspector(ele);
      if (checkForWin.inspect() === 1) {
        this.winnerNumber = 1;
      }

      if (checkForWin.inspect() === 2) {
        this.winnerNumber = 2;
      }
    }
  }

  checkForDiagonalWin() {
    if (this.winnerNumber !== 0) return;

    for (let i = 0; i <= 3; i++) {
      let ele = this.columns.slice(i, i + 4);
      let checkForWin = new DiagonalWinInspector(ele);
      if (checkForWin.inspect() === 1) {
        this.winnerNumber = 1;
      }

      if (checkForWin.inspect() === 2) {
        this.winnerNumber = 2;
      }
    }
  }
}

export default Game;
