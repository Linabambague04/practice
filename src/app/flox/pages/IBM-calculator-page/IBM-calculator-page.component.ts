import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderMenuComponent } from "../../components/header-menu/header-menu.component";

@Component({
  selector: 'app-ibm-calculator-page',
  imports: [HeaderMenuComponent],
  templateUrl: './IBM-calculator-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IBMCalculatorPageComponent { }
