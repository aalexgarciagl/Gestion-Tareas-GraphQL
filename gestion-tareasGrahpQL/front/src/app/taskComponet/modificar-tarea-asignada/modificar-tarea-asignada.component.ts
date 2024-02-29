import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GraphqlService } from '../../services/grahpql.service';

@Component({
  selector: 'app-modificar-tarea-asignada',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modificar-tarea-asignada.component.html',
  styleUrl: './modificar-tarea-asignada.component.css'
})
export class ModificarTareaAsignadaComponent implements OnInit {
  horas_realizadas: any
  porcentage_realizacion: any
  completada: any
  roles: any
  descripcion: any
  dificultad: any
  horas_estimadas: any
  asignado: any
  idUserAsignado: any
  constructor(private authService: AuthService, private router:Router, private rutaActiva: ActivatedRoute, private graphqlService: GraphqlService) { }

  ngOnInit(): void {
    this.getTarea()
    this.loadRoles()
  }

  getTarea(){
    let id = this.rutaActiva.snapshot.params['id']
    const idNumber: number = Number(id);
    this.graphqlService.getTask(idNumber).subscribe((result) => {
      let tarea = result.data.getTask[0]
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
      this.router.navigate(['/tareas-asignadas']);
    })
  }

  eliminarAsignacion(){
    if(confirm('¿Estas seguro de eliminar la asignacion?')){
      let id = this.authService.getUid()
      const idUser: number = Number(id)
      let id_tarea = this.rutaActiva.snapshot.params['id']
      const idTarea:number = Number(id_tarea)
      this.graphqlService.deleteAsignacion(idTarea,idUser).subscribe((result) => {
        this.router.navigate(['/tareas-asignadas']);
      })
    }
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
}
