import { Component, OnInit } from '@angular/core';
import { CandidaService } from 'src/app/Services/candidature/candida.service';
import Swal from 'sweetalert2';

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
  id:any;
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
  delete(id: any) {

    // Custom Buttons

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {

      if (result.isConfirmed) {

        console.log('Clicked Yes, File deleted!');
        this.offs.Delete(id).subscribe(
          reultat => {
            console.log("supprimer avec succer");
            this.getValide();
          }
        )

      } else if (result.isDismissed) {

        console.log('Clicked No, File is safe!');

      }
    })

  }
}
