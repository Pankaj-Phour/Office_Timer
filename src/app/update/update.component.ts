import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit,DoCheck {
Form:FormGroup;
ID:any;
disable:boolean = true;
@ViewChild('input2') input2:ElementRef;
@ViewChild('input3') input3:ElementRef;

  constructor(private fb:FormBuilder,
    private api:ApiServiceService,
    private router:Router
    ) { }

  ngOnInit() {
    this.form();
    this.api.indexID$.subscribe((id:any)=>{
      console.log(id);
      
    this.ID = id;

    })
  }

  form(){
    this.Form = this.fb.group({
      Name: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
      Time: new FormControl('',Validators.required)
    })
  }
  formValue(data:any){
    console.log(data,"Data");
    let exit;
    let value1 = data.Time;
    let value2;
    let value1array = [];
    value1array = value1.split(':');
    for(let i=0;i<value1array.length;i++){
      value1array[i] = parseInt(value1array[i]);
    }
    let value1Minutes = value1array[0]*60 + value1array[1];
    if(value1Minutes<540){
      value2 = 1080;
    }
    else{
      value2  = value1Minutes+540;
    }

   let exithours = Math.floor(value2/60);
   let exithh =exithours < 10 ? '0' + (exithours).toString() : exithours.toString()
   let exitMinutes = Math.floor(value2%60);
   let exitmm = exitMinutes < 10 ? '0'+exitMinutes.toString() : exitMinutes.toString();
   exit = exithh + ':' + exitmm;

    let params = {
      id:this.ID,
      name:data.Name,
      date:data.date,
      time:data.Time,
      exit:exit
    }
    console.log(params);
    this.api.update('/updateDetails',params).subscribe((a:any)=>{
      console.log(a,"Success");
    })
    this.router.navigate(['/data'])
    
  }
  ngDoCheck(): void {
    console.log(this.input2);
    console.log(this.input2.nativeElement.value);
    let times = this.input3.nativeElement.value;
    let time = [];
    time = times.split(':');

    for(let i=0;i<time.length;i++){
      time[i]  = parseInt(time[i]);
    }
    let Minutes = time[0]*60 + time[1];
    if(Minutes<480 || Minutes>600){
      this.disable = true;
    } 
    else{
      this.disable = false;
    }
  }
}
