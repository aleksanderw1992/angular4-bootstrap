import {Injectable} from "@angular/core";
import {CountriesHttpProvider} from "./countries-http-provider.service";
export declare type Entity = 'author' | 'category' | 'country' | 'book' | 'medium' | 'cover';

@Injectable()
export class Repository {
  public initialData = {
    author: [
      { firstName: 'Aleksander', surname: 'Wojcik', country: 'Poland'},
      { firstName: 'William', surname: 'Shakespeare', country: 'England'},
      { firstName: 'J. K.', surname: 'Rowling', country: 'England'},
      { firstName: 'Stephen', surname: 'King', country: 'USA'},
      { firstName: 'Fyodor', surname: 'Dostoevsky', country: 'Russia'}
    ],
    category: [
      { name: 'drama'},
      { name: 'comedy'},
      { name: 'novel'},
      { name: 'poetry'},
      { name: 'thriller'},
      { name: 'horror'},
    ],
    country: [{ origName: 'origName', flag: 'csd'}, { origName: 'asdf', flag: 'csd'}],
    book: [{

      title: 'Romeo and Juliet',
      author: 'William Shakespeare',
      isbn: '3456753123',
      category: 'drama',
      medium: 'book',
      cover: 'thick',
      price: '$20,45',
      coverImg: '\\assets\\img\\romeo_and_juliet.jpg',
    }, {

      title: 'Harry Potter',
      author: 'J. K. Rowling',
      isbn: '3256753123',
      category: 'novel',
      medium: 'book',
      cover: 'thin',
      price: '$10,45',
      coverImg: '\\assets\\img\\hp.png',
    },],
    medium: [
      { name: 'book'},
      { name: 'pdf'},
      { name: 'mobi'},
      { name: 'online'},
      ],
    cover: [{ name: 'thick'},{ name: 'thin'},{ name: 'none'}],
  };

  constructor(private countriesHttpProvider:CountriesHttpProvider){
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
    if(element === 'country'){
      let countries = this.countriesHttpProvider.getCountries();
      // console.log(countries);
      return countries || [];
    }
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
