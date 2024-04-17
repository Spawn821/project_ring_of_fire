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
  currentCard: string | undefined= '';
  game!: Game;
  lastStackIndex: number = 0;

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    this.lastStackIndex = this.game.stack.length - 1;
  }

  tackeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
    }

    setTimeout(() => this.pickCardAnimation = false, 1500);
  }
}