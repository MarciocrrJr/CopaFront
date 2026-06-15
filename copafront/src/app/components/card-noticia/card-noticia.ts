import { Component, Input } from '@angular/core';
import { Jornal } from '../../models/jornal.model';

@Component({
  selector: 'app-card-noticia',
  standalone: false,
  templateUrl: './card-noticia.html',
  styleUrl: './card-noticia.css',
})
export class CardNoticia {
  @Input({ required: true }) noticia!: Jornal;
}