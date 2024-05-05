import { Component } from '@angular/core';
import { Game } from '../models/game.model';
import { Router } from '@angular/router';
import { GamesService } from '../firebase-service/games.service';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

  game!: Game;

  constructor(private router: Router, private gameService: GamesService) {

  }

  async newGame() {
    this.game = new Game();
    await this.gameService.addGame(this.game);
    //setTimeout(() => this.router.navigateByUrl('game/' + 'CAu3qhOM87l64G60Kt87'), 500);
    this.router.navigateByUrl('game/' + 'CAu3qhOM87l64G60Kt87');
  }
}
