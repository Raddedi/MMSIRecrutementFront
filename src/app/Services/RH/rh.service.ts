import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rh } from 'src/app/Models/RH/rh';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RHService {

  constructor(private http:HttpClient) { }
  GetAll(){
    return this.http.get(`${environment.BasedUrl}/responsabl`)
  }
  Delete(id:any){
    return this.http.delete(`${environment.BasedUrl}/responsabl/`+id)

  }
  Update(id:any,user:Rh){
    return this.http.put<Rh>(`${environment.BasedUrl}/responsabl/updat/${id}`,user);
  }

  getById(id:any){
    return this.http.get<Rh>(`${environment.BasedUrl}/responsabl/findById/`+id);
  }
  
  addRH(rh:any){
    console.log(rh)
    return this.http.post<any>(`${environment.BasedUrl}/responsabl/`,rh)
  }
}
