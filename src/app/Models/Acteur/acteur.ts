export class Acteur {
    public id:number;
    public nom:String;
    public prenom:String;
    public tel:number;
    public photo:String;
    public email:String;
    public password:String;
    public Role:String;
    constructor(id:number,nom:String,prenom:String,tel:number,photo:String,email:String,password:String,Role:String){
        this.id=id;
        this.nom=nom;
        this.prenom=prenom;
        this.tel=tel;
        this.photo=photo;
        this.email=email;
        this.password=password;
        this.Role=Role;
    }
}
