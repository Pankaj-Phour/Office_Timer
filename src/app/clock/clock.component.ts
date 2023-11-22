import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class CLockComponent implements OnInit, OnDestroy {
  Time: number;
  theme: any;
  image: any;
  Remaining: any;
  value: any;
  newData: any = [];
  message: any;
  constructor(private _api: ApiServiceService) { }


  ngOnInit() {
    localStorage.setItem('selected','clock')

    this.image = JSON.parse(localStorage.getItem('url'));
    let a = new Date()
    let b = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
    this.value = JSON.parse(localStorage.getItem('data'));
    let exitTime = (localStorage.getItem('exit'));
    this.value.photo = this.image;
    this.value.Exit = exitTime;
    this.newData.push(this.value)
    localStorage.setItem('newData', JSON.stringify(this.newData));
    setTimeout(() => {
      this._api.postData('/api', this.newData).subscribe((next: any) => {
      });
    }, 300);
    const Exit = this.value.Exit;
    let time1 = [];
    time1 = this.value.Time.split(':');
    for (let i = 0; i < time1.length; i++) {
      time1[i] = parseInt(time1[i]);
    }
    let Minutes1 = time1[0] * 60 + time1[1];

    let time2 = [];
    time2 = Exit.split(':');
    for (let i = 0; i < time2.length; i++) {
      time2[i] = parseInt(time2[i]);
    }
    let Minutes2 = time2[0] * 60 + time2[1];
    let exit = Minutes2 * 60;
    let entry = Minutes1 * 60;
    this.Time = exit - entry;

    let time3 = [];
    time3 = b.split(':');
    for (let i = 0; i < time3.length; i++) {
      time3[i] = parseInt(time3[i]);
    }
    let Minutes3 = time3[0] * 3600 + time3[1] * 60 + time3[2];
    this.Time = ((Minutes2 * 60) - Minutes3)
    const interval = setInterval(() => {
      if (this.Time > 0) {
        let hour = Math.floor(this.Time / 3600);
        let Minutes = Math.floor((this.Time - hour * 3600) / 60);
        let seconds = Math.floor(((this.Time - hour * 3600) - Minutes * 60));
        this.Time--;
        this.Remaining = (hour < 10 ? '0' + hour : hour) + ':' + (Minutes < 10 ? '0' + Minutes : Minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
      }
      else if (this.Time <= 0) {
        this.message = 'Time to go Home'
        clearInterval(interval);
      }
    }, 1000)
  }
  ngOnDestroy(): void {
    localStorage.removeItem(this.newData);
  }
}
