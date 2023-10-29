import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { reservation } from '../model/reservation.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent {
  currentreservation = new reservation();
  categories! : Categorie[];
updatedCatId! : number;
  constructor(private activatedRoute: ActivatedRoute,private router :Router,

  private reservationService: ReservationService) { }
  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.categories = this.reservationService.listeCategories();
  this.currentreservation = 
  this.reservationService.consulterreservation(this.activatedRoute.snapshot.params['id']);
  this.updatedCatId=this.currentreservation.categorie.idCat;
  
  }
  updatereservation() {
    this.currentreservation.categorie=this.reservationService.consulterCategorie(this.updatedCatId);
    this.reservationService.updatereservation(this.currentreservation);
    this.router.navigate(['reservations']);
    }
}
