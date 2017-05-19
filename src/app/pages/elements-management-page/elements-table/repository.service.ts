export class Repository {
  public initialData = {
    author: [
      {firstName: 'firstName', surname: 'surname', country: 'country'},
      {firstName: 'asdf', surname: 'vdf', country: 'vtr'}
      ],
    category: [{name: 'category'},{name: 'sadf'},],
    country: [{origName: 'origName', flag: 'csd'},{origName: 'asdf', flag: 'csd'},],
    book: [{
      title: 'asdf',
      author: 'asdf',
      isbm: 'asdf',
      category: 'asdf',
      medium: 'asdf',
      cover: 'asdf',
      price: 'asdf',
      coverImg: 'asdf',
    },{
      title: 'Really looooooooooooong my awesome title',
      author: 'asdf',
      isbm: 'asdf',
      category: 'asdf',
      medium: 'asdf',
      cover: 'asdf',
      price: 'asdf',
      coverImg: 'asdf',
    },],
    medium: [{name: 'vdsdd'}],
    cover: [{name: 'asdf'}],
  };

  getAll(element: string) {
    return this.initialData[element];
  }
}
