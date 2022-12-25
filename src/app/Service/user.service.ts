import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const  APIUrlUser ="http://localhost:8080/user";
const ID_KEY = 'auth-id';
const ROLE_KEY ="auth-role";
const EMAIL_KEY ="auth-email";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient){  }

  // Authentification
  login(data :{email : string,password : string}): Observable<any>{
    return this.http.post("http://localhost:8080/user/findbyep", data)
  }
  register(user : any): Observable<any> {
    return this.http.post(APIUrlUser,user);
  }

  //Crud User
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

  // Save the user In session stoage
  public saveToken(id :string,role : string,email : string): void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, id);
    window.sessionStorage.setItem(ROLE_KEY, role);
    window.sessionStorage.setItem(EMAIL_KEY, email);


  }

  // get the user from session stoage
  public getToken(): string | null {
    return window.sessionStorage.getItem(ID_KEY) !== null ? window.sessionStorage.getItem(ID_KEY) : null  ;
  }
  public getRole(): string | null {
    return window.sessionStorage.getItem(ROLE_KEY) !== null ? window.sessionStorage.getItem(ROLE_KEY) : null  ;
  }
  public getEmail(): string | null {
    return window.sessionStorage.getItem(ID_KEY) !== null ? window.sessionStorage.getItem(EMAIL_KEY) : null  ;
  }


}
