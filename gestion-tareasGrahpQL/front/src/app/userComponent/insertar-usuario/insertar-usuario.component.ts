import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GraphqlService } from '../../services/grahpql.service';

@Component({
  selector: 'app-insertar-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insertar-usuario.component.html',
  styleUrl: './insertar-usuario.component.css'
})
export class InsertarUsuarioComponent implements OnInit{
  nombre: string = ''
  password: string = ''
  username: string = ''
  roles: any
  allRoles: any
  rol: any

  constructor(private authService: AuthService, private router:Router, private grahpqlService: GraphqlService) { }

  ngOnInit(): void {
    this.loadRoles()
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
      this.allRoles = result.data.getAllRoles;      
    })
  }

  enviar(){
    this.grahpqlService.insertarUser(this.nombre, this.username, this.password).subscribe((result) => {
      let user = result.data.insertarUser
      const rolNumber: number = Number(this.rol);
      this.grahpqlService.addRol(user.id, rolNumber).subscribe((result) => {
        this.router.navigate(['/gestion-usuarios']);
      })
    })
  }

}
