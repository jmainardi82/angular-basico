import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

  heroes:string[]=['Spiderman', 'Iron Man', 'Hulk','Ant Man', 'Thor'];
  heroeBorrado:string='';

  borrarHeroe(){
    
    this.heroeBorrado =this.heroes.shift() || '';
    
  }

  constructor() { }

  

}
