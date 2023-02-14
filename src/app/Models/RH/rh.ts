import { Acteur } from "../Acteur/acteur";

export class Rh extends Acteur{
    constructor(id:number,nom:String,prenom:String,tel:number,photo:String,email:String,password:String,Role:String){
        super(id, nom, prenom, tel, photo, email, password, Role);
    }
}
