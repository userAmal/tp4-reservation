import { Injectable } from '@angular/core';
import { reservation } from './model/reservation.model';
import { Router } from '@angular/router';
import { Type } from './model/type.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservations: reservation[];
  reservation! : reservation;
  types :Type[];
  constructor(private router :Router,) {
    this.types=[
      {idty : 1, typereservation : "en ligne"},
      {idty : 2, typereservation: "sur place"
    }]
    this.reservations = [
    {numreservation : 1 , nomclient : "amal bouaouina", prixsejour : 400, datedebut : new Date("11/01/2011"),datefin : new Date("11/04/2011"),type :{idty : 1, typereservation : "en ligne"}},
    {numreservation : 2 , nomclient : "Syrine bousetta", prixsejour : 250, datedebut : new Date("12/05/2011"),datefin : new Date("12/07/2011"),type :{idty : 2, typereservation : "sur place"}},
    {numreservation : 3 , nomclient : "ranim jrad", prixsejour : 500, datedebut : new Date("01/01/2012"),datefin : new Date("01/05/2012"),type :{idty : 1, typereservation : "en ligne"}},

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
listetypes():Type[] {
  return this.types;
  }
  consultertypes(id:number): Type{ 
  return this.types.find(ty => ty.idty == id)!;
  }

    
}
