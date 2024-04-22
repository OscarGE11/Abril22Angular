import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CasasComponent } from './componentes/Ejercicio1/casas/casas.component';
import { InicioComponent } from './componentes/Ejercicio1/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril22Angular';
}
