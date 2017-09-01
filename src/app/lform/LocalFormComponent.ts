import { Component } from '@angular/core';
import { Reg } from './Reg';

@Component ({
  selector: 'app-reg-form',
  templateUrl: './app.lform.component.html'
})

export class LocalFormComponent {
  model = new Reg(1, 'WorkFridge');
  regArray = new Array();

  saveReg() {
    console.log('saved!!! ${JSON.stringify(this.model)}');
    this.regArray.push(JSON.stringify(this.model));
    console.log('saved array!!! ' + this.regArray);
  }
}
