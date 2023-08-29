import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
form:boolean = false;
camera:boolean = false;
clock:boolean = false;
data:boolean = false;

  constructor() { }

  ngOnInit() {
    
  }
  ngDoCheck() {
    let value = localStorage.getItem('selected')
    if (value== 'form') {
      this.form = true;
      this.clock = false;
      this.camera = false;
      this.data = false;
    }
    else if (value== 'camera') {
      this.camera = true;
      this.clock = false;
      this.data = false;
      this.form = false;
  }
  else if (value== 'clock') {
        this.clock = true;
        this.data = false;
        this.form = false;
        this.camera = false;
  }
  else if (value== 'data') {
      this.data = true;
      this.form = false;
      this.camera = false;
      this.clock = false;
  }
}

}
