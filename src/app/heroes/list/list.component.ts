import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
heroes : string[] = ["Spider", "Hulk", "Thor", "Ironman", "Messi"];
Hborrado : string = "";

BorrarH () {
  this.Hborrado = this.heroes.shift() || "";
}

}

