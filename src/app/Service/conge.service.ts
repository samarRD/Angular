import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const  APIUrlUser ="http://localhost:8080/Conge";

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private http:HttpClient) { }
  //Crud User
  get(id: any): Observable<any> {
    return this.http.get(`${APIUrlUser}/${id}`);
  }
  getAll(): Observable<any> {
    return this.http.get<any[]>(APIUrlUser);
  }
  Update(data :any): Observable<any> {
    return this.http.put(APIUrlUser+'/' +data.id,data);
  }
  Delete(id: any): Observable<any> {
    return this.http.delete(APIUrlUser +'/' +id);
  }
  add(conge : any): Observable<any> {
    return this.http.post(APIUrlUser,conge);
  }
}
