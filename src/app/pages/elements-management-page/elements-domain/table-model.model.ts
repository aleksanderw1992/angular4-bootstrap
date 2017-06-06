
export class TableModel{
  public model ={
    author:{
      columns:[
        {colName:'firstName', value:'elements.table.author.firstName'},
        {colName:'surname', value:'elements.table.author.surname'},
        {colName:'country', value:'elements.table.author.country'}
      ]
    },
    category:{
      columns:[
        { colName:'name', value:'elements.table.category.name' }
      ]
    },
    country:{
      columns:[
        {colName:'origName', value:'elements.table.country.origName'},
        {colName:'flag', value:'elements.table.country.flag', notSortable:true}
      ]
    },
    book:{
      columns:[
        {colName:'title', value:'elements.table.book.title'},
        {colName:'author', value:'elements.table.book.author'},
        {colName:'isbn', value:'elements.table.book.isbn'},
        {colName:'category', value:'elements.table.book.category'},
        {colName:'medium', value:'elements.table.book.medium'},
        {colName:'cover', value:'elements.table.book.cover'},
        {colName:'price', value:'elements.table.book.price'},
        {colName:'coverImg', value:'elements.table.book.coverImg', notSortable:true}
      ]
    },
    medium:{
      columns:[
        { colName:'name', value:'elements.table.medium.name' }
      ]
    },
    cover:{
      columns:[
        { colName:'name', value:'elements.table.cover.name' }]
    }
  }
}
