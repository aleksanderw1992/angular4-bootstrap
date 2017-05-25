
export class TableModel{
  public model ={
    author:{
      columns:[
        {colName:'firstName', value:'Imie'},
        {colName:'surname', value:'Nazwisko'},
        {colName:'country', value:'Kraj'}
      ]
    },
    category:{
      columns:[
        { colName:'name', value:'Nazwa' }
      ]
    },
    country:{
      columns:[
        {colName:'origName', value:'Nazwa w j. oryginalnym'},
        {colName:'flag', value:'Flage'}
      ]
    },
    book:{
      columns:[
        {colName:'title', value:'Tytuł'},
        {colName:'author', value:'Autor'},
        {colName:'isbn', value:'ISBN'},
        {colName:'category', value:'Kategorie'},
        {colName:'medium', value:'Rodzaje nośników'},
        {colName:'cover', value:'Rodzaje okładek'},
        {colName:'price', value:'Cena'},
        {colName:'coverImg', value:'Okładka'}
      ]
    },
    medium:{
      columns:[
        { colName:'name', value:'Nazwa' }
      ]
    },
    cover:{
      columns:[
        { colName:'name', value:'Nazwa' }]
    },
  }
}
