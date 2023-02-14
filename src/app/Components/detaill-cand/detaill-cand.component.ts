import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from 'src/app/Models/Candidat/candidat';
import { CandService } from 'src/app/Services/cand/cand.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detaill-cand',
  templateUrl: './detaill-cand.component.html',
  styleUrls: ['./detaill-cand.component.css']
})
export class DetaillCandComponent  implements OnInit{
  resp!: Candidat;
  data: any;
  dialogRef: any;
  formGroup!: FormGroup;
  id:any=this.activtedRoute.snapshot.params["id"];
  constructor(private candser:CandService,private router:Router,private activtedRoute:ActivatedRoute,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.getById();
    
    this.formGroup = this.formBuilder.group({
      nom: ['', Validators.required], prenom: ['', Validators.required],
      email: ['', Validators.required],password: ['', Validators.required], 
      
      tel: ['', Validators.required],adress: ['', Validators.required],
    })
  }
  getById(){
    this.candser.getById(this.id).subscribe(
      resultat=>{
        this.resp=resultat,
        console.log("test=",this.resp)
    this.patchValue(this.resp)})
  }
  patchValue(resp:any) {
    this.formGroup.patchValue({
      nom: resp.nom,
      prenom: resp.prenom,
      email: resp.email,
      tel: resp.tel,
      password: resp.password,
      adresse: resp.adresse,
    })}
    update(){
      this.candser.Update(this.id,this.formGroup.value).subscribe(
        resultat=>{
          console.log(resultat);
          this.router.navigateByUrl("home");
          
          this.showSuccessAlert();
  
        }
      )
    }
    showSuccessAlert() {
      Swal.fire('Modifié avec succès', '', 'success')
    }

}
