import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GraphqlService } from '../../services/grahpql.service';
import { Rol } from '../../interfaces/rol';

@Component({
  selector: 'app-modificar-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modificar-user.component.html',
  styleUrl: './modificar-user.component.css'
})
export class ModificarUserComponent implements OnInit{
  username: any
  nombre: any
  password: any
  roles:any
  rolEliminar: any
  rolAdd: any
  rolesDisponibles: Rol[] = [];
  rolesActuales: Rol[] = [];


  constructor(private authService: AuthService, private router: Router, private rutaActiva: ActivatedRoute, private grahpqlService: GraphqlService) { }

  ngOnInit(): void {
    this.getUser()
    this.loadRoles()   
    this.getRolesUser() 
    this.getAllRoles()
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

  getAllRoles(){
    this.grahpqlService.getAllRoles().subscribe((result) => {
      this.rolesDisponibles = result.data.getAllRoles  
      if(this.rolesDisponibles == this.rolesActuales){
        this.rolesDisponibles = []
      }else{
        let newArray = this.rolesDisponibles.filter(item1 => !this.rolesActuales.some(item2 => item1.id === item2.id));      
        this.rolesDisponibles = newArray  
      }
        
    })
  }

  getRolesUser(){
    let id = this.rutaActiva.snapshot.params['id']
    const idNumber: number = Number(id);
    this.grahpqlService.getRolesUser(idNumber).subscribe((result) => {
      this.rolesActuales = result.data.getRolesUser
    })
  }

  getUser(){
    let id = this.rutaActiva.snapshot.params['id']
    const idNumber: number = Number(id);
    this.grahpqlService.getUser(idNumber).subscribe((result) => {
      this.username = result.data.getUser[0].user_name
      this.nombre = result.data.getUser[0].name
      this.password = result.data.getUser[0].password
    })
  }


  enviar(){
    let id = this.rutaActiva.snapshot.params['id']
    const idNumber: number = Number(id);
    this.grahpqlService.modificarUsuario(idNumber, this.username, this.password, this.nombre).subscribe((result) => {
      this.router.navigate(['/gestion-usuarios']);
    })
  }

  addRol(){
    let id = this.rutaActiva.snapshot.params['id']
    const idNumber: number = Number(id);
    const rolNumber: number = Number(this.rolAdd);
    this.grahpqlService.addRol(idNumber, rolNumber).subscribe((result) => {
      this.router.navigate(['/gestion-usuarios']);
    })
  }

  deleteRol(){
    let id = this.rutaActiva.snapshot.params['id']
    const idNumber: number = Number(id);
    const rolNumber: number = Number(this.rolEliminar);
    this.grahpqlService.deleteRol(idNumber, rolNumber).subscribe((result) => {
      this.router.navigate(['/gestion-usuarios']);
    })
  }

}
