import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {
  local:any;
  utilisateur:any;
  role:any;
  constructor(private router:Router) { }
  ngOnInit(): void {
    this.local=localStorage.getItem("acteur");
    this.utilisateur=JSON.parse(this.local)
    
    this.role=this.utilisateur.role
    if(this.role==null){
      this.role=this.utilisateur[0].role
    }
    console.log("test role = ",this.role)
  }
  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("");
  }

}
