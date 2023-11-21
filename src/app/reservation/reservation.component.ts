import { Component } from '@angular/core';
import {  reservation } from '../model/reservation.model';
import { ReservationService } from '../reservation.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
})
export default class ReservationComponent  {
  reservations: reservation[];
  constructor(private reservationservice: ReservationService ,public authService: AuthService ) {
    this.reservations = reservationservice.listereservations();
    }
    supprimerreservation(r: reservation)
  {
  //console.log(r);
   let conf = confirm("Etes-vous sûr ?");
   if (conf)
    this.reservationservice.supprimerreservation(r);
  }
  


}
