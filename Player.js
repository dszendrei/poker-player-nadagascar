class Player {
  static get VERSION() {
    return '1.0';
  }

  static betRequest(gameState, bet) {
    console.log(gameState.players[2].stack);
    bet(gameState.players[2].stack);

    let me = gameState.players[2];
    console.log(me.name);
    let myCards = me.hole_cards;
    console.log(myCards);
    let communityCards = gameState.community_cards;
    console.log(communityCards);
    // let myBet = 0;

    console.log(myCards[0].rank === myCards[1].rank);
    if(myCards[0].rank === myCards[1].rank){
      if(gameState.minimum_raise * 1.5 > me.stack){
        bet(me.stack);
      } else {
        bet(gameState.minimum_raise*1.5);
      }
    } else {
      bet(10);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
