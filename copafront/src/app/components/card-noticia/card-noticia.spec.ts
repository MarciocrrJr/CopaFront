import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoticia } from './card-noticia';

describe('CardNoticia', () => {
  let component: CardNoticia;
  let fixture: ComponentFixture<CardNoticia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardNoticia],
    }).compileComponents();

    fixture = TestBed.createComponent(CardNoticia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
