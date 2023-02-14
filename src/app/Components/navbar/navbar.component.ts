import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private router:Router) { }
  
  utilisateur:any;
  
  nom:any;
  email:any;
  local:any;
 Role:any;
  photo:any;
  id:any;
  ngOnInit(): void {
    this.local=localStorage.getItem("acteur");
    this.utilisateur=JSON.parse(this.local)
    this.id=this.utilisateur.id
    this.email=this.utilisateur.email
    this.photo=this.utilisateur.photo

    console.log("testttttt=",this.utilisateur)
   
      
    this.nom=this.utilisateur.nom; 

}
logOut(){
  localStorage.clear();
  
  this.router.navigateByUrl("");
}

}
