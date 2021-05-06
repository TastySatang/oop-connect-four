import Game from "./game.js";

class GameJsonDeserializer {
  constructor(json) {
    this.json = json;
  }

  deserialize() {
    let data = JSON.parse(this.json);
    let game = new Game(data.player1Name, data.player2Name)

    let currentIndexes = [5, 5, 5, 5, 5, 5, 5];
    let instructions = [];
    let valueToLookFor = 1;

    // without this, only iterates through once.
    while (currentIndexes[6] !== -1) {

      for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        let rowIndex = currentIndexes[columnIndex];

        // rowIndex reaches -1, and throws a console error. This makes sure we
        // keep iterating.
        if (rowIndex === -1) continue;
        let tokenValue = data.token[rowIndex][columnIndex]

        if (tokenValue === valueToLookFor) {
          // this is actually useless;
          instructions.push(columnIndex);

          // this populates the game through local storage.
          game.playInColumn(columnIndex)

          if (valueToLookFor === 1) {
            valueToLookFor = 2;
          } //has to be an else, or the code does not work.
          else {
            valueToLookFor = 1;
          }

          // going up the column, so - makes more sense.
          currentIndexes[columnIndex] -= 1;
        }
        // when it iterates to an empty place, instead of doing nothing forever -
        // it move on.
        else if (tokenValue === null) {
          currentIndexes[columnIndex] -= 1;
        }

      }
    }
    console.log(instructions)

    return game;
  }
}

export default GameJsonDeserializer
