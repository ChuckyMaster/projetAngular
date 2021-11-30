import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-miniature-personne',
  templateUrl: './miniature-personne.component.html',
  styleUrls: ['./miniature-personne.component.css'],
})
export class MiniaturePersonneComponent {
  ppl: Personne[] = [];

  @Input() public kkun!: Personne;
  @Output() delete = new EventEmitter<void>();
  addPersonn() {}
  deletPersonn() {
    this.delete.emit();
    console.log('HELLO FROM DELETE BUTTON');
  }
  constructor() {}
}
