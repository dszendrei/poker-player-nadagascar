class Player {
  static get VERSION() {
    return '1.0';
  }

  static betRequest(gameState, bet) {
    let me = gameState.players[2];
    let myCards = me.hole_cards;
    let communityCards = gameState.community_cards;
    let isThereAPair=this.isThereAPair(myCards, communityCards);
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
      myBet = gameState.minimum_raise;
    }

    bet(myBet);
  }

  static isThereAPair(ourCards, communityCards){
    //Checks if there's a pair in our hands
    let isThereAPair = Boolean(myCards[0].rank === myCards[1].rank);

    //Checks if any of our cards match any card from the community cards
    for(let communityCard of communityCards){
      if(myCards[0].rank === communityCard.rank || myCards[1].rank === communityCard.rank){
        isThereAPair = true;
      }
    }

    return isThereAPair;
  }

  static isThereADoublePair(ourCards, communityCards){

  }

  static showdown(gameState) {
  }
}

module.exports = Player;
