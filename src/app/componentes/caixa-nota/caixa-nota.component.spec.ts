import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaNotaComponent } from './caixa-nota.component';

describe('CaixaNotaComponent', () => {
  let component: CaixaNotaComponent;
  let fixture: ComponentFixture<CaixaNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaixaNotaComponent]
    });
    fixture = TestBed.createComponent(CaixaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
