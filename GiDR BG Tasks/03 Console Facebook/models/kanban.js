class Kanban {

    constructor(){
        this._cards = [];//TODO o	cards – hidden – array
    }

    addCard(card) {
        this._cards.push(card);//TODO 	addCard – params(card) – Object card
    }

    get Cards() {
        return this._cards;
    }
}