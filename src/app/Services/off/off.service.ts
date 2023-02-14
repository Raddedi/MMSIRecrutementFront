import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffService {

  constructor(private http:HttpClient) { }
  AddPublication(p:any,id:any){
    console.log(p);

    return this.http.post<any>(`${environment.BasedUrl}/off/crepu/`+id,p);
  }
  Delete(id:any){
    return this.http.delete(`${environment.BasedUrl}/off/`+id);
  }
  getPublication(){
    return this.http.get(`${environment.BasedUrl}/off`);
  }
}
