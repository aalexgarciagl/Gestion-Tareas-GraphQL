import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTareaAsignadaComponent } from './modificar-tarea-asignada.component';

describe('ModificarTareaAsignadaComponent', () => {
  let component: ModificarTareaAsignadaComponent;
  let fixture: ComponentFixture<ModificarTareaAsignadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarTareaAsignadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarTareaAsignadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
