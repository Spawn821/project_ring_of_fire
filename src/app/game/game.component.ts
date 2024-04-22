import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game.model';
import { PlayerComponent } from '../player/player.component';
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

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
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

  constructor(public dialog: MatDialog) {

  }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}