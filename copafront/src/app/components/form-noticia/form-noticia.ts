import { Component, Output, EventEmitter, inject } from '@angular/core';
import { JornalService } from '../../services/jornal.service';

@Component({
  selector: 'app-form-noticia',
  standalone: false,
  templateUrl: './form-noticia.html',
})
export class FormNoticia {
  private jornalService = inject(JornalService);

  @Output() noticiaSalva = new EventEmitter<void>();

  protected novaNoticia = {
    titulo: '',
    subtitulo: '',
    conteudo: '',
    autor: '',
    data: new Date().toISOString().split('T')[0]
  };

  cadastrarNoticia(): void {
    if (!this.novaNoticia.titulo || !this.novaNoticia.conteudo || !this.novaNoticia.autor) {
      alert('Por favor, preencha o título, conteúdo e autor.');
      return;
    }

    this.jornalService.salvarNoticia(this.novaNoticia).subscribe({
      next: () => {
        alert('Notícia publicada com sucesso!');
        this.noticiaSalva.emit();
        this.limparFormulario();
      },
      error: (err) => console.error('Erro ao salvar notícia:', err)
    });
  }

  limparFormulario(): void {
    this.novaNoticia = {
      titulo: '',
      subtitulo: '',
      conteudo: '',
      autor: '',
      data: new Date().toISOString().split('T')[0]
    };
  }
}