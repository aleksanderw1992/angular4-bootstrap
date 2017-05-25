import {Entity} from "./repository.service";
export class SequenceHolder{
  private _sequences={};

  get(entity:Entity){
    if(!this._sequences[entity]){
      this._sequences[entity]= new Sequence();
    }
    return this._sequences[entity];
  }
}
export class Sequence{
  private counter = 0;
  val(){
    return this.counter;
  }
  getAndIncrease(){
    return this.counter++
  }
}
