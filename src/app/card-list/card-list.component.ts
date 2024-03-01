import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
   @Input() cards: any[] = [];

  // Function to add new card to the list
  addCard(newCard: any) {
    this.cards.push(newCard);
  }
}
