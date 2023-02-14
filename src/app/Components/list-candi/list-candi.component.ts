import { Component, OnInit } from '@angular/core';
import { CandService } from 'src/app/Services/cand/cand.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-candi',
  templateUrl: './list-candi.component.html',
  styleUrls: ['./list-candi.component.css']
})
export class ListCandiComponent implements OnInit{
  Candidat:any;
  p:number=1;
  term:string="";
  constructor(private condser:CandService){}
  ngOnInit(): void {
    console.log("here ng on init");
    this.GetAllCand();
    this.scrollTo("c1")
  }
  scrollTo(className: string):void {
    console.log("here scroll")
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });}
    GetAllCand(){
      this.condser.GetAllCand().subscribe(
        (resultat:any)=>{
          console.log("resultat: ",resultat)
          this.Candidat=resultat;
        console.log("after result: ",this.Candidat)}
    
      )
    }
    delete(id:any){
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
          this.condser.Delete(id).subscribe(
            reultat=>{console.log("supprimer avec succer");
            this.GetAllCand();}
          )
  
        } else if (result.isDismissed) {
  
          console.log('Clicked No, File is safe!');
  
        }
      })
  
    }

}
