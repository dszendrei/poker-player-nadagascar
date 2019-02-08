class Player {
  static get VERSION() {
    return '1.0';
  }

  static betRequest(gameState, bet) {
    console.log("1.: " + gameState.minimum_raise);
    console.log("2.: " + gameState["minimum_raise"]);
    console.log("Our player: " + gameState["players"][2]);
    bet(gameState.minimum_raise);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
