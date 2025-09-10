import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./flox/pages/dashboard-page/dashboard-page.component').then(m => m.DashboardPageComponent),
  },
  {
    path: 'calculator',
    loadComponent: () => import('./flox/pages/calculator-page/calculator-page.component').then(m => m.CalculatorPageComponent),
  },

  {
    path: 'IMC-calculator',
    loadComponent: () => import('./flox/pages/IMC-calculator-page/IMC-calculator-page.component').then(m =>m.IMCCalculatorPageComponent)
  },

  {
    path: 'contact',
    loadComponent: () => import('./flox/pages/contacts-page/contacts-page.component').then(m => m.ContactsPageComponent)
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
