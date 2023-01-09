import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invertebrate } from '../Model/Invertebrate';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvertebrateService {
  baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Invertebrate[]> {
    const url = this.baseUrl + '/inverts/all';
    return this.httpClient.get<Invertebrate[]>(url);
  }

  findById(id: any): Observable<Invertebrate> {
    const url = this.baseUrl + '/inverts/findid/' + id;
    return this.httpClient.get<Invertebrate>(url);
  }

  create(obj: Invertebrate): Observable<Invertebrate> {
    const url = this.baseUrl + '/inverts/create';
    return this.httpClient.post<Invertebrate>(url, obj);
  }

  update(obj: Invertebrate): Observable<Invertebrate> {
    const url = this.baseUrl + '/inverts/update/' + obj.id;
    return this.httpClient.put<Invertebrate>(url, obj);
  }

  delete(id: number):Observable<void>{
    const url = this.baseUrl + "/inverts/delete/" + id;
    return this.httpClient.delete<void>(url);
  }

}

