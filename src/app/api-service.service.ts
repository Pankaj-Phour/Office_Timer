import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private https:HttpClient) { }
  postData(endpoint:any,params:any){
    return this.https.post<any>(environment.user + endpoint,params);
  }
  getData(endpoint:any){
    return this.https.get<any>(environment.user + endpoint)
  }

  public submit = new BehaviorSubject<any>('');
  submit$ = this.submit.asObservable();
  
public indexID = new BehaviorSubject<any>('');
indexID$ = this.indexID.asObservable();

public theme = new BehaviorSubject<any>('');
theme$ = this.theme.asObservable()

  update(endpoint:any,id:any){
    return this.https.post<any>(environment.user + endpoint,id)
  }
  delete(endpoint:any){
    return this.https.get<any>(environment.user + endpoint)
  }
}

