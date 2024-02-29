import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GraphqlService } from '../../services/grahpql.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modificar-tarea.component.html',
  styleUrl: './modificar-tarea.component.css'
})
export class ModificarTareaComponent implements OnInit {
  dificultad: any
  descripcion: string = 'buenas'
  horas_estimadas: any
  asignado: any
  asignarA: any
  roles: any
  completada: any
  porcentage_realizacion: any
  horas_realizadas: any
  users: any
  idUserAsignado: any
  constructor(private authService: AuthService, private router: Router, private rutaActiva: ActivatedRoute, private graphqlService:GraphqlService) { }

  ngOnInit(): void {
    this.getTarea()
    this.getUsers()
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

  getUsers(){
    this.graphqlService.getAllUsers().subscribe((result) => {
      this.users = result.data.getAllUsers
      console.log(this.users)
    })
  }

  modificarTarea(){
    let id = this.rutaActiva.snapshot.params['id']
    const idNumber: number = Number(id);
    const horasPrevistas: number = Number(this.horas_estimadas);
    const horasRealizadas: number = Number(this.horas_realizadas);
    const porcentage_realizacion: number = Number(this.porcentage_realizacion);
    const completada: number = Number(this.completada);
    const asignada: number = Number(this.asignado);
    console.log(horasPrevistas)
    this.graphqlService.modificarTarea(idNumber, this.descripcion, this.dificultad, horasPrevistas, horasRealizadas, porcentage_realizacion, completada, asignada).subscribe((result) => {
      this.router.navigate(['/gestion-tareas']);
    })
  }

  getTarea(){
    let id = this.rutaActiva.snapshot.params['id']
    const idNumber: number = Number(id);
    this.graphqlService.getTask(idNumber).subscribe((result) => {
      let tarea = result.data.getTask[0]
      console.log(tarea)
      this.descripcion = tarea.descripcion
      this.dificultad = tarea.dificultad
      this.horas_estimadas = tarea.horas_previstas
      this.asignado = tarea.asignada  
      this.idUserAsignado = tarea.asignada 
      this.horas_realizadas = tarea.horas_realizadas
      this.porcentage_realizacion = tarea.porcentage_realizacion  
      this.completada = tarea.completada
    })
  }

  asignarTarea(){
    let idTask = this.rutaActiva.snapshot.params['id']
    const id: number = Number(idTask);
    const idUser: number = Number(this.idUserAsignado);
    const asignado: number = Number(this.asignado);

    console.log(id)
    console.log(idUser)
    console.log(asignado)
    console.log(this.asignado)

    if(this.asignado == "null"){
      console.log(id)
      console.log(idUser)
      this.graphqlService.deleteAsignacion(id, idUser).subscribe((result) => {
        this.router.navigate(['/gestion-tareas']);
      })
    }else{
      this.graphqlService.asignarTarea(id, asignado).subscribe((result) => {
        this.router.navigate(['/gestion-tareas']);
      })
    }
  }  
}
