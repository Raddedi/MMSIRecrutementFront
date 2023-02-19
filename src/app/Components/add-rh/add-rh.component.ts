import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register/register.service';
import { RHService } from 'src/app/Services/RH/rh.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-rh',
  templateUrl: './add-rh.component.html',
  styleUrls: ['./add-rh.component.css']
})
export class AddRhComponent implements OnInit{
  [x: string]: any;
  formGroup!: FormGroup;
  
  fileToUpload!: File[];
  constructor(private rhs:RHService,private form:FormBuilder, private router:Router){}
    
  ngOnInit(): void {
    this.formGroup=this.form.group({nom:['',Validators.required],prenom:['',Validators.required],tel:['',Validators.required],email:['',Validators.required],
   password:['',Validators.required]})
  }
  submitted:boolean;
  addUser(){
    
      if (this.formGroup.invalid) {
        this.submitted=true;
        return;
      }
else{
    let formData =new FormData();
  formData.append("nom",this.formGroup.value.nom);
  formData.append("prenom",this.formGroup.value.prenom);
  
  formData.append("tel",this.formGroup.value.tel);
  formData.append("email",this.formGroup.value.email);
  formData.append("password",this.formGroup.value.password);
  formData.append("file",this.fileToUpload[0]);
  this.rhs.addRH(formData).subscribe(
    resultat=>{console.log(resultat);
      Swal.fire('','Ajouter avec succès','success');
      this.router.navigateByUrl("home/RHList")}
  )
  }}
  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

}
