class Player {
  static get VERSION() {
    return '1.0';
  }

  static betRequest(gameState, bet) {
    let me = gameState.players[2];
    let ourCards = me.hole_cards;
    let communityCards = gameState.community_cards;
    let isThereAPair=this.isThereAPair(ourCards, communityCards);
    let isThereADoublePair = this.isThereADoublePair(ourCards, communityCards);
    let isThereDrill = this.isThereDrill(ourCards, communityCards);
    let myBet = 0;

    console.log("Our stack: " + gameState.players[2].stack);
    console.log("Our name: " + me.name);
    console.log("Our cards: " + ourCards[0].rank + ourCards[1].rank);
    for(let communityCard of communityCards){
      console.log("Community card: " + communityCard.rank);
    }

    console.log("Is there a pair?: " + isThereAPair);
    console.log("Is there a double pair?: " + isThereADoublePair);
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

    if (ourCards[1].rank < 7 && ourCards[0].rank < 7) {
      if (isThereAPair && gameState.minimum_raise < me.stack*0.3) {
        myBet = gameState.minimum_raise;
        if (communityCards.length > 2) myBet = 0
      } else {myBet = 0}
      if (isThereADoublePair && gameState.minimum_raise < me.stack*0.5){
        myBet = (gameState.minimum_raise*1.5 > me.stack ? me.stack : gameState.minimum_raise*1.5);
      } else {myBet = 0}
    } if (isThereDrill){
      myBet = me.stack;
    } else if (ourCards[1].rank < 7 || ourCards[0].rank < 7){
      if (isThereAPair && gameState.minimum_raise < me.stack*0.4) {
        myBet = gameState.minimum_raise;
      } else {myBet = 0}
      if (isThereADoublePair && gameState.minimum_raise < me.stack*0.5){
        myBet = (gameState.minimum_raise*1.6 > me.stack ? me.stack : gameState.minimum_raise*1.6);
      } else {myBet = 0}
    } if (isThereDrill){
      myBet = me.stack;
    }

    if (!isThereDrill || !isThereADoublePair || !isThereAPair){
      if (ourCards[1].rank < 7 || ourCards[0].rank < 7){
        if (gameState.minimum_raise < me.stack * 0.1){
          myBet = gameState.minimum_raise;
        }
        if (communityCards.length > 2){
          myBet = 0;
        }
      }
    }

    bet(myBet);
  }


  static chanceOfthePair(ourCards){
    /*Winner chance of the first pair in our hands*/
    let goodCards = ["A","K","Q","J",10,9];
    for (let elem of goodCards){
      if (elem == ourCards[0].rank || elem == ourCards[1].rank){
        /* Chance is bigger than 70%*/

      }else{
        /*Chance is too small*/
        return 0
      }
    }
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
    let identicalCardsInHand = Boolean(ourCards[0].rank === ourCards[1].rank);
    let isThereADoublePair = false;
    let isThereOnePair = false;
    let isThereAnotherPair = false;
    //If not, checks if both of our cards match any other card in the community card
    if(!identicalCardsInHand){
      for(let communityCard of communityCards){
        if(ourCards[0].rank === communityCard.rank){
          isThereOnePair = true;
        }
        if(ourCards[1].rank === communityCards){
          isThereAnotherPair = true;
        }
      }
      if(isThereOnePair && isThereAnotherPair){
        isThereADoublePair = true;
      }
    }

    return isThereADoublePair;

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
      if(ourCards[0].rank === ourCards[1].rank && ourCards[1].rank === communityCard.rank) {
        return true;
      }
    }
    return (count1 === 2 || count0 === 2)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
