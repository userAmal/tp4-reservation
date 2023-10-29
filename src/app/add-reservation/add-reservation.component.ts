import { Component } from '@angular/core';
import { reservation } from '../model/reservation.model';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  newReservation = new reservation();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  constructor(private reservationService: ReservationService, private router:Router) { }
  ngOnInit() {
    this.categories = this.reservationService.listeCategories();
    }
    addreservation() {
    this.newCategorie = 
    this.reservationService.consulterCategorie(this.newIdCat);
    this.newReservation.categorie = this.newCategorie;
    this.reservationService.ajouterreservation(this.newReservation);
    this.router.navigate(['reservations']);
    }
    
}
