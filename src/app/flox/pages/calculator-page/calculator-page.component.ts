import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderMenuComponent } from "../../components/header-menu/header-menu.component";

@Component({
  selector: 'app-calculator-page',
  imports: [HeaderMenuComponent],
  templateUrl: './calculator-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorPageComponent { }
