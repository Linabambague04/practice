import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderMenuComponent } from "../../components/header-menu/header-menu.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacts-page',
  imports: [HeaderMenuComponent, FooterComponent, RouterModule],
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ContactsPageComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}

