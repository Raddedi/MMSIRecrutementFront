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
  LoginEntr(rh:any){
    
    return this.httpclient.post<any>(`${environment.BasedUrl}/responsabl/login`,rh)
      
  }
  LoginCan(can:any){
    
    return this.httpclient.post<any>(`${environment.BasedUrl}/cand/login`,can)
      
  }
  LoginAdmin(admin:any){
   
    return this.httpclient.post<any>(`${environment.BasedUrl}/admin/login`,admin)
      
  }
}
