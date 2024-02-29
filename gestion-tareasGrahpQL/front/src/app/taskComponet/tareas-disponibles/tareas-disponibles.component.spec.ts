import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasDisponiblesComponent } from './tareas-disponibles.component';

describe('TareasDisponiblesComponent', () => {
  let component: TareasDisponiblesComponent;
  let fixture: ComponentFixture<TareasDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasDisponiblesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareasDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
