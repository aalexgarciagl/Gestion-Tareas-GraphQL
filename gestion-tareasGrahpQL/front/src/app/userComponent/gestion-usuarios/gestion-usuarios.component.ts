import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GraphqlService } from '../../services/grahpql.service';

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export class GestionUsuariosComponent implements OnInit{
  roles: any
  constructor(private router: Router, private authService: AuthService, private grahpqlService: GraphqlService) { }
  users: any

  ngOnInit(): void {
    this.loadRoles()
    this.loadUsers()
  }
  
  loadUsers(){
    this.grahpqlService.getAllUsers().subscribe((result) => {
      this.users = result.data.getAllUsers;
      console.log(result.data.getAllUsers);
    })
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

  goModificarUser(id: number){
    this.router.navigate(['/modificar-usuario', id]);
  }

  eliminarUser(id: number){
    if (confirm("¿Estás seguro de que quieres eliminar este usuario?")){
      this.grahpqlService.deleteUser(id).subscribe((result) => {
        window.location.reload();
      })
    }
  }

  goInsertarUser(){
    this.router.navigate(['/insertar-usuario']);
  }
}
