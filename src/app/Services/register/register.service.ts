import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acteur } from 'src/app/Models/Acteur/acteur';
import { Candidat } from 'src/app/Models/Candidat/candidat';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  AddUser(A:any){
    return this.http.post<any>(`${environment.BasedUrl}/responsabl/`,A); }
}
