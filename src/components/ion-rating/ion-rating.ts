import { Component } from '@angular/core';

/**
 * Generated class for the IonRatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-rating',
  templateUrl: 'ion-rating.html'
})
export class IonRatingComponent {

  text: string;

  constructor() {
    console.log('Hello IonRatingComponent Component');
    this.text = 'Hello World';
  }

}
