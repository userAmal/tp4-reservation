import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ReservationComponent from './reservation/reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
const routes: Routes = [
  {path: "updatereservation/:id", component: UpdateReservationComponent},
{path: "reservations", component : ReservationComponent},
{path: "reservation", component :  ReservationComponent},
{path: "add-reservation", component :  AddReservationComponent},
{path: "", redirectTo: "reservation", pathMatch: "full"} 
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
