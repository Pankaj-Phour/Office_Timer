import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraComponent } from './camera/camera.component';
import { CLockComponent } from './clock/clock.component';
import { DataComponent } from './data/data.component';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'', component:FormComponent
  },
  {
    path:'clock', component:CLockComponent
  },
  {
    path:'data', component:DataComponent
  },
  {
    path:'camera', component:CameraComponent
  },
  
  {
    path:'update', component:UpdateComponent
  },
  {
    path:'**', component:FormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
