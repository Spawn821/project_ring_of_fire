import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game.model';
import { PlayerComponent } from '../player/player.component';
import { GameTaskComponent } from '../game-task/game-task.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GamesService } from '../firebase-service/games.service';
import { ActivatedRoute } from '@angular/router';
import { GameStructure } from '../interfaces/gameStructure';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    GameTaskComponent,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    DialogAddPlayerComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  game!: Game;
  lastStackIndex: number = 0;
  player: number = 1;
  gameId!: string;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private gameService: GamesService) {
    this.newGame();
  }

  newGame() {
    this.game = new Game();

    this.route.params.subscribe(async (params) => {
      this.gameId = params['id'];
      let subSingleDoc = this.gameService.subSingleDoc('games', this.gameId);
      let singleDocDate: any = await this.gameService.getSingleDocData('games', this.gameId);
      console.log(this.gameService.game);
      this.setGame(this.gameService.game);
    })

    this.lastStackIndex = this.game.stack.length - 1;
  }

  setGame(game: GameStructure): void {
    this.game.players = game.players,
      this.game.stack = game.stack,
      this.game.playCard = game.playCard,
      this.game.currentPlayer = game.currentPlayer
      this.game.pickCardAnimation = game.pickCardAnimation,
      this.game.drawnCard = game.drawnCard
  }

  updateGame() {
    this.gameService.updateGame(this.game, this.gameId);
  }

  tackeCard() {
    if (!this.game.pickCardAnimation) {
      this.game.drawnCard = this.game.stack.pop() || '';
      this.game.pickCardAnimation = true;
      this.updateGame();
    }

    setTimeout(() => {
      this.game.pickCardAnimation = false
      this.updateGame();
    }, 1000);
  }

  playedCards() {
    setTimeout(() => {
      this.game.playCard.push(this.game.drawnCard);
      this.setPlayer();
      this.updateGame();
    }, 1000);
  }

  setPlayer() {
    this.game.currentPlayer = this.player % this.game.players.length;
    this.player++;
    this.updateGame();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name) {
        this.game.players.push(name);
        this.updateGame();
      }
    });
  }
}