import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ChangeDetectorRef,AfterContentChecked, ViewChild, ViewChildren, AfterContentInit, DoCheck } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';


let mediaStream;
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnDestroy,OnInit,AfterContentChecked,DoCheck{
data:any; 
theme:any;
error:boolean=true;
array:any = [];
picture:boolean;
message:boolean=false;
btnDisplay:boolean = true;
image:any;
ID:any;
color:any = 'black';
camera:boolean = false;
search:string;
  constructor(private router:Router,
    private _api:ApiServiceService,
    public changeDetector:ChangeDetectorRef,
    public dialogRef:MatDialog,
    ) { }
@ViewChild('btn') btn:ElementRef;
@ViewChild('btn2') btn2:ElementRef;
@ViewChild('table') table:ElementRef;
@ViewChild('tabledata') tabledata:ElementRef;
@ViewChild('body') body:ElementRef;
@ViewChild('Body') Body:ElementRef;

@ViewChild('update') update:ElementRef;
@ViewChildren('tableheaders') tableheaders:ElementRef;
@ViewChild('btncontainer') btncontainer:ElementRef;


@ViewChild('span') span:ElementRef;
@ViewChild('button') button:ElementRef;
@ViewChild('video') video:ElementRef;
@ViewChild('button2') button2:ElementRef;
@ViewChild('container') container:ElementRef;
@ViewChild('submit') submit:ElementRef;
@ViewChild('canvas') canvas:ElementRef;
@ViewChild('photo') photo:ElementRef;

loader(data:any){

     console.log("data",data);
     
  if(data===undefined){
    this.error=true;
    setTimeout(() => {
      this.message = true;

      setTimeout(()=>{
        this.message = false;
        this.loader(data)
      },2000)
    }, 5000);
  }
  else{
    this.error=false;
  }
}
  dataFunction() {
  this._api.getData('/user').subscribe((next:any)=>{
    console.log("next",next);
    
    this.data = next.response;
// this.loader(this.data);
console.log(this.data);


   })
   
setTimeout(() => {
  console.log(this.data);
  if(this.data===undefined){
    this.loader(this.data)
  }
  else{
    this.error = false;
  }
}, 1000);

  console.log(this.error);

//     let a=this.table;
//     let b = this.btn;
//     let c = this.btn2;
//     let d = this.body;
// console.log(this.table);

//     // if(this.table !== undefined){

    
//   const table = a.nativeElement.style;
//   const button1 = b.nativeElement.style;
//   const button2 =c.nativeElement.style;
//     const body =d.nativeElement.style;
  //  const data = JSON.parse(localStorage.getItem('newData'));
   this.theme = localStorage.getItem('theme');
  //  this.data = data[0];

// this.image = this.data[0].photo;
// console.log(this.image);

// if(this.theme=='true'){
//   console.log(this.table);
//   setTimeout(() => {
  
//   this.body.nativeElement.style.backgroundColor = 'white';
//   this.table.nativeElement.style.border = '1px solid gray';
//   this.table.nativeElement.style.backgroundColor = 'white';
//   this.btn.nativeElement.style.backgroundColor = 'gray'
//   this.btn.nativeElement.style.border = '1px solid black';
//   this.btn2.nativeElement.style.backgroundColor = 'gray'
//   this.btn2.nativeElement.style.border = '1px solid black';

// for(let i=1;i<this.table.nativeElement.childNodes[0].childNodes.length;i++){
//   console.log(this.table.nativeElement.childNodes[0].childNodes);
//   for(let j=0;j<this.table.nativeElement.childNodes[0].childNodes[i].childNodes.length;j++){
//   this.table.nativeElement.childNodes[0].childNodes[i].childNodes[j].style.color = 'black';
//   this.table.nativeElement.childNodes[0].childNodes[i].childNodes[j].style.border = '1px solid black';
//   this.table.nativeElement.childNodes[0].childNodes[i].childNodes[j].style.textAlign = 'center'
//   this.table.nativeElement.childNodes[0].childNodes[i].childNodes[j].style.fontSize = '19px'
//   this.table.nativeElement.childNodes[0].childNodes[i].childNodes[j].style.fontWeight = '600'
//   this.table.nativeElement.childNodes[0].childNodes[i].childNodes[j].style.fontFamily = 'cursive'

//   }
// }
// }, 100);

// }
// else{
//   setTimeout(() => {
//   this.body.nativeElement.style.backgroundColor = 'black';
//   this.table.nativeElement.style.border = '1px solid white';
//   this.table.nativeElement.style.backgroundColor = 'black';
//   this.btn.nativeElement.style.backgroundColor = 'black';
//   this.btn.nativeElement.style.border = '1px solid white';
//   this.btn2.nativeElement.style.backgroundColor = 'black';
//   this.btn2.nativeElement.style.border = '1px solid white';
//     for(let i=1;i<this.table.nativeElement.childNodes[0].childNodes.length;i++){
//       console.log(this.table.nativeElement.childNodes[0].childNodes);
//       for(let j=0;j<this.table.nativeElement.childNodes[0].childNodes[i].childNodes.length;j++){
//       this.table.nativeElement.childNodes[0].childNodes[i].childNodes[j].style.color = 'white';
//       this.table.nativeElement.childNodes[0].childNodes[i].childNodes[j].style.border = '1px solid white';
//       this.table.nativeElement.childNodes[0].childNodes[i].childNodes[j].style.textAlign = 'center';
//       // this.table.nativeElement.childNodes[0].childNodes[i].childNodes[j].style.width = '20%';

//       }
//     }
//     }, 400);

// }
  //  if(this.btn){
  //   this.btn.nativeElement.innerHTML = 'Home Page';
  //   const button = this.btn.nativeElement.style;
  //   button.color = 'white';
  //   button.width = '200px';
  //   // button.backgroundColor = 'gray';
  //   button.fontWeight = '600';
  //   button.fontSize  = '22px';
  //   button.padding = '20px';
  //   button.cursor = 'pointer';
  //   button.borderRadius  = '10px';
  //   button.textAlign = 'center';
  //   button.marginTop = '20px';
  //   // button.border = '1px solid white';
  // }
  setTimeout(() => {
    // for(let i=0;i<this.table.nativeElement.childNodes[0].childNodes;i++){
      // if(this.update){
      //   console.log("Update");
        
      //   this.update.nativeElement.innerHTML = 'Update';
      //   const button = this.update.nativeElement.style;
      //   button.color = 'white';
      //   button.width = '150px';
      //   button.border = '2px solid gray'
      //   button.backgroundColor = 'gray';
      //   button.fontWeight = '600';
      //   button.fontSize  = '22px';
      //   button.padding = '10px';
      //   button.cursor = 'pointer';
      //   button.borderRadius  = '10px';
      //   button.textAlign = 'center';
      //   button.marginTop = '10px';
    
      // }
    // }
   
  }, 300);
 
// if(this.table){
//   this.table.nativeElement.style.maxWidth = '1920px';
//   this.table.nativeElement.style.margin = 'auto'
//   this.table.nativeElement.style.width = '100%';
//   this.table.nativeElement.style.borderCollapse = 'collapse';
// }
// if(this.tabledata){
//   console.log(this.tabledata,"tablerow");
  
// }
  // if(this.btn2){
  //   const button = this.btn2.nativeElement.style;
  //   this.btn2.nativeElement.innerHTML = 'Clear Data'
  //   button.color = 'white';
  //   button.width = '200px';
  //   // button.backgroundColor = 'gray';
  //   button.fontWeight = '600';
  //   button.fontSize  = '22px';
  //   button.padding = '20px';
  //   button.cursor = 'pointer';
  //   button.borderRadius  = '10px';
  //   button.textAlign = 'center';
  //   button.marginTop = '20px';
  //   // button.border = '1px solid white';
  
  // }
// if(this.body){
//   // body.maxWidth = '100vh'
//   body.Width = '100vw';
//   body.maxHeight = '100vh'
//   body.height = '100vh'
// }
  // if(this.btncontainer){
  //   const container = this.btncontainer.nativeElement.style;
    
  //   container.display = 'flex';
  //   container.width = '100%'
  //   container.justifyContent = 'space-around';
  //   container.position = 'relative';
  //   container.bottom = '2%';
  // }
  // if(this.tableheaders){
  //   const headers = this.tableheaders.nativeElement.style;
  //   headers.color = 'red'
  //   // if(this.theme === true){
  //   //   headers.color = 'black';

  //   // }
  //   // else{
  //   //   headers.color = 'white'
  //   // }
  // }
// }
  }
home(){
  console.log("Routing");
  
this.router.navigate([''])
}
clear(){
  console.log("clear");
  
localStorage.clear();
}
ngOnDestroy(): void {
  localStorage.clear();
}
Update(id:any){
  console.log(id,"id");
  this.ID = this.data[id]._id;
  console.log(this.ID);
  this._api.indexID.next(this.ID)
  console.log(this.data);
  
  this.error = false;
 let open = this.dialogRef.open(ConfirmComponent,{
  })
  open.afterClosed().subscribe(()=>{
    console.log("Closed");
    this._api.submit$.subscribe((value:any)=>{
      console.log(value);
      if(value===true){
        this.camera=true;
        this.submit.nativeElement.style.display = 'none'
        this.button.nativeElement.innerHTML = 'Camera'
      } 
      else{
        this.camera = false;
      }
    })
  })
 
}
delete(id:any){
  this.ID = this.data[id]._id;
  this._api.indexID.next(this.ID)
  console.log(this.ID);
  
    let a = this.dialogRef.open(DeleteComponent, {
      
    })
}

load(){
  this.button2.nativeElement.style.display = 'block'
  this.span.nativeElement.style.display = 'none';
  setTimeout(()=>{
    this.submit.nativeElement.innerHTML = 'Capture'
    this.photo.nativeElement.style.display = 'none';
    
    
  },100)
this.btnDisplay = false;
this.video.nativeElement.style.display = 'flex';
setTimeout(()=>{
this.submit.nativeElement.style.display = 'block';

},1000)
console.log("Load");
  navigator.mediaDevices.getUserMedia({video:true}).then((stream:any)=>{
    const video = this.video.nativeElement;
    video.style.backgroundColor = 'white';
   video.srcObject = stream;
   mediaStream = stream;
  })
}
stop(){
  this.span.nativeElement.style.width = 'max-content'
  this.span.nativeElement.style.display = 'flex';

this.video.nativeElement.style.display = 'none';
this.submit.nativeElement.style.display = 'none';

  this.btnDisplay = true;
  mediaStream.getTracks().forEach((element:any)=>{
    element.stop();
    console.log("Stopped");
    
  })
}
Submit(){
  console.log(this.ID);
  
console.log("Submitted");
this.camera = false;
// window.location.reload();
console.log("data ------------------", this.data)
console.log("aya ya nhi",this.data[0].name)

let obj={
  id: this.ID,
  url: this.image
}
this._api.update('/update',obj).subscribe((next:any)=>{
  console.log(next);
  
})
window.location.reload();
}

capture(){
  this.button.nativeElement.innerHTML = "Retry";
  this.span.nativeElement.style.display = 'none';
  this.button2.nativeElement.style.display = 'none';
  this.submit.nativeElement.style.display = 'none';
  setTimeout(()=>{
    this.photo.nativeElement.style.display = 'flex';
    this.picture = true;
  })
this.imageDimension(this.video.nativeElement.clientWidth-30,this.video.nativeElement.clientHeight-30);
this.image = this.canvas.nativeElement.toDataURL('image/png');
// localStorage.setItem('url',this.image);
this.stop();
this.array.push(this.image);
console.log(this.array);
// localStorage.setItem('url',this.array);

}
imageDimension(width:any,height:any){
 let context = this.canvas.nativeElement.getContext('2d');
 this.canvas.nativeElement.setAttribute('height',height);
 this.canvas.nativeElement.setAttribute('width',width);
 context.drawImage(this.video.nativeElement,0,0,width,height);
}


ngOnInit() {
  localStorage.setItem('selected','data')

  // setTimeout(()=>{
    this.dataFunction()

  // },3000)
  setTimeout(()=>{
  this.picture = false;
  // this.data = JSON.parse(localStorage.getItem('data'));
  // console.log(this.data);
  
  if((localStorage.getItem('url')) !== null){
    let arraydata =  JSON.parse(localStorage.getItem('url'));
    console.log(arraydata,"Local");
    
   this.array = [...arraydata];
       }
       else{
       }

  // this.load();
  if(this.body){
  const body = this.body.nativeElement.style;
  const button = this.button.nativeElement.style;
  const video = this.video.nativeElement.style;
  const theme = localStorage.getItem('theme');
  console.log(theme,"Theme");
  setTimeout(()=>{
    if(theme == 'true'){
      console.log("if");
      
      body.background = 'linear-gradient(#57217A, #664EA1, #192557)';
    }
    else{
      console.log("Else");
      button.border = '1px solid white'
      body.backgroundColor = 'black'
    }
  },100)
  
  // if(this.body){
  //   // this.body.nativeElement.style.backgroundColor = 'black'
  //   this.body.nativeElement.style.width = '100vw';
  // this.body.nativeElement.style.height = '100vh'
  // }
  // if(this.button){
  //   this.button.nativeElement.innerHTML = 'Next'
  //   let button = this.button.nativeElement.style;
  //   button.width = '130px';
  //   button.borderRadius = '6px';
  //   button.fontSize = '18px';
  //   // button.fontFamily = 'cursive';
  //   button.fontWeight = '600';
  //   button.textAlign = 'center';
  //   button.position = 'absolute';
  //   button.transform = 'translate(-50%,-50%)';
  //   button.bottom = '0';
  //   button.left = '80%';
  //   button.padding = '15px';
  //   button.cursor = 'pointer'
  // }

  // if(this.submit){
  //   this.submit.nativeElement.innerHTML = 'Capture'
  //   let button = this.submit.nativeElement.style;
  // button.width = '170px';
  // button.backgroundColor = '#568ad7';
  // button.color = 'white'
  //   button.borderRadius = '6px';
  //   button.border = '1px solid white'
  //   button.fontSize = '18px';
  //   button.fontWeight = '600';
  //   button.display = 'none'
  //   button.textAlign = 'center';
  //   button.position = 'absolute';
  //   button.transform = 'translate(-50%,-50%)';
  //   button.top = '420%';
  //   button.left = '50%';
  //   button.padding = '15px';
  //   button.cursor = 'pointer'
  // }
// if(this.button2){
//   this.button2.nativeElement.innerHTML = 'Stop Camera'
//   let button = this.button2.nativeElement.style;
//   button.width = '170px';
//     button.borderRadius = '6px';
//     button.fontSize = '18px';
//     button.fontWeight = '600';
//     button.textAlign = 'center';
//     button.position = 'absolute';
//     button.transform = 'translate(-50%,-50%)';
//     button.bottom = '0';
//     button.left = '20%';
//     button.padding = '15px';
//     button.cursor = 'pointer'
// }
  // if(this.video){
  //   video.padding = '30px';
  //   video.paddingBottom = '60px';
    
  //   video.position = 'absolute';
  //   video.transform = 'translate(-50%,-50%)';
  //   video.top = '50%';
  //   video.left = '50%'
  //   video.width = '500px';
  //   video.height = '400px';
  // }
  // if(this.container){
  //   const container = this.container.nativeElement.style;
  //   container.backgroundColor = 'white';
  //   container.borderRadius = '10px'
  //  container.fontSize = '22px';
  //  container.padding = '15px'
  //   container.position = 'absolute';
  //   container.transform = 'translate(-50%,-50%)';
  //   container.top = '50%';
  //   container.left = '50%'
  // }
}

},200)
}
ngAfterContentChecked(): void {
  setTimeout(() => {
  // this.changeDetector.detectChanges();
    if(this.picture===true){
      if(this.span){
      this.span.nativeElement.style.display = 'none';
      }
    }
  this.body.nativeElement.style.background = this.color;

  }, 1000);
}

selector(){
  console.log("Select");
  let open = this.dialogRef.open(ThemeComponent,{

  })
  open.afterClosed().subscribe((a:any)=>{
    this._api.theme$.subscribe((value:any)=>{
      console.log(value);
    
      this.color = value.toString();
    })
   
  })
}
ngDoCheck(): void {
}

}
@Component({
  selector:'app-data',
  templateUrl:'./confirm.html',
  styleUrls: ['./data.component.css']
})
export class ConfirmComponent implements OnInit{
  constructor(private dialogRef:MatDialog,
    private fb:FormBuilder,
    private api:ApiServiceService,
    private router:Router
    ){}
  selection:FormGroup;
  ID:any;
submitted:boolean=false;
value:any;
  ngOnInit(): void {
    // this.form();
    console.log("Hello");
  }
  // form(){
  //   this.selection = this.fb.group({
  //     // choice: new FormControl(Validators.required)
  //   })
  // }
  submit(e:any){
    console.log(e);
    
    console.log("Submitted");
    console.log(this.selection); 
    this.dialogRef.closeAll();
if(this.value == '1'){
 
  this.router.navigate(['/update']);
  this.submitted = false;

}
else{
  this.submitted = true;
}
this.api.submit.next(this.submitted);

  }
 
  select1(e:any){
    console.log(e); 
  }
  select2(e:any){
    console.log(e);
    
  }
  group(e:any){
    console.log(e);
    this.value = e.value;
    
  }
}









  //  Delete Component Code

@Component({
  selector:'app-data',
  templateUrl:'./delete.html',
  styleUrls: ['./data.component.css']
})
export class DeleteComponent implements OnInit{
  constructor(private api:ApiServiceService){

  }
  ID:any;
  ngOnInit(): void {
    console.log("Delete component");
  }
  yes(){
    console.log("delted");
    this.api.indexID$.subscribe((id:any)=>{
      console.log(id);
      
      this.ID  = id;
    })
    let params = {
      id:this.ID
    }
    console.log(params);
    
    this.api.delete(`/deleteUser?id=${this.ID}`).subscribe((e:any)=>{
      console.log(e);
      
    })
    // window.location.reload();
  }
}






    // Theme component Code 

    
@Component({
  selector:'app-data',
  templateUrl:'./theme.html',
  styleUrls: ['./data.component.css']
})
export class ThemeComponent implements OnInit{
  constructor(private dialogRef:MatDialog,
    private api:ApiServiceService
    ){}
  ngOnInit(): void {
    console.log("Theme");
    
  }
  select(e:any){
    console.log("Select");
    console.log(e);
this.api.theme.next(e.value)
  }
  change(){
    console.log("Closeed");
    
    this.dialogRef.closeAll();
  }

}