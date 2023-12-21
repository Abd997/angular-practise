import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password = ''
  canUseNumbers = false

  onButtonClick() {
    this.password = 'new password'
    console.log('button clicked')
  }

  flipCanUseNumbersValue() {
    this.canUseNumbers = !this.canUseNumbers
  }

  // get password() {
  //   return ''
  // }

  // set password(p: string) {
  //   this.password = p
  // }
}
