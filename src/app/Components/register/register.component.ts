
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register/register.service';
import Swal from 'sweetalert2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  formGroup!: FormGroup;
  fileToUpload!: File[];
  constructor(private regser:RegisterService,private formBuilder:FormBuilder,private router:Router){}
  
  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({nom:['',Validators.required],prenom:['',Validators.required],tel:['',Validators.required],email:['',Validators.required],
   password:['',Validators.required],age:['',Validators.required],})
}
addUser(){
  let formData =new FormData();
  formData.append("Nom",this.formGroup.value.nom);
  formData.append("Prenom",this.formGroup.value.prenom);
  
  formData.append("Tel",this.formGroup.value.tel);
  formData.append("email",this.formGroup.value.email);
  formData.append("Password",this.formGroup.value.password);
  formData.append("file",this.fileToUpload[0]);
  this.regser.AddUser(formData).subscribe(
    resultat=>{console.log(resultat);
      Swal.fire('','Ajouter avec succès','success');
      this.router.navigateByUrl("home/login")}
  )
}
handleFileInput(files: any) {
  this.fileToUpload = <Array<File>>files.target.files;
  console.log(this.fileToUpload)
}
}
