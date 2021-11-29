import { Component } from '@angular/core';
import { of, timeout } from 'rxjs';
import { Personne } from './personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  jack = new Personne('jojo', 'jaja', 15, 'omg sushi', new Date('1852/05/02'));
  franck = new Personne(
    'Frankette',
    'Bobo',
    50,
    'life is full of breads',
    new Date('1542/02/12')
  );

  tabPersonne: Personne[] = [];

  // tabPrenom: string[] = [this.Jack];

  constructor() {
    this.tabPersonne.push(this.jack);
    this.tabPersonne.push(this.franck);

    for (const property of this.tabPersonne) {
      let li: HTMLElement = document.createElement('li');
      li.innerHTML = `${this.tabPersonne}`;
    }
    // setTimeout(() => {
    //   this.tabPrenom.push('Toto');
    // }, 2000);
    // let nbSeconde = 0;
    // //Boucle sur le tableau pour afficher mes prenoms toutes les 5s
    // for (const prenom of this.tabPrenom) {
    //   setTimeout(() => {
    //     //change le prenom après 5secondes
    //     this.tabPrenom = prenom;
    //   }, (nbSeconde += 2000));
    // }
  }
}
