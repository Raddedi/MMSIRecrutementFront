import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidaService } from 'src/app/Services/candidature/candida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-candidature',
  templateUrl: './add-candidature.component.html',
  styleUrls: ['./add-candidature.component.css']
})
export class AddCandidatureComponent implements OnInit {
  formGroup!: FormGroup;
  fileToUpload!: File[];
  id:any;
 local:any;
 utilisateur:any;
 constructor(  private offser:CandidaService, private formBuilder:FormBuilder,private router:Router ) { }
  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({description:['',Validators.required],competence:['',Validators.required],niveau:['',Validators.required], })
    this.local=localStorage.getItem("acteur");
    this.utilisateur=JSON.parse(this.local);
    this.id=this.utilisateur.id
   console.log("test = ",this.id);
   
   
  }
  submitted:boolean;

  addOffer(){
    if (this.formGroup.invalid) {
      this.submitted=true;
      return;
    }
   else {
    let formData =new FormData();
    formData.append("Description",this.formGroup.value.description);
    formData.append("competence",this.formGroup.value.competence);
    formData.append("niveau",this.formGroup.value.niveau);
    formData.append("file",this.fileToUpload[0]);
    this.offser.AddPublication(formData,this.id).subscribe(
      resultat=>{console.log(resultat);
        Swal.fire('','Ajouter avec succès','success');
        this.router.navigateByUrl("home/aff")
       }
    )
  } }
 

handleFileInput(files: any) {
  this.fileToUpload = <Array<File>>files.target.files;
  console.log(this.fileToUpload)
}

}
