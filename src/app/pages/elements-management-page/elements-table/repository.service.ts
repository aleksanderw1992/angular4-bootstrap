export declare type Entity = 'author' | 'category' | 'country' | 'book' | 'medium' | 'cover';


export class Repository {
  public initialData = {
    author: [
      {id: 1, firstName: 'firstName', surname: 'surname', country: 'country'},
      {id: 2, firstName: 'asdf', surname: 'vdf', country: 'vtr'}
    ],
    category: [{id: 1, name: 'category'}, {name: 'sadf'},],
    country: [{id: 1, origName: 'origName', flag: 'csd'}, {id: 2, origName: 'asdf', flag: 'csd'},],
    book: [{
      id: 1,
      title: 'asdf',
      author: 'asdf',
      isbn: 'asdf',
      category: 'asdf',
      medium: 'asdf',
      cover: 'asdf',
      price: 'asdf',
      coverImg: 'asdf',
    }, {
      id: 2,
      title: 'Really looooooooooooong my awesome title',
      author: 'asdf',
      isbn: 'asdf',
      category: 'asdf',
      medium: 'asdf',
      cover: 'asdf',
      price: 'asdf',
      coverImg: 'asdf',
    },],
    medium: [{id: 1, name: 'vdsdd'}],
    cover: [{id: 1, name: 'asdf'}],
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
    var objectArrayToArray = function(obj){
      var arr=[]
      Object.keys(obj).forEach(e =>arr[+e]=obj[e])
      return arr
    }
    let any = JSON.parse(localStorage[element]);
    let objectArray = objectArrayToArray(any);
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

  get(entity: Entity, id: number): any {
    let entities = localStorage[entity];
    if (entities) {
      return JSON.parse(entities)[id]
    }
    return null
  }

}
