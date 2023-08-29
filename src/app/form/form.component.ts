import {  Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import{Axios} from 'axios'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('input2')  input2:ElementRef;


  title = 'Project for Practice';
  totalTime:any;
    theme:boolean = true;
    TimeError:boolean = false;
    UserTimeExit:any;
    hours: number;
    minutes: number;
    seconds: number;
    dataError:boolean = false;
    Hours: any;
    Form: FormGroup;
    dateCheck: string;
    ExitTime: any;
    disable:boolean = true;
    timeStamp: any;
  EarlyTime: string;
  submit:boolean = false;
  // Testing = new FormControl('dfgf',Validators.required)
  constructor(private router:Router){}
  
  TimeToMinutes(data){
    let time = [];
    time = data.split(':');
    for(let i = 0; i< time.length;i++){
      time[i] = parseInt(time[i]);
    }
    let Minutes = time[0]*60 + time[1];
    return Minutes;
  }
  MinutesToHours(Minutes){
    let hours = Math.floor(Minutes/60);
    let hh = hours < 10 ? '0'+(hours).toString() : (hours).toString();
    let min = Math.floor(Minutes%60);
    let mm = min < 10 ? '0' + (min).toString() : (min).toString();
    let time = hh + ':' + mm 
    return time;
  }

  ngOnInit(): void {
    localStorage.setItem('selected','form')
    let today = new Date();
  const dd = String(today.getDate()).padStart(2,'0');
  const mm = String(today.getMonth()+1).padStart(2,'0');
  const yyyy = today.getFullYear();
  let Today = yyyy + '-' + mm + '-' + dd;
  this.dateCheck = Today;
    this.formValidation();
  }
  formValidation(){
    this.Form = new FormGroup({
   Name: new FormControl('',Validators.required),
   date: new FormControl('',Validators.required),
   Time:new FormControl('',Validators.compose([Validators.required]))
    })
  }
  formValue(data:any){
    this.submit  = true;
    setTimeout(() => {
    this.submit  = false;
    }, 3000);
    const officeHours = '09:30';
    const regex = new RegExp(':','g');
    const FinalTime = '10:30';
  this.EarlyTime = '08:00';

    if(this.Form.valid) {
      
      if((parseInt(data.Time.replace(regex,''),10) < parseInt(FinalTime.replace(regex,''),10)) && parseInt(data.Time.replace(regex,''),10) > parseInt(this.EarlyTime.replace(regex,''),10) && data.date == this.dateCheck){
        console.log("Hurray");
        this.TimeError = false;
        console.log(data.Time);
       
      this.dataError = false;
        
    let time1 = [];
    time1 = data.Time.split(':');
    for(let i = 0; i< time1.length;i++){
      time1[i] = parseInt(time1[i]);
    }
    let Minutes1 = time1[0]*60 + time1[1];
  console.log(Minutes1,"Entry");
    let time2 = [];
    time2 = officeHours.split(':');
    for(let i = 0; i< time2.length;i++){
      time2[i] = parseInt(time2[i]);
    }
    let Minutes2 = time2[0]*60 + time2[1];
  console.log(Minutes2, "Exit");
  this.timeStamp = Minutes2 * 60;
  localStorage.setItem('Time',this.timeStamp)
  let value = Minutes1 + Minutes2;
  this.totalTime = value;
  let userTime = this.TimeToMinutes(data.Time);
  console.log(userTime);
  if(userTime<510){
    userTime = 510
  }
  let officeTime = this.TimeToMinutes(officeHours);
  console.log(officeTime);
  this.ExitTime = userTime + officeTime;
    localStorage.setItem('data',JSON.stringify(data));
    localStorage.setItem('theme',JSON.stringify(this.theme));
    localStorage.setItem('exit',this.MinutesToHours(this.ExitTime))
    this.Form.reset();
      this.router.navigate(['camera'])
  }
  else {
    if(parseInt(data.Time.replace(regex,''),10) < parseInt(this.EarlyTime.replace(regex,''),10) || parseInt(data.Time.replace(regex,''),10) > parseInt(FinalTime.replace(regex,''),10)){
    this.TimeError = true;
    setTimeout(() => {
      this.TimeError = false
    }, 3000);
    }
    if(data.date !== this.dateCheck){
      console.log('Error');
      this.dataError = true;
      setTimeout(() => {
        this.dataError = false
      }, 3000);
    }
  }
  }
  }
}
