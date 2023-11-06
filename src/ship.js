export class Ship {

  constructor(length){
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit(){
    return this.hits++;
  }

  getHits(){
    return this.hits;
  }

  isSunk(){
    return this.length === this.getHits() ? true : false; 
  }
}
