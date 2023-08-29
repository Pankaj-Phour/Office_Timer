import { JsonPipe } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { start } from 'repl';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit, OnDestroy {
  btn: boolean = true;
  image: any;
  picture: boolean = false;
  data: any = [];
  array: any = [];
  mediaStream: any;

  constructor(private location: LocationStrategy) {
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href)
    })
  }
  @ViewChild('video') video: ElementRef;
  @ViewChild('submit') submit: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('photo') photo: ElementRef;


  ngOnInit() {
    localStorage.setItem('selected','camera')
    this.load()
    this.picture = false;
    this.data = JSON.parse(localStorage.getItem('data'));
    console.log(this.data);
  }
  load() {
    this.btn = false;
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream: any) => {
      const video = this.video.nativeElement;
      video.style.backgroundColor = 'white';
      video.srcObject = stream;
      this.mediaStream = stream;
    })
  }
  stop() {
    this.mediaStream.getTracks().forEach((element: any) => {
      element.stop();
    })
  }
  recap() {
    this.load();
    this.picture = false;

  }
  Capture() {
    this.picture = true;
    this.imageDimension(this.video.nativeElement.clientWidth, this.video.nativeElement.clientHeight - 30);
    this.image = this.canvas.nativeElement.toDataURL('image/png');
    this.stop();
  }
  imageDimension(width: any, height: any) {
    let context = this.canvas.nativeElement.getContext('2d');
    this.canvas.nativeElement.setAttribute('height', height);
    this.canvas.nativeElement.setAttribute('width', width);
    context.drawImage(this.video.nativeElement, 0, 0, width, height);
  }
  ngOnDestroy(): void {
    localStorage.setItem('url', JSON.stringify(this.image));
  }
}
