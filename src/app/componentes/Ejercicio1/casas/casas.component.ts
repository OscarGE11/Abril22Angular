import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

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

  opcionesCasas = [
    {
      id: 1,
      textoMostrado: "Esta encantadora casa de campo ofrece el equilibrio perfecto entre comodidad y tranquilidad. Con tres dormitorios amplios, dos baños renovados y una cocina totalmente equipada, esta propiedad es ideal para quienes buscan disfrutar de la vida rural sin renunciar a las comodidades modernas. Además, cuenta con un hermoso jardín con árboles frutales y un porche acogedor perfecto para relajarse al aire libre.",
      imagen:"../../assets/imagenes/casa1.webp",
      titulo:"Casa en el campo con encanto"
    },
    {
      id: 2,
      textoMostrado: "Esta moderna casa adosada ofrece un estilo de vida contemporáneo en una ubicación privilegiada. Con cuatro dormitorios luminosos, tres baños elegantes y una cocina de diseño totalmente equipada, esta propiedad es perfecta para familias que buscan comodidad y estilo. Además, cuenta con un amplio jardín privado y una terraza perfecta para disfrutar de las tardes al aire libre.",
      imagen:"../../assets/imagenes/casa2.webp",
      titulo:"Moderna casa adosada en zona residencial"
    
    },
    {
      id: 3,
      textoMostrado: "Esta encantadora casita en el campo es el refugio perfecto para quienes buscan tranquilidad y comodidad. Con tres dormitorios acogedores, dos baños renovados y una cocina totalmente equipada, esta propiedad ofrece un ambiente cálido y familiar. Además, cuenta con un hermoso jardín con piscina privada, donde podrás disfrutar de días soleados y tardes refrescantes en completa privacidad. Perfecta para escapar del ajetreo de la ciudad y disfrutar de la vida en contacto con la naturaleza.",
      imagen:"../../assets/imagenes/casa3.webp",
      titulo:"Acogedora casa de campo con piscina privada"
    }
  ];
  info:string="";

  

}
