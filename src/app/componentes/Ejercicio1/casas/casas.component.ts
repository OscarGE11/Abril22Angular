import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InmuebleService } from '../../../servicios/inmueble.service';
import { Inmueble } from '../../../modelo/inmueble';

@Component({
  selector: 'app-casas',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './casas.component.html',
  styleUrl: './casas.component.css'
})
export class CasasComponent {
  @Input()
  id:any;

  constructor(private inmuebleServicio: InmuebleService){}

  inmueble:any;
  ngOnInit():void{

    this.inmueble=this.inmuebleServicio.obtenerUno(this.id);

  }
  



  

}

