import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coral } from 'src/app/Model/Coral';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoralService {
  baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Coral[]> {
    const url = this.baseUrl + '/corals/all';
    return this.httpClient.get<Coral[]>(url);
  }

  findById(id: string): Observable<Coral> {
    const url = this.baseUrl + '/corals/findid/' + id;
    return this.httpClient.get<Coral>(url);
  }

  create(obj: Coral): Observable<Coral> {
    const url = this.baseUrl + '/corals/create';
    return this.httpClient.post<Coral>(url, obj);
  }

  update(obj: Coral, id: any): Observable<Coral> {
    const url = this.baseUrl + '/corals/edit/' + id;
    return this.httpClient.put<Coral>(url, obj);
  }

  delete(id: any):Observable<void>{
    const url = this.baseUrl + '/corals/delete/' + id;
    return this.httpClient.delete<void>(url)
  }

}
