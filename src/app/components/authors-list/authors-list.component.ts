import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {

  @Input() allAuthors: any;


  constructor() { }

  ngOnInit(): void {
    console.log('items', this.allAuthors)
  }

}
