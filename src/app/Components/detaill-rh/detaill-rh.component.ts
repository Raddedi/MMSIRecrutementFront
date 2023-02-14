import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rh } from 'src/app/Models/RH/rh';
import { RHService } from 'src/app/Services/RH/rh.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detaill-rh',
  templateUrl: './detaill-rh.component.html',
  styleUrls: ['./detaill-rh.component.css']
})
export class DetaillRhComponent implements OnInit {
  resp!: Rh;
  data: any;
  dialogRef: any;
  formGroup!: FormGroup;
  id:any=this.activtedRoute.snapshot.params["id"];
  constructor(private rhServ:RHService,private router:Router,private activtedRoute:ActivatedRoute,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.getById();
    
    this.formGroup = this.formBuilder.group({
      nom: ['', Validators.required], prenom: ['', Validators.required],
      email: ['', Validators.required],password: ['', Validators.required], 
      
      tel: ['', Validators.required],
    })
  }
  getById(){
    this.rhServ.getById(this.id).subscribe(
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
    })}
    update(){
      this.rhServ.Update(this.id,this.formGroup.value).subscribe(
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
