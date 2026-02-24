import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  isLightMode: boolean = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      this.enableLightMode();
    }
  }

  toggleTheme() {
    if (this.isLightMode) {
      this.disableLightMode();
    } else {
      this.enableLightMode();
    }
  }

  private enableLightMode() {
    this.isLightMode = true;
    this.renderer.addClass(this.document.body, 'light-mode');
    localStorage.setItem('theme', 'light');
  }

  private disableLightMode() {
    this.isLightMode = false;
    this.renderer.removeClass(this.document.body, 'light-mode');
    localStorage.setItem('theme', 'dark');
  }
}