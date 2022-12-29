import { challenge } from './challenge';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServiceChallengeService {

private APIUrlChallenge="http://localhost:8080/challenge"
private APIUrlUserChallenge="http://localhost:8080/challenge/getchallenges"



  constructor(private http:HttpClient) { }
  getAllUserChallenge(id:any){
    return this.http.get<challenge[]>(this.APIUrlUserChallenge +'/'+id);
  }

  getAllChallenges() {
    return this.http.get<challenge[]>(this.APIUrlChallenge);
  }

  UpdateChallenge(c:challenge) {

    return this.http.put<challenge>(this.APIUrlChallenge, c);
  }

  UpdateUserChallenge(c:challenge,id :any) {

    return this.http.put<challenge>(this.APIUrlChallenge + '/' + id, c);
  }

  DeleteChallenge(id: number) {
    return this.http.delete<challenge>(this.APIUrlChallenge +'/' +id);
  }

  Createchallenge(c :challenge ) {
    return this.http.post<challenge>(this.APIUrlChallenge ,c);
  }
  getChallenge(id:number){
    return this.http.get<challenge>(this.APIUrlChallenge+"/"+id);
    }



}
