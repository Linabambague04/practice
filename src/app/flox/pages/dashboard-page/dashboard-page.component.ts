import { Component, signal } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { HeaderMenuComponent } from "../../components/header-menu/header-menu.component";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  imports: [HeaderMenuComponent],
})
export class DashboardPageComponent {
  name = signal('');

  constructor(private userService: UserService) {
  }

  onSubmit() {
    const trimmedName = this.name().trim();
    if (!trimmedName) {
      alert('Por favor, ingresa un nombre');
      return;
    }
    const newUser = {
      id: Date.now(),
      name: trimmedName,
    };

    this.userService.addUser(newUser);

    console.log(`Usuario agregado: ${trimmedName}`);

    this.name.set('');
  }
}
