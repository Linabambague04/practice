import { Injectable } from '@angular/core';

interface CalculatorHistory {
  expression: string;
  result: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorStorageService {
  private readonly STORAGE_KEY = 'calculatorHistory';
  private readonly MAX_HISTORY_ITEMS = 10;

  getHistory(): CalculatorHistory[] {
    try {
      const history = localStorage.getItem(this.STORAGE_KEY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error reading calculator history:', error);
      return [];
    }
  }

  addToHistory(expression: string, result: string): void {
    try {
      const history = this.getHistory();
      const newEntry: CalculatorHistory = {
        expression,
        result,
        timestamp: Date.now()
      };

      // Mantener solo los últimos 10 cálculos
      const updatedHistory = [newEntry, ...history].slice(0, this.MAX_HISTORY_ITEMS);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
      console.error('Error saving to calculator history:', error);
    }
  }

  clearHistory(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing calculator history:', error);
    }
  }
}
