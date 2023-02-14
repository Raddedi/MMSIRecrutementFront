import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acteur } from 'src/app/Models/Acteur/acteur';
import { Rh } from 'src/app/Models/RH/rh';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) {}
  LoginUser(user:Rh){
    console.log(user)
    return this.httpclient.post<any>(`${environment.BasedUrl}/responsabl/login`,user)
      
  }
}
