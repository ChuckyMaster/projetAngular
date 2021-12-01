import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  jack = new Personne('jojo', 'jaja', new Date('1852/05/02'));
  franck = new Personne(
    'Frankette',
    'Bobo',

    new Date('1542/02/12')
  );
  lolo = new Personne(
    'lolo',
    'Dudu',

    new Date('1542/02/12')
  );

  tabPersonne: Personne[] = [];

  constructor() {
    this.tabPersonne.push(this.jack);
    this.tabPersonne.push(this.franck);
    this.tabPersonne.push(this.lolo);
  }

  ngOnInit(): void {}

  deletePersonn(toto: Personne) {
    let index = this.tabPersonne.indexOf(toto);
    this.tabPersonne.splice(index, 1);
  }
}
