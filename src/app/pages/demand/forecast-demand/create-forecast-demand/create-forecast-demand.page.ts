import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-forecast-demand',
  templateUrl: './create-forecast-demand.page.html',
  styleUrls: ['./create-forecast-demand.page.scss'],
})
export class CreateForecastDemandPage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = '2020-06-30';
  isSubmitted = false;
  constructor(private activeRoute: ActivatedRoute,
              public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('dealID')) {
        return;
      }
      const dealID = paramMap.get('dealID');
      console.log(dealID);
     });
    this.ionicForm = this.formBuilder.group({
      locationType: ['', [ Validators.required]],
      name: ['', [ Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });

  }
  getDate(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
       onlyself: true
    });
 }
 get errorControl() {
  return this.ionicForm.controls;
}

submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
    }
  }
}

