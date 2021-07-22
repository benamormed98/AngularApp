import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appreilelectrique',
  templateUrl: './appreilelectrique.component.html',
  styleUrls: ['./appreilelectrique.component.scss']
})
export class AppreilelectriqueComponent implements OnInit {
  @Input() appareilName: string;
  @Input() status: string;

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getStatus(){
    return this.status;
  }
  // tslint:disable-next-line:typedef
  getColor(){
    if (this.status === 'on'){
      return 'green';
    }
    else if (this.status === 'off'){
      return 'red';
    }
  }

}
