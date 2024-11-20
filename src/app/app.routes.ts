import { Routes } from '@angular/router';
import { VerificarFestivoComponent } from './features/componentes/verificar-festivo/verificar-festivo.component';
import { ListarFestivosComponent } from './features/componentes/listar-festivos/listar-festivos.component';

export const routes: Routes = [
  { path: 'verificar', component: VerificarFestivoComponent },
  { path: 'listar', component: ListarFestivosComponent },
  { path: '', redirectTo: '/verificar', pathMatch: 'full' },
  { path: '**', redirectTo: '/verificar' }// Ruta para listar festivos
];
