import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorStorageService {
  private readonly key = 'calculatorDisplay';

  getDisplay(): string {
    return localStorage.getItem(this.key) || '';
  }

  saveDisplay(value: string): void {
    localStorage.setItem(this.key, value);
  }

  clearDisplay(): void {
    localStorage.removeItem(this.key);
  }
}
