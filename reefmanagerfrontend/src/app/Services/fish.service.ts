import { Fish } from 'src/app/Model/Fish';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FishService {
  baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Fish[]> {
    const url = this.baseUrl + '/fishs/all';
    return this.httpClient.get<Fish[]>(url);
  }

  findById(id: any): Observable<Fish> {
    const url = this.baseUrl + '/fishs/findid/' + id;
    return this.httpClient.get<Fish>(url);
  }

  create(obj: Fish): Observable<Fish> {
    const url = this.baseUrl + '/fishs/create';
    return this.httpClient.post<Fish>(url, obj);
  }

  update(obj: Fish): Observable<Fish> {
    const url = this.baseUrl + '/fishs/update/' + obj.id;
    return this.httpClient.put<Fish>(url, obj);
  }

  delete(id: number):Observable<void>{
    const url = this.baseUrl + "/fishs/delete/" + id;
    return this.httpClient.delete<void>(url);
  }

}
