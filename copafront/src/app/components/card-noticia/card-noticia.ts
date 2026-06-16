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

  solicitarExclusao(): void {
    const senhaDigitada = prompt('Digite a senha de administrador para excluir esta noticia:');
    
    if (senhaDigitada === null) return;

    this.jornalService.excluirNoticia(this.noticia.id, senhaDigitada).subscribe({
      next: () => {
        alert('Exclusão realizada com sucesso!');
        this.noticiaExcluida.emit();
      },
      error: (err) => {
        if (err.status === 401) {
          alert('Senha incorreta');
        } else {
          alert('Erro ao tentar excluir');
          console.error(err);
        }
      }
    });
  }
}