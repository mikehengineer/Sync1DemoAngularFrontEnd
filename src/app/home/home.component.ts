import { Component, OnInit } from '@angular/core';
import { ApplicantServiceService } from '../applicant-service.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public applicantData: Array<any>;
  public currentApplicant: any;

  constructor(private applicantService: ApplicantServiceService) {
    applicantService.get().subscribe(( data:any ) => this.applicantData = data);
    this.currentApplicant = this.setInitialValuesForApplicant();
   }

  setInitialValuesForApplicant() {
    return{
      id: undefined,
      name: '',
      email: '',
      phoneNumber: '',
      loanAmount: '',
      softDelete: ''
    }
  }

  public softDeleteApplicant = function(applicant){
    applicant.softDelete = "true";
    var softDeleteIndex = _.findIndex(this.applicantData, {id: applicant.id});
    this.applicantService.update(applicant).subscribe(
      softDeleteReturn => this.applicantData.splice(softDeleteIndex, 1)
    ); 
  }

  public createOrUpdateApplicant = function (Applicant: any){
    let applicantWithId;
    applicantWithId = _.find(this.applicantData, (el => el.id === Applicant.id));

    if (applicantWithId){
      const updateIndex = _.findIndex(this.applicantData, {id: applicantWithId.id});
      this.applicantService.update(Applicant).subscribe(
        applicantRecord => this.applicantData.splice(updateIndex, 1, Applicant)
      );
    } else {
      this.applicantService.add(Applicant).subscribe(
        applicantRecord => this.applicantData.push(applicantRecord)
      );
    }
    this.currentApplicant = this.setInitialValuesForApplicant();
  }

  public editClicked = function(applicant){
    this.currentApplicant = applicant;
  }

  public newClicked = function(){
    this.currentApplicant = this.setInitialValuesForApplicant();
  }

  public applicantDeleted(applicant){
    const deleteIndex = _.findIndex(this.applicantData, {id: applicant.id})
    this.applicantService.remove(applicant).subscribe(
      result => this.applicantData.splice(deleteIndex, 1)
    );
  }

  ngOnInit(): void {
  }

}
