import { Component, OnInit } from '@angular/core';
import { Rh } from 'src/app/Models/RH/rh';
import { RHService } from 'src/app/Services/RH/rh.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-rh',
  templateUrl: './list-rh.component.html',
  styleUrls: ['./list-rh.component.css']
})
export class ListRhComponent implements OnInit{
  rh:any;
  p:number=1;
  term:string="";

  constructor(private rhser:RHService){}
  ngOnInit(): void {
    console.log("here ng on init");
    this.GetAll();
    this.scrollTo("c1")
  }
  scrollTo(className: string):void {
    console.log("here scroll")
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });}
GetAll(){
  this.rhser.GetAll().subscribe(
    (resultat:any)=>{
      console.log("resultat: ",resultat)
      this.rh=resultat;
    console.log("after result: ",this.rh)}

  )}
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
        this.rhser.Delete(id).subscribe(
          reultat=>{console.log("supprimer avec succer");
          this.GetAll();}
        )

      } else if (result.isDismissed) {

        console.log('Clicked No, File is safe!');

      }
    })

  }

}

