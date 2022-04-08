import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseApiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(id: number, nome: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseApiUrl + `/apis/${id}` + `/${nome}`);
  }


}
