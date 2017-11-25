import { ResultsPage } from './../results/results';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsPlausible } from '../../validators/letters';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  myForm: FormGroup;
  queryDetails: {letters: string, additional: string, option: string} = {letters: '', additional: '', option: ''};

  constructor(private navCtrl: NavController, private builder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.myForm = this.builder.group({
      'letters': ['', Validators.compose([Validators.maxLength(7), Validators.pattern('[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*'), Validators.required, IsPlausible])],
      'additional': ['', Validators.compose([Validators.maxLength(1), Validators.pattern('[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*')])],
      'option': ['', Validators.required]
    });
  }

  onSubmit(formData) {
    if (this.myForm.valid) {
      console.log('Form data is ', formData);
      this.navCtrl.push(ResultsPage, {
        letters: formData.letters + formData.additional,
        option: formData.option
      });
    }

  }

  isValid(field: string) {
    let formField = this.myForm.get(field);
    return formField.valid || formField.pristine;
  }

  isEmpty(field: string) {
    let formField = this.myForm.get(field);
    return formField.pristine || formField.value === '';
  }
}
