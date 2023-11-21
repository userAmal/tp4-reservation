import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import ReservationComponent from './reservation/reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { LoginComponent } from './login/login.component';
import { ReservationGuard } from './reservation.guard';


@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    AddReservationComponent,
    UpdateReservationComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ReservationGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
