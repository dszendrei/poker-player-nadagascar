class Player {
  static get VERSION() {
    return '1.0';
  }

  static betRequest(gameState, bet) {
    bet(0);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
