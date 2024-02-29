import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GraphqlService } from '../../services/grahpql.service';

@Component({
  selector: 'app-crear-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})
export class CrearTareaComponent implements OnInit {
  roles: any
  constructor(private authService: AuthService, private router: Router, private grahpqlService: GraphqlService) { }
  descripcion: any
  dificultad: any
  horas_estimadas: any
  asignado: any
  ngOnInit(): void {
    this.loadRoles()
  }

  loadRoles(){
    if(sessionStorage.getItem('token') != null){
      this.roles = this.authService.getRoles();
      if(!this.roles.includes('administrador')){
        this.router.navigate(['/login']);
      }
    }else{
      this.router.navigate(['/login']);
    }
  }

  crearTarea(){
    this.grahpqlService.crearTarea(this.descripcion, this.dificultad, this.horas_estimadas,0,0,0,0).subscribe((result) => {
      this.router.navigate(['/gestion-tareas']);
    })
  }

  
}
