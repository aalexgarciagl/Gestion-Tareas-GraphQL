import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }

  login(username: string, password: string): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation Login($username: String!, $password: String!) {
          login(username: $username, password: $password) {
            success
            token
          }
        }
      `,
      variables: {
        username,
        password
      }
    });
  }

  deleteTask(id: number): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteTask($deleteTaskId: Int!) {
          deleteTask(id: $deleteTaskId) {
            id
            descripcion
          }
        }
      `,
      variables: {
        deleteTaskId: id
      }
    });
  }

  crearTarea(descripcion: string, dificultad: String, horas_previstas: number, horas_realizadas: number, porcentage_realizacion: number, completada: number, asignada: number): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation CrearTarea($descripcion: String!, $dificultad: String!, $horas_previstas: Int!, $horas_realizadas: Int!, $porcentage_realizacion: Int!, $completada: Int!, $asignada: Int!) {
          crearTarea(descripcion: $descripcion, dificultad: $dificultad, horas_previstas: $horas_previstas, horas_realizadas: $horas_realizadas, porcentage_realizacion: $porcentage_realizacion, completada: $completada, asignada: $asignada) {
            id
            descripcion
          }
        }
      `,
      variables: {
        descripcion,
        dificultad,
        horas_previstas,
        horas_realizadas,
        porcentage_realizacion,
        completada,
        asignada
      }
    });
  }

  getAllTasks(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query GetAllTasks {
          getAllTasks {
            asignada
            completada
            descripcion
            dificultad
            horas_previstas
            horas_realizadas
            id
            porcentage_realizacion
          }
        }
      `
    });
  }

  getTask(id: number): Observable<any> {
    return this.apollo.query({
      query: gql`
        query GetTask($getTaskId: Int!) {
          getTask(id: $getTaskId) {
            asignada
            completada
            descripcion
            dificultad
            horas_previstas
            horas_realizadas
            id
            porcentage_realizacion
          }
        }
      `,
      variables: {
        getTaskId: id
      }
    });
  }

  modificarTarea(id: number, descripcion: string, dificultad: String, horas_previstas: number, horas_realizadas: number, porcentage_realizacion: number, completada: number, asignada: number): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation ModificarTarea($modificarTareaId: Int!, $descripcion: String!, $dificultad: String!, $horasPrevistas: Int!, $horasRealizadas: Int!, $porcentageRealizacion: Int!, $completada: Int!, $asignada: Int!) {
          modificarTarea(id: $modificarTareaId, descripcion: $descripcion, dificultad: $dificultad, horas_previstas: $horasPrevistas, horas_realizadas: $horasRealizadas, porcentage_realizacion: $porcentageRealizacion, completada: $completada, asignada: $asignada) {
            completada
            asignada
            descripcion
            dificultad
            horas_previstas
            horas_realizadas
            id
            porcentage_realizacion
          }
        }
      `,
      variables: {
        modificarTareaId: id,
        descripcion,
        dificultad,
        horasPrevistas: horas_previstas,
        horasRealizadas: horas_realizadas,
        porcentageRealizacion: porcentage_realizacion,
        completada,
        asignada
      }
    });
  }

  getAllUsers(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query GetAllUsers {
          getAllUsers {
            id
            name
            user_name
          }
        }
      `
    });
  }

  getTaskLibres(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query GetTaskLibres {
          getTaskLibres {
            asignada
            completada
            descripcion
            dificultad
            horas_previstas
            horas_realizadas
            id
            porcentage_realizacion
          }
        }
      `
    });
  }

  getTareasByUserAsignado(id: number): Observable<any> {
    return this.apollo.query({
      query: gql`
        query GetTareasByUserAsignado($getTareasByUserAsignadoId: Int!) {
          getTareasByUserAsignado(id: $getTareasByUserAsignadoId) {
            asignada
            completada
            descripcion
            dificultad
            horas_previstas
            horas_realizadas
            id
            porcentage_realizacion
          }
        }
      `,
      variables: {
        getTareasByUserAsignadoId: id
      }
    });
  }

  deleteAsignacion(id_task: number, id_user: number): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteAsignacion($idTask: Int!, $idUser: Int!) {
          deleteAsignacion(id_task: $idTask, id_user: $idUser) {
            id_task
            id_user
          }
        }
      `,
      variables: {
        idTask: id_task,
        idUser: id_user
      }
    });
  }

  asignarTarea(id_task: number, id_user: number): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation AsignarTarea($idTask: Int!, $idUser: Int!) {
          asignarTarea(id_task: $idTask, id_user: $idUser) {
            id_task
            id_user
          }
        }
      `,
      variables: {
        idTask: id_task,
        idUser: id_user
      }
    });
  }

  getUser(id: number): Observable<any> {
    return this.apollo.query({
      query: gql`
        query GetUser($getUserId: Int!) {
          getUser(id: $getUserId) {
            id
            name
            user_name
            password
          }
      }
      `,
      variables: {
        getUserId: id
      }
    });
  }

  getRolesUser(id: number): Observable<any> {
    return this.apollo.query({
      query: gql`
        query GetRolesUser($getRolesUserId: Int!) {
          getRolesUser(id: $getRolesUserId) {
            id
            nombre
          }
        }
      `,
      variables: {
        getRolesUserId: id
      }
    });
  }

  getAllRoles(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query GetAllRoles {
          getAllRoles {
            id
            nombre
          }
      }
      `
    });
  }

  insertarUser(nombre: string, username: string, password: string): Observable<any>{
    return this.apollo.mutate({
      mutation: gql`
        mutation InsertarUser($nombre: String!, $password: String!, $userName: String!) {
          insertarUser(nombre: $nombre, password: $password, user_name: $userName) {
            id
            name
            user_name
          }
      }
      `,
      variables: {
        nombre: nombre,
        userName: username,
        password: password
      }
    });
  }

  addRol(id_user: number, id_rol: number): Observable<any>{
    return this.apollo.mutate({
      mutation: gql`
        mutation AddRol($idUser: Int!, $idRol: Int!) {
          addRol(id_user: $idUser, id_rol: $idRol) {
            id_rol
            id_user
          }
      }
      `,
      variables: {
        idUser: id_user,
        idRol: id_rol
      }
    });
  }

  deleteRol(id_user: number, id_rol: number): Observable<any>{
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteRol($idUser: Int!, $idRol: Int!) {
          deleteRol(id_user: $idUser, id_rol: $idRol) {
            id_rol
            id_user
          }
      }
      `,
      variables: {
        idUser: id_user,
        idRol: id_rol
      }
    });
  }

  deleteUser(id: number): Observable<any>{
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteUser($deleteUserId: Int!) {
          deleteUser(id: $deleteUserId) {
            id
            name
            user_name
          }
        }
      `,
      variables: {
        deleteUserId: id
      }
    });
  }

  modificarUsuario(id:number, username:string, password:string, nombre:string): Observable<any>{
    return this.apollo.mutate({
      mutation: gql`
        mutation ModificarUser($modificarUserId: Int!, $userName: String!, $password: String!, $nombre: String!) {
          modificarUser(id: $modificarUserId, user_name: $userName, password: $password, nombre: $nombre) {
            id
            name
            user_name
          }
        }
      `,
      variables: {
        modificarUserId: id,
        userName: username,
        password: password,
        nombre: nombre
      }
    });
  }
}
