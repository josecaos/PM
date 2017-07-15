import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any[];

  constructor(public navCtrl: NavController) {

    this.items = [];
    for(let i = 0; i < 5; i++) {
      this.items.push({
        text: "Emergencia " + i,
        id: i
      })

    }

  }

  // cuando apretamos el boton
  itemSelected(item) {
    alert(item.text);
  }

}
