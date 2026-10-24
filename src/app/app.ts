import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);

  isLightMode = false;
  readonly year = new Date().getFullYear();

  ngOnInit() {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('theme');
    } catch {
      // Storage can be blocked. Just use the default theme.
    }
    if (saved === 'light') {
      this.setTheme(true);
    }
  }

  toggleTheme() {
    this.setTheme(!this.isLightMode);
  }

  private setTheme(light: boolean) {
    this.isLightMode = light;
    if (light) {
      this.renderer.addClass(this.document.body, 'light-mode');
    } else {
      this.renderer.removeClass(this.document.body, 'light-mode');
    }
    try {
      localStorage.setItem('theme', light ? 'light' : 'dark');
    } catch {
      // ignore
    }
  }
}