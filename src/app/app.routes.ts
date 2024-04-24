import { Routes } from '@angular/router';
import { CasasComponent } from './componentes/Ejercicio1/casas/casas.component';
import { InicioComponent } from './componentes/Ejercicio1/inicio/inicio.component';


export const routes: Routes = [

    
    {path:'casa/:id',title:'Casas',component:CasasComponent},
    {path:'inicio',component:InicioComponent},
    {path:'',redirectTo:'inicio',pathMatch:'full'},
   

];
