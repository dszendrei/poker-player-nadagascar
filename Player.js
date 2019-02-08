class Player {
  static get VERSION() {
    return '1.0';
  }

  static betRequest(gameState, bet) {
    console.log(gameState.minimum_raise);
    bet(gameState.minimum_raise);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
