import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const  APIUrlUser ="http://localhost:8080/user";
const ID_KEY = 'auth-id';
const ROLE_KEY ="Role";

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
  Update(data :any): Observable<any> {

    return this.http.put(APIUrlUser,data);
  }
  Delete(id: any): Observable<any> {
    return this.http.delete(APIUrlUser +'/' +id);
  }
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(id :string,role : string): void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, id);
    window.sessionStorage.setItem(ROLE_KEY, role);

  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(ID_KEY) !== null ? window.sessionStorage.getItem(ID_KEY) : null  ;
  }
  public getRole(): string | null {
    return window.sessionStorage.getItem(ROLE_KEY) !== null ? window.sessionStorage.getItem(ROLE_KEY) : null  ;
  }


}
