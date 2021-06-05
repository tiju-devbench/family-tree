import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from 'rxjs/operators';
import { environment } from './../family-tree-app/src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable(
)
export class FamilyService {
  baseUrl = environment.apiUrl + 'families/';

  constructor(private http: HttpClient) { }

  loadFamilies(){
    return this.http.get(this.baseUrl + 'get');
  }

  addPerson(model: any){
    return this.http.post(this.baseUrl + 'addperson', model);
  }

  addFamily(model: any){
    return this.http.post(this.baseUrl + 'addfamily', model);
  }


}
