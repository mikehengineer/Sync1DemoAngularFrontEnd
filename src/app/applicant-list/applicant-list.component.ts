import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.sass']
})
export class ApplicantListComponent implements OnInit {
  @Output() applicantDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() applicantData: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

  public deleteApplicant(applicant){
    this.applicantDeleted.emit(applicant);
  }

  public editApplicant(applicant){
    this.editClicked.emit(applicant);
  }

  public newApplicant(){
    this.newClicked.emit();
  }

}
