export class Candidadture {
    public id:number;
    public description:String;
	public niveau:String;
	public competence:String;
	public expérience:String;
    public file:any ;
    public date:String ;
    constructor(id:number,description:String,niveau:String,competence:String,expérience:String,file:any,date:String){
        this.id=id;
        this.description=description;
        this.competence=competence;
        this.expérience=expérience;
        this.niveau=niveau;
        this.date=date;
    this.file=file;
    }
    
}
