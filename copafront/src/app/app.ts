import { Component, OnInit, inject, signal } from '@angular/core';
import { JornalService } from './services/jornal.service';
import { Jornal } from './models/jornal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  private jornalService = inject(JornalService);

  protected readonly title = signal('copafront');
  protected readonly noticias = signal<Jornal[]>([]);

  ngOnInit(): void {
    this.carregarNoticias();
  }

  carregarNoticias(): void {
    this.jornalService.getNoticias().subscribe({
      next: (dados) => this.noticias.set(dados),
      error: (err) => console.error('Erro ao buscar notícias:', err)
    });
  }
}