export declare type Entity = 'author' | 'category' | 'country' | 'book' | 'medium' | 'cover';


export class Repository {
  public initialData = {
    author: [
      { firstName: 'firstName', surname: 'surname', country: 'country'},
      { firstName: 'asdf', surname: 'vdf', country: 'vtr'}
    ],
    category: [{ name: 'category'}, {name: 'sadf'},],
    country: [{ origName: 'origName', flag: 'csd'}, { origName: 'asdf', flag: 'csd'}],
    book: [{

      title: 'asdf',
      author: 'asdf',
      isbn: 'asdf',
      category: 'asdf',
      medium: 'asdf',
      cover: 'asdf',
      price: 'asdf',
      coverImg: 'asdf',
    }, {

      title: 'Really looooooooooooong my awesome title',
      author: 'asdf',
      isbn: 'asdf',
      category: 'asdf',
      medium: 'asdf',
      cover: 'asdf',
      price: 'asdf',
      coverImg: 'asdf',
    },],
    medium: [{ name: 'vdsdd'}],
    cover: [{ name: 'asdf'}],
  };

  constructor(){
    this.init()
  }
  init() {
    localStorage.clear()
    for (let entityType in this.initialData) {
      for (let entity of this.initialData[entityType]) {
        this.save(<Entity>entityType, entity);
      }
    }
  }

  getAll(element: string) {
    let objectArrayToArray = function(obj){
      let arr=[]
      Object.keys(obj).forEach(e =>arr[+e]=obj[e])
      return arr
    }
    let any = JSON.parse(localStorage[element]);
    let objectArray = objectArrayToArray(any);
    console.log(objectArray);
    return objectArray
  }


  save(entity: Entity, data: any): void {
    let entities = localStorage[entity];
    if (!entities) {
      localStorage[entity]=JSON.stringify({})
    }
    let localStorageEntity = JSON.parse(localStorage[entity]);
    let nextId = Object.keys(localStorageEntity).length;
    localStorageEntity[nextId]=data;
    localStorage[entity]= JSON.stringify(localStorageEntity)
  }
  update(entity: Entity, id: number, data: any): void {
    let entities = localStorage[entity];
    if (!entities) {
      localStorage[entity]=JSON.stringify({})
    }
    let localStorageEntity = JSON.parse(localStorage[entity]);
    localStorageEntity[id]=data;
    localStorage[entity]= JSON.stringify(localStorageEntity)
  }

  delete(entity: Entity, id: number): any {
    let entities = localStorage[entity];
    if (!entities) {
      return;
    }
    let localStorageEntity = JSON.parse(localStorage[entity]);
    delete localStorageEntity[id]
    localStorage[entity]= JSON.stringify(localStorageEntity)
  }

  get(entity: Entity, id: number): any {
    let entities = localStorage[entity];
    if (entities) {
      return JSON.parse(entities)[id]
    }
    return null
  }

}
