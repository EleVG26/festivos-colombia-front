import { Component } from '@angular/core';
import { FestivosService } from '../../servicios/festivos.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verificar-festivo',
  templateUrl: './verificar-festivo.component.html',
  styleUrls: ['./verificar-festivo.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
})
export class VerificarFestivoComponent {
  fecha: string = '';
  resultado: string = '';

  constructor(private festivosService: FestivosService) {}

  verificarFecha() {
    const [anio, mes, dia] = this.fecha.split('-').map(Number);
    this.festivosService.verificarFestivo(anio, mes, dia).subscribe((res) => {
      this.resultado = res;
      alert(this.resultado); // Mostrar resultado en un popup
    });
  }
}
