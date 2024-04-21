import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  pickCardAnimation: boolean = false;
  drawnCard!: string;
  game!: Game;
  lastStackIndex: number = 0;
  lastPlayedCardsIndex: number = 0;

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    this.lastStackIndex = this.game.stack.length - 1;
  }

  tackeCard() {
    if (!this.pickCardAnimation) {
      this.drawnCard = this.game.stack.pop() || '';
      this.pickCardAnimation = true;
    }

    setTimeout(() => this.pickCardAnimation = false, 1000);
  }

  playedCards() {
    setTimeout(() => this.game.playCard.push(this.drawnCard), 1000);
  }
}