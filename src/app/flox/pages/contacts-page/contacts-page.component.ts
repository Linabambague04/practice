import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderMenuComponent } from "../../components/header-menu/header-menu.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-contacts-page',
  imports: [HeaderMenuComponent, FooterComponent],
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsPageComponent {
}

