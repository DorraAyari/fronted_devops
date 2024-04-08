import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  private baseUrl = 'http://172.20.10.2:8087/chambre';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/findAll`);
  }

  add(universite: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, universite);
  }

  update(id: number, universite: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, universite);
  }

  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/findById/${id}`);
  }
}
