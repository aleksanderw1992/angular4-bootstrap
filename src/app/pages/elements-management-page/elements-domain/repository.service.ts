import {Injectable} from "@angular/core";
import {CountriesHttpProvider} from "./countries-http-provider.service";
import {SequenceHolder} from "./sequence-holder.service";
export declare type Entity = 'author' | 'category' | 'country' | 'book' | 'medium' | 'cover' | 'orderedBook';

@Injectable()
export class Repository {
  public initialData = {
    author: [
      {firstName: 'Aleksander', surname: 'Wojcik', country: 'Poland'},
      {firstName: 'William', surname: 'Shakespeare', country: 'England'},
      {firstName: 'J. K.', surname: 'Rowling', country: 'England'},
      {firstName: 'Stephen', surname: 'King', country: 'USA'},
      {firstName: 'Fyodor', surname: 'Dostoevsky', country: 'Russia'}
    ],
    category: [
      {name: 'drama'},
      {name: 'comedy'},
      {name: 'novel'},
      {name: 'poetry'},
      {name: 'thriller'},
      {name: 'horror'},
    ],
    country: [{origName: 'origName', flag: 'csd'}, {origName: 'asdf', flag: 'csd'}],
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
    }, {
      title: 'Robinson Crusoe',
      author: 'Daniel Defoe',
      isbn: '3256753113',
      category: 'novel',
      medium: 'book',
      cover: 'thin',
      price: '$11,45',
      coverImg: '\\assets\\img\\robbinson_cruso.jpg',
    },{
      title: 'Frankenstein ',
      author: 'Mary Shelley ',
      isbn: '3456753113',
      category: 'novel',
      medium: 'book',
      cover: 'thin',
      price: '$11,45',
      coverImg: '\\assets\\img\\frankenstein.jpg',
    },{
      title: 'Odyssey ',
      author: 'Homer',
      isbn: '3226752113',
      category: 'novel',
      medium: 'book',
      cover: 'thin',
      price: '$21,45',
      coverImg: '\\assets\\img\\oddysei.jpg',
    },{
      title: 'Pride and Prejudice ',
      author: 'Jane Austen',
      isbn: '3256722113',
      category: 'novel',
      medium: 'book',
      cover: 'thin',
      price: '$11,10',
      coverImg: '\\assets\\img\\pride_and_prejudice.jpg',
    },
    ],
    medium: [
      {name: 'book'},
      {name: 'pdf'},
      {name: 'mobi'},
      {name: 'online'},
    ],
    cover: [{name: 'thick'}, {name: 'thin'}, {name: 'none'}],
    orderedBook: [
      {bookId: 0, orderCount: 2},
      {bookId: 1, orderCount: 1},
      {bookId: 2, orderCount: 10},
      {bookId: 3, orderCount: 3},
    ]
  };

  constructor(private countriesHttpProvider: CountriesHttpProvider, private sequenceHolder: SequenceHolder) {
    localStorage.book || this.init()
  }

  init() {
    localStorage.clear()
    for (let entityType in this.initialData) {
      for (let entity of this.initialData[entityType]) {
        this.save(<Entity>entityType, entity);
      }
    }
  }

  private objectArrayToArray = function (obj) {
    let arr = []
    Object.keys(obj).forEach(e => arr[+e] = obj[e])
    return arr
  }

  getAll(element: string) {
    if (element === 'country') {
      let countries = this.countriesHttpProvider.getCountries();
      // console.log(countries);
      return countries || [];
    }
    let any = JSON.parse(localStorage[element]);
    let objectArray = this.objectArrayToArray(any);
    // console.log(objectArray);
    return objectArray
  }


  save(entity: Entity, data: any): void {
    let entities = localStorage[entity];
    if (!entities) {
      localStorage[entity] = JSON.stringify({})
    }
    let localStorageEntity = JSON.parse(localStorage[entity]);
    let nextId = this.sequenceHolder.get(entity).getAndIncrease();
    localStorageEntity[nextId] = data;
    localStorage[entity] = JSON.stringify(localStorageEntity)
  }

  update(entity: Entity, id: number, data: any): void {
    let entities = localStorage[entity];
    if (!entities) {
      localStorage[entity] = JSON.stringify({})
    }
    let localStorageEntity = JSON.parse(localStorage[entity]);
    localStorageEntity[id] = data;
    localStorage[entity] = JSON.stringify(localStorageEntity)
  }

  delete(entity: Entity, id: number): any {
    let entities = localStorage[entity];
    if (!entities) {
      return;
    }
    let localStorageEntity = JSON.parse(localStorage[entity]);
    delete localStorageEntity[id]
    localStorage[entity] = JSON.stringify(localStorageEntity)
    if (entity === 'book') {
      this.deleteFromBookOrderedWhereBookId(id)
    }
  }

  get(entity: Entity, id: number): any {
    let entities = localStorage[entity];
    if (entities) {
      return JSON.parse(entities)[id]
    }
    return null
  }

  addSingleOrder(id: number) {
    let entity: Entity = 'orderedBook';
    let entities = localStorage[entity];
    if (!entities) {
      localStorage[entity] = JSON.stringify({})
      throw new Error('Something went wrong')
    }
    let localStorageEntity = JSON.parse(localStorage[entity]);
    let arr = this.objectArrayToArray(localStorageEntity)
      .map((e, ind) => { return {bookId: e.bookId, ind: ind}})
      .filter(e => e.bookId == id)
      .map((e, ind) => e.ind);
    let index = arr && arr[0]
    if(arr.length >1){
      throw new Error('Something went wrong')
    }
    if (index || index === 0) {
      let order = localStorageEntity[index];
      localStorageEntity[index] = {bookId: id, orderCount: order.orderCount + 1}
    } else {
      let nextId = Object.keys(localStorageEntity).length;
      localStorageEntity[nextId] = {bookId: id, orderCount: 1}
    }
    localStorage[entity] = JSON.stringify(localStorageEntity)
  }

  private deleteFromBookOrderedWhereBookId(id: number) {
    let entity: Entity = 'orderedBook';
    let entities = localStorage[entity];
    if (!entities) {
      return;
    }
    let localStorageEntity = JSON.parse(localStorage[entity]);
    let arr = this.objectArrayToArray(localStorageEntity)
      .map((e, ind) => { return {bookId: e.bookId, ind: ind} })
      .filter(e => e.bookId == id)
      .map(e => e.ind);
    arr.forEach(ind => delete localStorageEntity[ind])
    localStorage[entity] = JSON.stringify(localStorageEntity)
  }
}
