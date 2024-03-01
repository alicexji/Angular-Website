/*
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-website';
}
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*standalone: true */
})

export class AppComponent {
  cards: any[] = [];

  addCard(newCard: any) {
    this.cards.push(newCard);
  }
}
/*
export class AppComponent {
  cards: any[] = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' }
  ];
  // Function to receive new card from input form and add it to the list
  addCard(newCard: any) {
    // Pass new card to the card list component
    // For simplicity, I'll just log the new card here
    console.log('Received new card in main component:', newCard);
  }
}
*/