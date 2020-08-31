import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplicantServiceService } from './applicant-service.service';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantAddOrUpdateComponent } from './applicant-add-or-update/applicant-add-or-update.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplicantListComponent,
    ApplicantAddOrUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApplicantServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
