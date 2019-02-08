class Player {
  static get VERSION() {
    return '1.0';
  }

  static betRequest(gameState, bet) {
    console.log(gameState.players[2].stack);
    bet(gameState.players[2].stack);

    let me = gameState.players[2];
    let myCards = me.hole_cards;
    let communityCards = gameState.community_cards;
    let myBet = 0;

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
