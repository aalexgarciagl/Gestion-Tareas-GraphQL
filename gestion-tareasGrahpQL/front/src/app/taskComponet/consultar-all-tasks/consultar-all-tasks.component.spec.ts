import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAllTasksComponent } from './consultar-all-tasks.component';

describe('ConsultarAllTasksComponent', () => {
  let component: ConsultarAllTasksComponent;
  let fixture: ComponentFixture<ConsultarAllTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarAllTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarAllTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
