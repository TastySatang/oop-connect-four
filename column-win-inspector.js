class ColumnWinInspector {
  constructor(Column) {
    this.Column = Column;
  }

  inspect() {
    for (let i = 0; i < 3; i++) {
      let pos1 = this.Column.getTokenAt(i);
      let pos2 = this.Column.getTokenAt(i + 1);
      let pos3 = this.Column.getTokenAt(i + 2);
      let pos4 = this.Column.getTokenAt(i + 3);

      if (pos1 === pos2 && pos2 === pos3 && pos3 === pos4 && pos1 !== null) {
        return pos1;
      }
    }

    return 0;
  }
}

export default ColumnWinInspector;
