class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {

    // returns undefined if no argument is passed to the function 

    if(!this.cards) {
      return undefined;
    }

    // Loop to iterate the cards array
    for(let i = 0; i < this.cards.length; i += 1) {
  
    // Saves current item to a temp var
      let temp = this.cards[i];
    
    // Generates a random number in the range of the array
      let r = Math.floor(Math.random() * this.cards.length);

    // Get the item at the random index and ..
    // replace the current item with the random item
      this.cards[i] = this.cards[r];

    // Replace the current item with the current item as temp
      this.cards[r] = temp;
    }

    return this.cards;
  }


  checkIfPair(card1, card2) {
    
  // Update pairsClicked with +1 and returns false if there is no pair 
    if(card1 !== card2 ) {
      this.pairsClicked++;
      return false;
    }

  // Update pairsClicked and pairsGuessed by +1 
  // returns returns true, because of pair 
    else {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    }


  }

  checkIfFinished() {

    

    if( this.pairsGuessed < 8) {
      return false;
    }
   
    else {
     
      return true;
    }
  }
}
