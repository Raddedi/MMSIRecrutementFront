import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Candidat } from 'src/app/Models/Candidat/candidat';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandService {

  constructor(private http:HttpClient) { }
  GetAllCand(){
    return this.http.get(`${environment.BasedUrl}/cand/`)
  }
  addcand(candidat:any){
    console.log(candidat)
    return this.http.post<any>(`${environment.BasedUrl}/cand/`,candidat)
  }
  Delete(id:any){
    return this.http.delete(`${environment.BasedUrl}/cand/`+id)

  }
  Update(id:any,user:Candidat){
    return this.http.put<Candidat>(`${environment.BasedUrl}/cand/updatede/${id}`,user);
  }
  getById(id:any){
    return this.http.get<Candidat>(`${environment.BasedUrl}/cand/findById/`+id);
  }
}
