import { Categorie } from "./categorie.model";

export class reservation {
    numreservation! : number;
    nomclient! : string;
    prixsejour! : number;
     datedebut! : Date ;
     datefin! : Date ;
     categorie! :Categorie;
    }