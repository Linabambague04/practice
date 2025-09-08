import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderMenuComponent } from "../../components/header-menu/header-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [HeaderMenuComponent],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent { }
