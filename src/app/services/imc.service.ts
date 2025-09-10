import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {

  private readonly STORAGE_KEY = 'imcHistorial';

  constructor() {}

  calcularIMC(peso: number, altura: number): number {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    return parseFloat(imc.toFixed(2));
  }

  guardarEnLocalStorage(imc: number): void {
    const historial = this.obtenerHistorial();
    historial.push(imc);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(historial));
  }

  obtenerHistorial(): number[] {
    const datos = localStorage.getItem(this.STORAGE_KEY);
    return datos ? JSON.parse(datos) : [];
  }
}
