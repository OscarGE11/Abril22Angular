import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InmuebleService } from '../../../servicios/inmueble.service';
import { Inmueble } from '../../../modelo/inmueble';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent{

  inmuebles:Inmueble[]=[];
  
constructor(private inmuebleServicio: InmuebleService){}


ngOnInit():void {
  this.inmuebles=this.inmuebleServicio.obtenerTodos();
}


}
