import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { reservation } from '../model/reservation.model';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent {
  currentreservation = new reservation();
  constructor(private activatedRoute: ActivatedRoute,private router :Router,

  private reservationService: ReservationService) { }
  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.currentreservation = this.reservationService.consulterreservation(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentreservation);
  }
  updatereservation()
{ //console.log(this.currentProduit);
this.reservationService.updatereservation(this.currentreservation);
this.router.navigate(['reservations']);
}
}
