import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Acteur } from 'src/app/Models/Acteur/acteur';
import { Candidat } from 'src/app/Models/Candidat/candidat';
import { Rh } from 'src/app/Models/RH/rh';
import { LoginService } from 'src/app/Services/login/login.service';
import { RHService } from 'src/app/Services/RH/rh.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 
  constructor(private logser:LoginService,private rhser:RHService,private router:Router){}
  ngOnInit(): void {}

  
  login(f:NgForm){
    console.log("test")
    let id=f.value['id'];
    let nom=f.value['nom'];
    let prenom=f.value[''];
    let email=f.value['email'];
    let psw=f.value['passWord'];
    let tel=f.value['tel'];
    let Role=f.value['Role'];
    let photo=f.value['photo'];
    let R:Rh;
    R=new Rh(id,nom,prenom,tel,photo,email,psw,Role);
    this.logser.LoginCan(R).subscribe(
      resultat=>{console.log("login",resultat);
      if(resultat!= null){
        Swal.fire('', 'Login Valide', 'success');
        localStorage.setItem("acteur", JSON.stringify(resultat));
   
    this.router.navigateByUrl("/home/acc");
     
     }}
    )
    this.logser.LoginEntr(R).subscribe(
      resultat=>{console.log("login",resultat);
      if(resultat!= null){
        Swal.fire('', 'Login Valide', 'success');
        localStorage.setItem("acteur", JSON.stringify(resultat));
   
    this.router.navigateByUrl("/home/acc");
     
     }}
    )
    console.log("r",R)

    this.logser.LoginAdmin(R).subscribe(
      resultat=>{console.log("login",resultat);
      if(resultat!= null){
        Swal.fire('', 'Login Valide', 'success');
        localStorage.setItem("acteur", JSON.stringify(resultat));
   
    this.router.navigateByUrl("/home/acc");
     
     }}
    )
  }
  

}
