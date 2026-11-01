import { Component, HostListener, OnInit, Renderer2, inject } from '@angular/core';
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

  isDark = false;
  menuOpen = false; // is the phone menu open?
  readonly year = new Date().getFullYear();

  ngOnInit() {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('theme');
    } catch {
      // Storage can be blocked. Just use the default (light) theme.
    }
    if (saved === 'dark') {
      this.setTheme(true);
    }
  }

  toggleTheme() {
    this.setTheme(!this.isDark);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // Pressing Esc closes the phone menu
  @HostListener('document:keydown.escape')
  onEscape() {
    this.menuOpen = false;
  }

  private setTheme(dark: boolean) {
    this.isDark = dark;
    if (dark) {
      this.renderer.addClass(this.document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-mode');
    }
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }
}