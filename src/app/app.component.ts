import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Event} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  // legalForm = '';

  user = {
    legalForm: '',
    legalFromFullDescription: ''
  }
  // legalFromFullDescription  = '';

  divs = [];
  counter = 1;

  newForm: FormGroup;


  constructor() {
    this.newForm = new FormGroup({
      legalForm: new FormControl(""),
      legalFormEN: new FormControl(""),
    })
  }

//Add Div
  addDiv() {
    // @ts-ignore
    this.divs.push(this.counter);
    this.counter++;
  }
// Delete added Div
  deleteDiv(index: number) {
    this.divs.splice(index, 1);
  }

  change(event : Event){
    this.user.legalForm;
  }

  onUpdate(event : string){
    this.user.legalForm = event;
  }

  onTranslate(value: any) {
    if (!value) {
      this.newForm.get('legalFormEN')?.setValue('');
    }
    this.newForm.get('legalFormEN')?.setValue(value.replace(/ф/g, 'F'));

  }


}
