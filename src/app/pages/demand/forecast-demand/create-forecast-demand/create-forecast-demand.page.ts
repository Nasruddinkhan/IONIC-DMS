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
      bandGrade: ['', [ Validators.required]],
      lob: ['', [ Validators.required]],
      skillelement: ['', [Validators.required]],
      startDate: ['',  [ Validators.required]],
      endDate: ['',  [ Validators.required]],
      noOfresource: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }
  getDate(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('startDate').setValue(date, {
       onlyself: true
    });
 }
 getendDate(e) {
  const date = new Date(e.target.value).toISOString().substring(0, 10);
  this.ionicForm.get('endDate').setValue(date, {
     onlyself: true
  });
 }
 get errorControl() {
  return this.ionicForm.controls;
}

submitForm() {
    this.isSubmitted = true;
    console.log(this.ionicForm.value);
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
    }
  }
}

