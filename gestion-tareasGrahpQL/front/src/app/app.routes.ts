import { Routes } from '@angular/router';
import { LoginComponent } from './userComponent/login/login.component';
import { HomeComponent } from './home/home.component';
import { GestionUsuariosComponent } from './userComponent/gestion-usuarios/gestion-usuarios.component';
import { InsertarUsuarioComponent } from './userComponent/insertar-usuario/insertar-usuario.component';
import { ModificarUserComponent } from './userComponent/modificar-user/modificar-user.component';
import { GestionTareasComponent } from './taskComponet/gestion-tareas/gestion-tareas.component';
import { CrearTareaComponent } from './taskComponet/crear-tarea/crear-tarea.component';
import { ModificarTareaComponent } from './taskComponet/modificar-tarea/modificar-tarea.component';
import { TareasDisponiblesComponent } from './taskComponet/tareas-disponibles/tareas-disponibles.component';
import { TareasAsignadasComponent } from './taskComponet/tareas-asignadas/tareas-asignadas.component';
import { ModificarTareaAsignadaComponent } from './taskComponet/modificar-tarea-asignada/modificar-tarea-asignada.component';
import { ConsultarAllTasksComponent } from './taskComponet/consultar-all-tasks/consultar-all-tasks.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'gestion-usuarios', component: GestionUsuariosComponent},
    {path: 'insertar-usuario', component: InsertarUsuarioComponent},
    {path: 'modificar-usuario/:id', component: ModificarUserComponent},
    {path: 'gestion-tareas', component: GestionTareasComponent},
    {path: 'crear-tarea', component: CrearTareaComponent},
    {path: 'modificar-tarea/:id', component: ModificarTareaComponent},
    {path: 'tareas-disponibles', component: TareasDisponiblesComponent},
    {path: 'tareas-asignadas', component: TareasAsignadasComponent},
    {path: 'modificar-tarea-asignada/:id', component: ModificarTareaAsignadaComponent},
    {path: 'all-tasks', component: ConsultarAllTasksComponent}
];
