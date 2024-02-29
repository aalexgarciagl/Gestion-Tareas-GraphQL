const { gql } = require('graphql-tag');;

const typeDefs = gql`

    type login {
        success: Boolean
        token: String
    }

    type User {
        id: Int
        name: String
        user_name: String
        password: String  
    }

    type Task {
        id: Int
        descripcion: String
        dificultad: String
        horas_previstas: Int
        horas_realizadas: Int
        porcentage_realizacion: Int
        completada: Int
        asignada: Int
    }

    type Rol {
        id: Int
        nombre: String
    }

    type taskUser {
        id_task: Int
        id_user: Int
    }

    type UserRol {
        id_user: Int
        id_rol: Int
    }

    type Query{
        #User Queries
        getUser(id: Int!): [User]
        getAllUsers: [User]
        getAllRoles: [Rol]
        getRolesUser(id: Int!): [Rol]

        #Task Queries
        getAllTasks: [Task]
        getTaskLibres: [Task]
        getTask(id: Int!): [Task]
        getTareasByUserAsignado(id: Int!): [Task]
    }

    type Mutation{
        #User Mutations
        login(username: String!, password: String!): login
        insertarUser(nombre: String!, user_name: String!, password: String!): User
        addRol(id_user: Int!, id_rol: Int!): UserRol
        deleteRol(id_user: Int!, id_rol: Int!): UserRol
        deleteUser(id: Int!): User        
        modificarUser(id: Int!, nombre: String!, user_name: String!, password: String!): User

        #Task Mutations
        deleteTask(id: Int!): Task
        asignarTarea(id_task: Int!, id_user: Int!): taskUser
        deleteAsignacion(id_task: Int!, id_user: Int!): taskUser
        modificarTarea(id: Int!, descripcion: String!, dificultad: String!, horas_previstas: Int!, horas_realizadas: Int!, porcentage_realizacion: Int!, completada: Int!, asignada: Int!): Task
        crearTarea(descripcion: String!, dificultad: String!, horas_previstas: Int!, horas_realizadas: Int!, porcentage_realizacion: Int!, completada: Int!, asignada: Int!): Task
    }


`

module.exports = typeDefs;