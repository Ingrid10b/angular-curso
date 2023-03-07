import { NgModule } from '@angular/core';
import { ContadorComponent } from './Cont/contador.component';
NgModule

@NgModule({
    declarations:[
        ContadorComponent
    ],

    exports:[
        ContadorComponent
    ]
})

export class ContadorModule {

}


