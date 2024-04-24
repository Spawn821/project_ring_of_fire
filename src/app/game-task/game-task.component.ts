import { CommonModule } from '@angular/common';
import { Component, Input, inject, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RulesdataService } from '../rulesdata.service';

@Component({
  selector: 'app-game-task',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './game-task.component.html',
  styleUrl: './game-task.component.scss'
})
export class GameTaskComponent implements OnChanges {
  rulesdata = inject(RulesdataService);
  title: string = '';
  description: string = '';
  cardNumber: string = '';

  @Input() drawnCard: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.splitStringInChar();
    this.setRule();
  }

  setRule() {
    this.rulesdata.gameTasks.forEach(rule => {
      if (rule.card == this.cardNumber) {
        this.title = rule.title;
        this.description = rule.description;
      }
    });
  }

  splitStringInChar() {
    try {
      this.cardNumber = this.drawnCard.split('_')[1];
    } catch {
      return;
    }
  }
}
