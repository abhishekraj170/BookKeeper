import { Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-allbooks',
  templateUrl: 'allbooks.component.html',
  styleUrls: ['allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  books;
  id;
  title;
  author;
  constructor() { 

  }

ngOnInit() {
    this.books = [
{id: 1, title: 'Angular', author: 'Abhi'},
{id: 2, title: 'Java', author: 'Raj'}
];
}

addBook(){
    this.books.push({
      id: this.id,
      title: this.title,
      author: this.author
    });
  }

deleteBook(bookId){
  for(var i = 0; i < this.books.length; i++) {
        if(this.books[i].id == bookId){
          this.books.splice(i, 1);
        }

      }
}
}