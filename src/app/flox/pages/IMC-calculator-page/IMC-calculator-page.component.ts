import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu.component';
import { ImcService } from '../../../services/imc.service';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-imc-calculator-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderMenuComponent,
    FooterComponent
],
  templateUrl: './IMC-calculator-page.component.html',
  styleUrls: ['./IMC-calculator-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IMCCalculatorPageComponent {

  imcHistorial: number[] = [];

  getClasificacion(imc: number): string {
    if (imc < 18.5) return '<span class="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">Bajo peso</span>';
    if (imc < 25) return '<span class="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">Peso normal</span>';
    if (imc < 30) return '<span class="bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-orange-900 dark:text-orange-300">Sobrepeso</span>';
    if (imc < 35) return '<span class="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">Obesidad grado I</span>';
    if (imc < 40) return '<span class="bg-red-200 text-red-900 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-red-950 dark:text-red-300">Obesidad grado II</span>';
    return '<span class="bg-red-300 text-red-950 text-sm font-medium px-2.5 py-0.5 rounded-sm dark:bg-red-800 dark:text-red-200">Obesidad grado III</span>';
  }


  getClaseColorBarra(imc: number): string {
    if (imc < 18.5) return 'barra-bajo-peso';
    if (imc < 25) return 'barra-peso-normal';
    if (imc < 30) return 'barra-sobrepeso';
    if (imc < 35) return 'barra-obesidad-1';
    if (imc < 40) return 'barra-obesidad-2';
    return 'barra-obesidad-3';
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
