import { Component, OnInit } from '@angular/core';
import { CandidaService } from 'src/app/Services/candidature/candida.service';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent implements OnInit {
  local: any;
  utilisateur: any;
  role: any;
  Candidadture:any;
  constructor(private offs:CandidaService){}
  ngOnInit(): void {
   
    this.getValide();
    this.local=localStorage.getItem("acteur");
    this.utilisateur=JSON.parse(this.local)
    this.role=this.utilisateur.role
  }
 
  getValide(){
    this.offs.getPublication().subscribe(
      resultat => {
        this.Candidadture = resultat;
      console.log("testttt",this.Candidadture)
      }
    )
  }
}
