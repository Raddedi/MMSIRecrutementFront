import { Component, OnInit } from '@angular/core';
import { OffService } from 'src/app/Services/off/off.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  offer:any;
 
  local: any;
  utilisateur: any;
  role: any;
  

  constructor(private offs:OffService){}
  ngOnInit(): void {
    this.getValide();
    this.local=localStorage.getItem("acteur");
    this.utilisateur=JSON.parse(this.local)
    this.role=this.utilisateur.role
  }
  getValide(){
    this.offs.getPublication().subscribe(
      resultat => {
        this.offer = resultat;
      console.log("Faffiche la liste des offres",this.offer)
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
