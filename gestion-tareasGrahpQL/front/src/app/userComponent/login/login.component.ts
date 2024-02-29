import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphqlService } from '../../services/grahpql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  username: any
  password: any

  constructor(private grahpqlService: GraphqlService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.username, this.password);
    this.grahpqlService.login(this.username, this.password).subscribe((result) => {
      if(result.data.login.success){
        console.log(result.data.login);
        sessionStorage.setItem('token', result.data.login.token);
        this.router.navigate(['/home']);
      }
    })
  }
}
