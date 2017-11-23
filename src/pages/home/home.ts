import { ResultsPage } from './../results/results';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm: FormGroup;

  constructor(private navCtrl: NavController, private builder: FormBuilder) {
    this.myForm = builder.group({
      'letters': ['', Validators.compose([Validators.maxLength(7), Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      'additional': ['', Validators.compose([Validators.maxLength(1), Validators.pattern('[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*')])],
      'option': ['',  Validators.required]
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
