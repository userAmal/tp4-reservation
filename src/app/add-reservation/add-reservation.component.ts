import { Component } from '@angular/core';
import { reservation } from '../model/reservation.model';
import { ReservationService } from '../reservation.service';
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  newReservation = new reservation();
  constructor(private reservationService: ReservationService) { }
  addreservation(){
  // console.log(this.newProduit);
  this.reservationService.ajouterreservation(this.newReservation);
  }
}
