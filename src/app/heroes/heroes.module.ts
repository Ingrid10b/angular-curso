import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';
NgModule 


@NgModule({
    declarations: [
        ListComponent,
        HeroeComponent,
    ],

    exports: [
        ListComponent
    ],

    imports: [
        CommonModule
    ]
})

export class HeroesModule {
}