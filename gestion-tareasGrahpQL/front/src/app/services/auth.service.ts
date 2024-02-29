import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})

/**
 * @author aalexgarciagl (construstor, getToken, getRoles, getName, getUid, hasRol)
*/
export class AuthService {
  token?;
  payload: any;
  roles: any;

  constructor() {
    if(sessionStorage.getItem('token') != null){
      this.token = this.getToken();
      this.payload = jwtDecode(this.token);
      this.roles = this.payload.rol;
    }
    
  }

  getToken(): string {
    const token = sessionStorage.getItem('token');
    if(token) {
      return token;
    } else {
      return '';
    }
  }

  getRoles() {
    return this.roles;
  }

  getName() {
    return this.payload.name;
  }

  getUid() {
    return this.payload.uid;
  }

  hasRol(rol: Array<String>): boolean {
    let resultado = false;
    rol.forEach((element) => {
      if (this.roles.includes(element)) {
        resultado = true;
      }
    });
    return resultado;
  }
}
