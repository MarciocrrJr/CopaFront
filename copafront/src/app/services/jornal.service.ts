import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jornal } from '../models/jornal.model';

@Injectable({
  providedIn: 'root'
})
export class JornalService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/jornal';

  getNoticias(): Observable<Jornal[]> {
    return this.http.get<Jornal[]>(this.apiUrl);
  }

  salvarNoticia(noticia: Omit<Jornal, 'id'>): Observable<Jornal> {
    return this.http.post<Jornal>(this.apiUrl, noticia);
  }
}