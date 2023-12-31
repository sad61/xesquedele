import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: string = 'light-mode';

  getActiveTheme(): string {
    return this.activeTheme;
  }

  setActiveTheme(theme: string): void {
    this.activeTheme = theme;
  }
}
