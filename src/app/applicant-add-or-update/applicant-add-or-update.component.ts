import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ApplicantServiceService } from '../applicant-service.service';

@Component({
  selector: 'app-applicant-add-or-update',
  templateUrl: './applicant-add-or-update.component.html',
  styleUrls: ['./applicant-add-or-update.component.sass']
})
export class ApplicantAddOrUpdateComponent implements OnInit {

  //create input, bound to input form via ngmodel in corresponding html file
  @Input() applicantDetails: any;
  @Output() newApplicantCreated = new EventEmitter<any>();

  constructor() { 
    this.clearApplicant();
  }

  //instantiate empty Applicant object
  public clearApplicant(){
    this.applicantDetails = {
      id: 'undefined',
      name: '',
      email: '',
      phoneNumber: 0,
      loanAmount: 0
    }
  }

  ngOnInit(){
  }

  public addOrUpdateApplicant = function (event){
    //emit applicant object (applicantDetails) bound to html form over our eventemitter
    this.newApplicantCreated.emit(this.applicantDetails);
    console.log('inside addorupdateapplicant');
    this.clearApplicant;
  }
}
