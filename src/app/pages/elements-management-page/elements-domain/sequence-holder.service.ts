import {Entity} from "./repository.service";
export class SequenceHolder{
  private _sequences={};

  get(entity:Entity){
    if(!this._sequences[entity]){
      this._sequences[entity]= new Sequence(entity);
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
  constructor(entity:Entity){
    let entities = localStorage[entity];
    if (entities && entities!=="{}") {
      let localStorageEntity = JSON.parse(localStorage[entity]);
      let keys = Object.keys(localStorageEntity)
      if(keys.length>0){
        this.counter=+keys[keys.length-1]+1;
      }
    }
  }
}
