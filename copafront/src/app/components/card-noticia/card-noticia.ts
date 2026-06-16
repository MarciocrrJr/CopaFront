import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Jornal } from '../../models/jornal.model';
import { JornalService } from '../../services/jornal.service';

@Component({
  selector: 'app-card-noticia',
  standalone: false,
  templateUrl: './card-noticia.html',
  styleUrl: './card-noticia.css',
})
export class CardNoticia {
  private jornalService = inject(JornalService);

  @Input({ required: true }) noticia!: Jornal;
  @Output() noticiaExcluida = new EventEmitter<void>();

  protected exibindoModalSenha = false;
  protected senhaDigitada = '';

  abrirConfirmacao(): void {
    this.senhaDigitada = '';
    this.exibindoModalSenha = true;
  }

  fecharConfirmacao(): void {
    this.exibindoModalSenha = false;
    this.senhaDigitada = '';
  }

  confirmarExclusao(): void {
    if (!this.senhaDigitada) {
      alert('Por favor, insira a senha!');
      return;
    }

    this.jornalService.excluirNoticia(this.noticia.id, this.senhaDigitada).subscribe({
      next: () => {
        alert('Notícia excluída com sucesso!');
        this.fecharConfirmacao();
        this.noticiaExcluida.emit();
      },
      error: (err) => {
        if (err.status === 401) {
          alert('Senha incorreta! Permissão negada.');
        } else {
          alert('Erro ao tentar excluir a notícia.');
          console.error(err);
        }
      }
    });
  }
}