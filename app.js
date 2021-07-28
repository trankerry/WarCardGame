let dealersCards = [];
let playersCards = [];

let ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
let suits = ['C','S','D','H'];
let deck = [];

for(let i = 0; i < ranks.length; i++) {
    for(let j = 0; j < suits.length; j++) {
        deck.push(ranks[i] + suits[j])
    }
}

