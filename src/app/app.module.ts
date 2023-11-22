import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CLockComponent } from './clock/clock.component';
import { FormComponent } from './form/form.component';
import {   ConfirmComponent, DataComponent, DeleteComponent, ThemeComponent } from './data/data.component';
import { CameraComponent } from './camera/camera.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button'
import { HttpClientModule } from '@angular/common/http';
// import { MatProgressSpinnerModule } from '@angular/material';
import { MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateComponent } from './update/update.component';
import {MatSelectModule} from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavbarComponent } from './navbar/navbar.component';
// import { ajax } from 'ajax';
// import { MatSpinnerModule} from '@angular'
@NgModule({
  declarations: [
    AppComponent,
    CLockComponent,
    FormComponent,
    DataComponent,
    CameraComponent,
    ConfirmComponent,
    UpdateComponent,
    DeleteComponent,
    ThemeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    BrowserModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    Ng2SearchPipeModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:false
    }),
    BrowserAnimationsModule
  ],
  entryComponents:[ConfirmComponent,DeleteComponent,ThemeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
