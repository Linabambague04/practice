import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderMenuOptionsComponent } from "./header-menu-options/header-menu-options.component";
import { HeaderMenuNameComponent } from "./header-menu-name/header-menu-name.component";

@Component({
  selector: 'app-header-menu',
  imports: [HeaderMenuOptionsComponent, HeaderMenuNameComponent],
  templateUrl: './header-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent { }
