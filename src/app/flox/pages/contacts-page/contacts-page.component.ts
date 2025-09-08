import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderMenuComponent } from "../../components/header-menu/header-menu.component";

@Component({
  selector: 'app-contacts-page',
  imports: [HeaderMenuComponent],
  templateUrl: './contacts-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsPageComponent { }
