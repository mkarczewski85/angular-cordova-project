import { ResultsPage } from './../results/results';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm: FormGroup;

  constructor(private navCtrl: NavController, private builder: FormBuilder) {
    this.myForm = builder.group({
      'letters': '',
      'additional': '',
      'option': ''
    })
  }

  onSubmit(formData) {
    console.log('Form data is ', formData);
    this.navCtrl.push(ResultsPage, {
      letters: formData.letters + formData.additional,
      option: formData.option
    });
  }

}
