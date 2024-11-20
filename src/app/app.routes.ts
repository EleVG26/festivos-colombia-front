import { Routes } from '@angular/router';
import { VerificarFestivoComponent } from './features/componentes/verificar-festivo/verificar-festivo.component';
import { ListarFestivosComponent } from './features/componentes/listar-festivos/listar-festivos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'verificar', pathMatch: 'full' }, // Ruta por defecto redirige a Verificar Festivo
  { path: 'verificar', component: VerificarFestivoComponent }, // Ruta para verificar festivo
  { path: 'listar', component: ListarFestivosComponent }, // Ruta para listar festivos
];
