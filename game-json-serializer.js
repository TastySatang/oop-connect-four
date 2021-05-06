class GameJsonSerializer {
  constructor(game) {
    this.game = game;
  }

  serialize() {
    const data = {
      player1Name: this.game.player1,
      player2Name: this.game.player2,
      token: [[], [], [], [], [], []]
    };


    for (let col = 0; col < 7; col++) {
      for (let row = 0; row < 6; row++) {

        let tokenValue = this.game.getTokenAt(row, col);
        data.token[row][col] = tokenValue;
      }
    }

    return JSON.stringify(data);
  }
}

export default GameJsonSerializer
