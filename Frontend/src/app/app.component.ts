import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@core/components/molecules/navbar/navbar.component';
import { AppStore } from '@store/app.store';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AppStore],
})
export class AppComponent {
  readonly appStore = inject(AppStore);
}
