var id = 0;

class Card {

    constructor(){
        this._id = id++;
        setName(name); //TODO: name – hidden – string
        setColumn(column); //TODO: column - hidden – number
    }

    setName(name){
        this._name = name;
    }

    setColumn(column){
        this._column = column;
    }

    get Column(){
        return this._column;
    }

    get Name() {
        return this._name;
    }

    get Id() {
        return this._id;
    }
}
