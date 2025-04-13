import { Component, inject } from '@angular/core';
import { ThemeSelectorComponent } from '../../atoms/theme-selector/theme-selector.component';
import { AppStore } from '@store/app.store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ThemeSelectorComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  appStore = inject(AppStore);
}
