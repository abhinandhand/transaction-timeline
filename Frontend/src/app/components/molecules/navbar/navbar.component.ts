import { Component, inject } from '@angular/core';
import { ThemeSelectorComponent } from '../../atoms/theme-selector/theme-selector.component';
import { AppStore } from '@store/app.store';

@Component({
  selector: 'app-navbar',
  imports: [ThemeSelectorComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [AppStore],
})
export class NavbarComponent {
  appStore = inject(AppStore);
}
