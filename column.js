class Column {
    constructor(){
        this.token = [null, null, null, null, null, null];
    }

    add(playerNum){
        for(let i = 5; i >= 0; i--){
            if(this.token[i] === null){
                this.token[i] = playerNum; 
        
                break
            }
        }
    }

    getTokenAt(rowNum){
        return this.token[rowNum];
    }

    isFull(){
        return !this.token.includes(null);
    }
}

export default Column;
