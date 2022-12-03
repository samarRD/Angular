import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const  APIUrlUser ="http://localhost:8080/user";
const ID_KEY = 'auth-id';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient){  }

  login(data :{email : string,password : string}): Observable<any>{
    return this.http.post("http://localhost:8080/user/findbyep", data)
  }
  register(user : any): Observable<any> {
    return this.http.post(APIUrlUser,user);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${APIUrlUser}/${id}`);
  }
  getAll(): Observable<any> {
    return this.http.get<any[]>(APIUrlUser);
  }
  Update(id: any, data :any): Observable<any> {

    return this.http.put(`${APIUrlUser}/${id}`,data);
  }
  Delete(id: any): Observable<any> {
    return this.http.delete(APIUrlUser +'/' +id);
  }
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(id :string): void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, id);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(ID_KEY) !== null ? window.sessionStorage.getItem(ID_KEY) : null  ;
  }


}
