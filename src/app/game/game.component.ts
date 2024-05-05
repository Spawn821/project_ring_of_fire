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

  pickCardAnimation: boolean = false;
  drawnCard!: string;
  game!: Game;
  lastStackIndex: number = 0;
  player: number = 1;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private gameService: GamesService) {
    this.newGame();
    console.log(this.game);
  }

  newGame() {
    try {
      this.route.params.subscribe((params) => {
        this.gameService.games.forEach((game) => {
          if (game.id == params['id']) {
            this.game = game;
            this.lastStackIndex = this.game.stack.length - 1;
          }
        });
      })
    } catch (err) {
      console.log(err);
    }
  }

  tackeCard() {
    if (!this.pickCardAnimation) {
      this.drawnCard = this.game.stack.pop() || '';
      this.pickCardAnimation = true;
    }

    setTimeout(() => this.pickCardAnimation = false, 1000);
  }

  playedCards() {
    setTimeout(() => {
      this.game.playCard.push(this.drawnCard);
      this.setPlayer();
    }, 1000);
  }

  setPlayer() {
    this.game.currentPlayer = this.player % this.game.players.length;
    this.player++;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name) this.game.players.push(name);
    });
  }
}