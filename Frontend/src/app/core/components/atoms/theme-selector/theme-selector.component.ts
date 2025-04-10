import { Component, effect, input, output } from '@angular/core';
import { Theme } from '@core/models/app.model';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss',
})
export class ThemeSelectorComponent {
  theme = input.required<Theme>();
  themeToggled = output<void>();

  themeEffect = effect(() => {
    document.documentElement.setAttribute('data-bs-theme', this.theme());
    localStorage.setItem('theme', this.theme());
  });
}
