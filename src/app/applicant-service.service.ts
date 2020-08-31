import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantServiceService {
  private headers: HttpHeaders;
  private applicantsAPI = 'https://localhost:44382/api/applicants';
 

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    // Get all applicants and their data
    return this.http.get(this.applicantsAPI, {headers: this.headers});
  }

  public add(data) {
    return this.http.post(this.applicantsAPI, data, {headers: this.headers});
  }

  public remove(data) {
    return this.http.delete(this.applicantsAPI + '/' + data.id, {headers: this.headers});
  }

  public update(data) {
    return this.http.put(this.applicantsAPI + '/' + data.id, data, {headers: this.headers});
  }

}
