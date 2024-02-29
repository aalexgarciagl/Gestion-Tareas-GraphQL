import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GraphqlService } from '../../services/grahpql.service';

@Component({
  selector: 'app-gestion-tareas',
  standalone: true,
  imports: [],
  templateUrl: './gestion-tareas.component.html',
  styleUrl: './gestion-tareas.component.css'
})
export class GestionTareasComponent implements OnInit {
  roles: any
  tareas: any
  constructor(private authService: AuthService, private router: Router, private graphqlService: GraphqlService) { }
  ngOnInit(): void {
    this.loadRoles()
    this.loadTareas()
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

  loadTareas(){
    this.graphqlService.getAllTasks().subscribe((result) => {
      this.tareas = result.data.getAllTasks;
    })
  }

  eliminarTarea(id: number){
    if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")){
      this.graphqlService.deleteTask(id).subscribe((result) => {
        window.location.reload();
      })
    }
  }

  goCrearTarea(){
    this.router.navigate(['/crear-tarea']);
  }

  goModificarTarea(id: number){
    this.router.navigate(['/modificar-tarea', id]);
  }
}
