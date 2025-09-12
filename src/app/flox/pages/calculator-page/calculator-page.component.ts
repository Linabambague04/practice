import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from "../../components/header-menu/header-menu.component";
import { CalculatorStorageService } from '../../../services/calculator.service';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-calculator-page',
  standalone: true,
  imports: [CommonModule, HeaderMenuComponent, FooterComponent],
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorPageComponent implements OnInit {
  display: string = '0';
  private currentInput: string = '0';
  private previousInput: string = '';
  private operation: string | null = null;
  private resetOnNextInput: boolean = false;

  constructor(private storageService: CalculatorStorageService) {}

  ngOnInit(): void {
    const history = this.storageService.getHistory();
    if (history.length > 0) {
      const lastEntry = history[0];
      this.display = lastEntry.result;
      this.currentInput = lastEntry.result;
    }
  }

  press(value: string): void {
    if (value === '.') {
      this.handleDecimal();
      return;
    }

    if (['+', '-', '*', '/'].includes(value)) {
      this.handleOperation(value);
      return;
    }

    if (this.resetOnNextInput) {
      this.currentInput = value;
      this.resetOnNextInput = false;
    } else {
      this.currentInput = this.currentInput === '0' ? value : this.currentInput + value;
    }
    
    this.display = this.currentInput;
  }

  private handleDecimal(): void {
    if (this.resetOnNextInput) {
      this.currentInput = '0.';
      this.resetOnNextInput = false;
    } else if (!this.currentInput.includes('.')) {
      this.currentInput += '.';
    }
    this.display = this.currentInput;
  }

  private handleOperation(operation: string): void {
    if (this.operation && !this.resetOnNextInput) {
      this.calculate();
    }

    this.operation = operation;
    this.previousInput = this.currentInput;
    this.resetOnNextInput = true;
  }

  calculate(): void {
    if (!this.operation || this.resetOnNextInput) return;

    const prev = parseFloat(this.previousInput);
    const current = parseFloat(this.currentInput);
    let result: number;

    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    const expression = `${this.previousInput} ${this.operation} ${this.currentInput}`;
    this.storageService.addToHistory(expression, result.toString());
    
    this.currentInput = result.toString();
    this.display = this.currentInput;
    this.operation = null;
    this.resetOnNextInput = true;
  }

  clear(): void {
    this.currentInput = '0';
    this.previousInput = '';
    this.operation = null;
    this.resetOnNextInput = false;
    this.display = this.currentInput;
  }
}
