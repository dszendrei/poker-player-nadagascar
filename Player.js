class Player {
  static get VERSION() {
    return '1.0';
  }

  static betRequest(gameState, bet) {
    console.log(gameState.players[2].stack);
    bet(gameState.players[2].stack);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
