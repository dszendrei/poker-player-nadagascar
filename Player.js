class Player {
  static get VERSION() {
    return '1.0';
  }

  static betRequest(gameState, bet) {
    let me = gameState.players[2];
    let myCards = me.hole_cards;
    let communityCards = gameState.community_cards;
    let isThereAPair=Boolean(myCards[0].rank === myCards[1].rank);
    let myBet = 0;

    console.log("Our stack: " + gameState.players[2].stack);
    console.log("Our name: " + me.name);
    console.log("Our cards: " + myCards[0] + myCards[1]);
    console.log("Community cards: " + communityCards);

    for(let communityCard of communityCards){
      if(myCards[0].rank === communityCard.rank || myCards[1].rank === communityCard.rank){
        isThereAPair = true;
      }
    }

    console.log("Is there a pair?: " + isThereAPair);


    if (isThereAPair) {
      if (gameState.minimum_raise * 1.5 > me.stack) {
        myBet = me.stack;
      } else {
        myBet = gameState.minimum_raise * 1.5;
      }
    } else {
      myBet = 10;
    }

    bet(myBet);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
