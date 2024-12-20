import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Festivo } from '../../core/entidades/festivo';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class FestivosService {
  private apiUrl = `${environment.apiBaseUrl}/festivos`;

  constructor(private http: HttpClient) {}

  // Método para verificar si una fecha es festivo
  verificarFestivo(anio: number, mes: number, dia: number): Observable<string> {
    const url = `${this.apiUrl}/verificar/${anio}/${mes}/${dia}`;
    return this.http.get(url, { responseType: 'text' });
  }

  // Método para obtener los festivos de un año
  obtenerFestivos(anio: number): Observable<Festivo[]> {
    const url = `${this.apiUrl}/obtener/${anio}`;
    return this.http.get<Festivo[]>(url);
  }
}
