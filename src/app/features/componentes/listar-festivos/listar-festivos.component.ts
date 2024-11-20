import { Component } from '@angular/core';
import { FestivosService } from '../../servicios/festivos.service';
import { Festivo } from '../../../core/entidades/festivo';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-listar-festivos',
  templateUrl: './listar-festivos.component.html',
  styleUrls: ['./listar-festivos.component.css'],
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, FormsModule, NgxDatatableModule],
})
export class ListarFestivosComponent {
  anio: number = new Date().getFullYear();
  festivos: Festivo[] = [];

  constructor(private festivosService: FestivosService) {}

  obtenerFestivos() {
    this.festivosService.obtenerFestivos(this.anio).subscribe((data) => {
      console.log('Datos obtenidos:', data); // Inspeccionar aquí
      this.festivos = data.map((festivo) => ({
        nombre: festivo.nombre,
        fecha: festivo.fecha.split('T')[0], // Formatear la fecha
      }));
      console.log('Datos formateados para la tabla:', this.festivos);
    });
  }
}
