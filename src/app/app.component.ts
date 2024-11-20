import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatDividerModule],
})
export class AppComponent {
  title = 'festivos_colombia';

  constructor(private router: Router) { }
  
  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]); // Navega a la ruta proporcionada
    console.log(`Navegando a: ${route}`); // Opcional: imprime en consola
  }
}
