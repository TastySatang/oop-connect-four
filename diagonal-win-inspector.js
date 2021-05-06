class DiagonalWinInspector {
  constructor(columns) {
    this.columns = columns;
  }

  inspect() {
    for (let i = 0; i < 3; i++) {
      let pos1 = this.columns[0].getTokenAt(i);
      let pos2 = this.columns[1].getTokenAt(i + 1);
      let pos3 = this.columns[2].getTokenAt(i + 2);
      let pos4 = this.columns[3].getTokenAt(i + 3);

      if (pos1 === pos2 && pos2 === pos3 && pos3 === pos4 && pos1 !== null) {
        return pos1;
      }

      pos1 = this.columns[0].getTokenAt(i + 3);
      pos2 = this.columns[1].getTokenAt(i + 2);
      pos3 = this.columns[2].getTokenAt(i + 1);
      pos4 = this.columns[3].getTokenAt(i);

      if (pos1 === pos2 && pos2 === pos3 && pos3 === pos4 && pos1 !== null) {
        return pos1;
      }
    }

    return 0;
  }
}

export default DiagonalWinInspector;
