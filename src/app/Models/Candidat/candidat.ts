import { Acteur } from "../Acteur/acteur";

export class Candidat extends Acteur {
    constructor(public adress:string,id:number,nom:String,prenom:String,tel:number,photo:String,email:String,password:String,Role:String){
        super(id, nom, prenom, tel, photo, email, password, Role);
        this.adress=adress;
    }
  
}
