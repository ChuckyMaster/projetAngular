export class Personne {
  nom: string;
  prenom: string;
  age: number;
  philososhie: string;
  dateNaissance: Date;
  nomComplet: string;

  constructor(
    nom: string,
    prenom: string,
    age: number,
    philosophie: string,
    dateNaissance: Date
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.philososhie = philosophie;
    this.dateNaissance = dateNaissance;

    this.nomComplet = `${nom} - ${prenom}`;
  }
}

let personne1 = new Personne(
  'Chap',
  'Marie',
  15,
  'me faites pas chié',
  new Date('1989/01/02')
);
