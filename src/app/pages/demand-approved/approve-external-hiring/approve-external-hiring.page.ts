import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-external-hiring',
  templateUrl: './approve-external-hiring.page.html',
  styleUrls: ['./approve-external-hiring.page.scss'],
})
export class ApproveExternalHiringPage implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit() {
  }
  externalHiring(pages){
    console.log('calling');
    this.router.navigate([`/demandapproval/${pages}`]);
  }
}
