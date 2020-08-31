import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAddOrUpdateComponent } from './applicant-add-or-update.component';

describe('ApplicantAddOrUpdateComponent', () => {
  let component: ApplicantAddOrUpdateComponent;
  let fixture: ComponentFixture<ApplicantAddOrUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantAddOrUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantAddOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
