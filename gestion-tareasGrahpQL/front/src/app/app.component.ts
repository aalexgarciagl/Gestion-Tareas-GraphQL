import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  roles: any

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadRoles()
  }

  goGestionUsers(){
    this.router.navigate(['/gestion-usuarios']);
  }

  goGestionTareas(){
    this.router.navigate(['/gestion-tareas']);
  }
  
  esRutaLogin(){
    return window.location.pathname == '/login';
  }

  loadRoles(){
    if(sessionStorage.getItem('token') == null){
      this.roles = [];
    }else{
      this.roles = this.authService.getRoles();
    }
  }

  goAllTasks(){
    this.router.navigate(['/all-tasks']);
  }

  goTareasAsignadas(){
    this.router.navigate(['/tareas-asignadas']);
  }

  goTareasDisponibles(){
    this.router.navigate(['/tareas-disponibles']);
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  
}
