import { Injectable } from '@angular/core';
import { reservation } from './model/reservation.model';
import { Router } from '@angular/router';
import { Categorie } from './model/categorie.model';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservations: reservation[];
  reservation! : reservation;
  categories!:Categorie[];
  constructor(private router :Router,) {
    this.categories=[      {idCat : 1, nomCat : "le client suivant est nouveau"},
    {idCat : 2, nomCat : "Le client a déjà séjourné précédemment"}]
    this.reservations = [
    {numreservation : 1 , nomclient : "amal bouaouina", prixsejour : 400, datedebut : new Date("11/01/2011"),datefin : new Date("11/04/2011"),categorie : {idCat : 1, nomCat : "le client suivant est nouveau"}},
    {numreservation : 2 , nomclient : "Syrine bousetta", prixsejour : 250, datedebut : new Date("12/05/2011"),datefin : new Date("12/07/2011"),categorie : {idCat : 2, nomCat :" Le client a déjà séjourné précédemment"}},
    {numreservation : 3 , nomclient : "ranim jrad", prixsejour : 500, datedebut : new Date("01/01/2012"),datefin : new Date("01/05/2012"),categorie : {idCat : 1, nomCat : "le client suivant est nouveau"}},

    ]
    
  }
  listereservations():reservation[] {
    return this.reservations;

  }
  ajouterreservation( res: reservation){
  this.reservations.push(res);
  this.router.navigate(['reservation']);

  }
  supprimerreservation( res: reservation){
    //supprimer le produit prod du tableau reservation
    const index = this.reservations.indexOf(res, 0);
    if (index > -1) {
    this.reservations.splice(index, 1);
    }
    //ou Bien
    /* this.reservation.forEach((cur, index) => {
    if(res.numreservation === cur.numreservation) {
    this.reservations.splice(index, 1);
    }
    }); */
  }
  consulterreservation(id:number): reservation{
    this.reservation = this.reservations.find(p => p.numreservation == id)!;
    return this.reservation;
  }
  trierreservations(){
    this.reservations = this.reservations.sort((n1,n2) => {
    if (n1.numreservation ! > n2.numreservation!) {
    return 1;
    }
    if (n1.numreservation! < n2.numreservation!) {
    return -1;
    }
    return 0;
    });
    }
  updatereservation(r:reservation)
{
// console.log(r);
  this.supprimerreservation(r);
  this.ajouterreservation(r);
  this.trierreservations();

}
listeCategories():Categorie[] {
  return this.categories;
  }
  consulterCategorie(id:number): Categorie{ 
  return this.categories.find(cat => cat.idCat == id)!;
  }
    
}
