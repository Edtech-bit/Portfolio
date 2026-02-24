import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  // Using signals for smooth performance
  mouseX = signal(50);
  mouseY = signal(50);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    this.mouseX.set(x);
    this.mouseY.set(y);
  }
}