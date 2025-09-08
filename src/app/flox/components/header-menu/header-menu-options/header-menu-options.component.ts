import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface headerMenuOption {
  label: string;
  route: string;
}

@Component({
  selector: 'app-header-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuOptionsComponent {
  headerMenuOptions: headerMenuOption[] = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Calculator', route: '/calculator' },
    { label: 'IBM calculator', route: '/IBM-calculator' },
    { label: 'Contact', route: '/contact' },
  ];
}
