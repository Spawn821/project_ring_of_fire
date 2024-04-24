import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
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

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    MatButtonModule,
    MatDialogTitle
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss',
})
export class DialogAddPlayerComponent {
  name: string = '';

  constructor(
    private dialogRef: MatDialogRef<DialogAddPlayerComponent>,
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
