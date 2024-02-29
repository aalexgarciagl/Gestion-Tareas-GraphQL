import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GraphqlService } from '../../services/grahpql.service';

@Component({
  selector: 'app-tareas-disponibles',
  standalone: true,
  imports: [],
  templateUrl: './tareas-disponibles.component.html',
  styleUrl: './tareas-disponibles.component.css'
})
export class TareasDisponiblesComponent implements OnInit {
  roles: any
  tasks: any
  constructor(private authService: AuthService, private router:Router, private graphqlService:  GraphqlService) { }

  ngOnInit(): void {
    this.loadRoles()
    this.loadTareas()
  }

  loadRoles(){
    if(sessionStorage.getItem('token') != null){
      this.roles = this.authService.getRoles();
      if(!this.roles.includes('programador')){
        this.router.navigate(['/login']);
      }
    }else{
      this.router.navigate(['/login']);
    }
  }

  asignarTarea(id: number){
    if(confirm("¿Estás seguro de que quieres asignarte esta tarea?")){
      const idUser = this.authService.getUid()
      console.log(idUser)
      this.graphqlService.asignarTarea(id, idUser).subscribe((result) => {
        window.location.reload();
      })
    }
  }

  loadTareas(){
    this.graphqlService.getTaskLibres().subscribe((result) => {
      this.tasks = result.data.getTaskLibres;
      console.log(this.tasks)
    })
  }

  
}
