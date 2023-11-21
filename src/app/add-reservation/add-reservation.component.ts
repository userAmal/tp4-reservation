import { Component } from '@angular/core';
import { reservation } from '../model/reservation.model';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { Type } from '../model/type.model';
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  newReservation = new reservation();
  types! : Type[];
  newidty! : number;
  newtype! : Type;


  constructor(private reservationService: ReservationService, private router:Router) { }
  ngOnInit() {
    this.types = this.reservationService.listetypes();
    }
    addreservation() {
      console.log(this.newidty);
        this.newtype = 
        this.reservationService.consultertypes(this.newidty);
        this.newReservation.type = this.newtype;
        
    this.reservationService.ajouterreservation(this.newReservation);
    this.router.navigate(['reservations']);
    }
    
}
