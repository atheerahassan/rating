import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  createAlert() {
    this.alertCtrl.create({
      subTitle:"YOU'VE DONE TRANSACTION WITH KANNA.",
      message:"RATE YOUR TRANSACTION :",
      

      // inputs: [



      // ]


    }).present();
  }

}
