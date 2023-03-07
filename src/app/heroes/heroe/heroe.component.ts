import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',

})

export class HeroeComponent{
    nombre: string = "Ironman";
    edad : number =45;

    get NombreMayus(){
        return this.nombre.toUpperCase()
    }

    ObtenerName (){
        return `${this.nombre} - ${this.edad}`;

    }

    CambiarName (){
        return this.nombre = "Spiderman";
    }

    CambiarEdad (){
        return this.edad = 30; 
    }
}


