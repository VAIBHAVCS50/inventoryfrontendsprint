import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertmessageService {

  constructor(private snackBar: MatSnackBar) { }

  showSnackBar(message: string) {
    console.log("i was called",message);
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['custom-snackbar'],
      // Inline style
      data: { style: { bottom: '1000px' } }
    });
    
    
  }

  
}
