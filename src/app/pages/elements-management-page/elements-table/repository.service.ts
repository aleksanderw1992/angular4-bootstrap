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

  getAll(element: string) {
    return this.initialData[element];
  }
}
