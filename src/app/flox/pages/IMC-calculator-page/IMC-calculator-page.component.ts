import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu.component';
import { ImcService } from '../../../services/imc.service';

@Component({
  selector: 'app-imc-calculator-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderMenuComponent
  ],
  templateUrl: './IMC-calculator-page.component.html',
  styleUrls: ['./IMC-calculator-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IMCCalculatorPageComponent {

  imcHistorial: number[] = [];

  getClasificacion(imc: number): string {
    if (imc < 18.5) return 'Bajo peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    if (imc < 35) return 'Obesidad grado I';
    if (imc < 40) return 'Obesidad grado II';
    return 'Obesidad grado III';
  }

  getBarraProgreso(imc: number): number {
    const maxIMC = 50;
    const porcentaje = (imc / maxIMC) * 100;
    return Math.min(porcentaje, 100); // limita al 100%
  }


  peso: number = 0;
  altura: number = 0;
  imcResultado: number | null = null;
  imcGuardado: number | null = null;

  constructor(private imcService: ImcService) {
    this.imcHistorial = this.imcService.obtenerHistorial();
  }

  calcularIMC(): void {
    this.imcResultado = this.imcService.calcularIMC(this.peso, this.altura);
    this.imcService.guardarEnLocalStorage(this.imcResultado);
    this.imcHistorial = this.imcService.obtenerHistorial(); // actualizar historial
  }
}
