import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GraphqlService } from '../../services/grahpql.service';

@Component({
  selector: 'app-tareas-asignadas',
  standalone: true,
  imports: [],
  templateUrl: './tareas-asignadas.component.html',
  styleUrl: './tareas-asignadas.component.css'
})
export class TareasAsignadasComponent implements OnInit{
  roles: any
  tasks: any
  constructor(private authService: AuthService, private router: Router, private graphqlService: GraphqlService) { }

  ngOnInit(): void {
    this.loadRoles()
    this.getTareasByUserAsignado()
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

  getTareasByUserAsignado(){
    const idUser = this.authService.getUid()
    const idUsernumber: number = Number(idUser)
    this.graphqlService.getTareasByUserAsignado(idUser).subscribe((result) => {
      this.tasks = result.data.getTareasByUserAsignado;
      console.log(this.tasks)
    })
  }

  goModificarTareaAsignada(id:number){
    this.router.navigate(['/modificar-tarea-asignada', id]);
  }

}
