class RowWinInspector {
  constructor(columns) {
    this.columns = columns;
  }

  inspect() {
    for (let i = 0; i <= 6; i++) {
      let pos1 = this.columns[0].getTokenAt(i);
      let pos2 = this.columns[1].getTokenAt(i);
      let pos3 = this.columns[2].getTokenAt(i);
      let pos4 = this.columns[3].getTokenAt(i);

      if (pos1 === pos2 && pos2 === pos3 && pos3 === pos4 && pos1 !== null) {
        return pos1;
      }
    }

    return 0;
  }
}


export default RowWinInspector
