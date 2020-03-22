import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contract } from './contract';


@Injectable({
  providedIn: 'root'
})
export class ContractService {

  baseApiUri:string = 'https://localhost:44382/api' 

  constructor(private http: HttpClient) { }

  getContracts = (getActive: boolean, getInactive: boolean) => {
    return this.http.get(`${this.baseApiUri}/GetContractList/${getActive}/${getInactive}`); 
  }
}
