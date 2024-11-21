import { Component } from '@angular/core';
import { FestivosService } from '../../servicios/festivos.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/festivo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listar-festivos',
  templateUrl: './listar-festivos.component.html',
  styleUrls: ['./listar-festivos.component.css'],
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, FormsModule, NgxDatatableModule, CommonModule],
})
export class ListarFestivosComponent {
  public modoColumna = ColumnMode;
  
  anio: number = new Date().getFullYear();
  festivos: Festivo[] = [];

  constructor(private festivosService: FestivosService) {}

  obtenerFestivos() {
    this.festivosService.obtenerFestivos(this.anio).subscribe((data) => {
      console.log('Datos obtenidos:', data); // Inspeccionar aquí
      this.festivos = data.map((festivo) => ({
        festivo: festivo.festivo,
        fecha: festivo.fecha.split('T')[0], // Formatear la fecha
      }));
      console.log('Datos formateados para la tabla:', this.festivos);
    });
  }
}
