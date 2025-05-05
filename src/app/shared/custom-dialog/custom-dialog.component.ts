import { Component } from '@angular/core';
import {MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-custom-dialog',
  imports: [MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose,MatButtonModule],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.css'
})
export class CustomDialogComponent {
  

  
}
