import { Component } from '@angular/core';
import { FestivosService } from '../../servicios/festivos.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verificar-festivo',
  templateUrl: './verificar-festivo.component.html',
  styleUrls: ['./verificar-festivo.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule],
})
export class VerificarFestivoComponent {
  fecha: Date | null = null;
  resultado: string = '';

  constructor(private festivosService: FestivosService) {}

  verificarFecha() {
    if (this.fecha) {
      // Extraer año, mes y día de la fecha seleccionada
      const anio = this.fecha.getFullYear();
      const mes = this.fecha.getMonth() + 1; // Los meses en JavaScript comienzan en 0
      const dia = this.fecha.getDate();

      this.festivosService.verificarFestivo(anio, mes, dia).subscribe((res) => {
        this.resultado = res;
        alert(this.resultado); // Mostrar resultado en un popup
      });
    } else {
      alert('Por favor selecciona una fecha válida.');
    }
  }
}
