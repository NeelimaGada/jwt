import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private ht:HttpClient) { }
  register(user){
    return this.ht.post('http://192.168.3.112:9999/users/save',user);
  }
  login_user(log){
    return this.ht.post('http://192.168.3.112:9999/token/generate-token',log);
  }
}
