import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  private baseUrl = 'http://localhost:8089/chambre';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/findAll`);
  }

  add(chambre: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, chambre);
  }

  update(id: number, chambre: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, chambre);
  }
  

  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/findById/${id}`);
  }
}
