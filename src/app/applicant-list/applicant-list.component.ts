import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.sass']
})
export class ApplicantListComponent implements OnInit {
  @Output() applicantDeleted = new EventEmitter<any>();
  @Output() applicantSoftDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() applicantData: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

  public softDeleteApplicant(applicant){

    this.applicantSoftDeleted.emit(applicant);
  }

  public deleteApplicant(applicant){
    console.log('Applicant id (in hard delete): ', applicant.id);
    this.applicantDeleted.emit(applicant);
  }

  public editApplicant(applicant){
    this.editClicked.emit(applicant);
  }

  public newApplicant(){
    this.newClicked.emit();
  }

}
