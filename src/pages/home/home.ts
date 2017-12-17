import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personName: string;

  constructor (private toast: ToastController) {}

  showGreeting(name: string) {
    this.toast.create({
      message: `Hello ${name}`,
      duration: 3000
    }).present();
  }
}
