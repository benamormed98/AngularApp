import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareils = [
    {
      name: 'Machine à laver',
      status: 'on'
    },
    {
      name: 'Frigo',
      status: 'off'
    },
    {
      name: 'Ordinateur',
      status: 'on'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  // tslint:disable-next-line:typedef
  TurnOn(){
   console.log('hhh');
  }

}
