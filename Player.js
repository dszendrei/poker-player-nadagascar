class Player {
  static get VERSION() {
    return '1.0';
  }

  static betRequest(gameState, bet) {
    let me = gameState.players[2];
    let ourCards = me.hole_cards;
    let communityCards = gameState.community_cards;
    let isThereAPair=this.isThereAPair(ourCards, communityCards);
    let isThereDrill = this.isThereDrill(ourCards, communityCards);
    let myBet = 0;

    console.log("Our stack: " + gameState.players[2].stack);
    console.log("Our name: " + me.name);
    console.log("Our cards: " + ourCards[0] + ourCards[1]);
    console.log("Community cards: " + communityCards);

    for(let communityCard of communityCards){
      if(ourCards[0].rank === communityCard.rank || ourCards[1].rank === communityCard.rank){
        isThereAPair = true;
      }
    }

    console.log("Is there a pair?: " + isThereAPair);
    console.log("Is there a drill?: " + isThereDrill);


    if (isThereAPair) {
      if (gameState.minimum_raise * 1.5 > me.stack) {
        myBet = me.stack;
      } else {
        myBet = gameState.minimum_raise * 1.5;
      }
    } else if (isThereDrill) {
      myBet = me.stack;
    } else {
      myBet = gameState.minimum_raise;
    }

    bet(myBet);
  }

  static isThereAPair(ourCards, communityCards){
    //Checks if there's a pair in our hands
    let isThereAPair = Boolean(ourCards[0].rank === ourCards[1].rank);

    //Checks if any of our cards match any card from the community cards
    for(let communityCard of communityCards){
      if(ourCards[0].rank === communityCard.rank || ourCards[1].rank === communityCard.rank){
        isThereAPair = true;
      }
    }

    return isThereAPair;
  }

  static isThereADoublePair(ourCards, communityCards){
    //Check if our cards match
    let isThereADoublePair = Boolean(ourCards[0].rank !== ourCards[1].rank);
    //If not, checks if both of our cards match any other card in the community card
    if(isThereADoublePair){}

  }

  static isThereDrill(ourCards, communityCards){
    let count0 = 0;
    let count1 = 0;
    for(let communityCard of communityCards){
      if(ourCards[0].rank === communityCard.rank){
        count0++;
      }
      if(ourCards[1].rank === communityCard.rank){
        count1++;
      }
    }
    return (count1 === 2 || count0 === 2)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
