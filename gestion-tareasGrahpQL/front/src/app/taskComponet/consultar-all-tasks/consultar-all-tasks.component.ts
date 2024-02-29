import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GraphqlService } from '../../services/grahpql.service';

@Component({
  selector: 'app-consultar-all-tasks',
  standalone: true,
  imports: [],
  templateUrl: './consultar-all-tasks.component.html',
  styleUrl: './consultar-all-tasks.component.css'
})
export class ConsultarAllTasksComponent implements OnInit {
  roles : any
  tasks: any
  constructor(private authService: AuthService, private router: Router, private graphqlService: GraphqlService) { }

  ngOnInit(): void {
    this.loadRoles()  
    this.getTareas()
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

  getTareas(){
    this.graphqlService.getAllTasks().subscribe((result) => {
      this.tasks = result.data.getAllTasks;
    })
  }

}
