import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderMenuComponent } from "../../components/header-menu/header-menu.component";
import { CalculatorStorageService } from '../../../services/calculator.service';

@Component({
  selector: 'app-calculator-page',
  imports: [HeaderMenuComponent],
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorPageComponent {
  display: string = '';
  history: string[] = [];

  private readonly STORAGE_KEY = 'calculatorHistory';

  constructor(private storageService: CalculatorStorageService) {
    this.history = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    this.display = this.history.length ? this.history[this.history.length - 1].split('=')[1].trim() : '';
  }

  press(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      const result = eval(this.display);
      const record = `${this.display} = ${result}`;
      this.history.push(record);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.history));
      this.display = result.toString();
    } catch {
      this.display = 'Error';
    }
  }
}
