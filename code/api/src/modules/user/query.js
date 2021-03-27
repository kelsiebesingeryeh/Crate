// Imports
  // imports GraphQL scalar types that we will use to specify the data types of our fields
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
  // imports the types defined in types.js; this us used to tell operations what kind of object w/ which fields to return in the HTTP response
import { UserType, UserLoginType, UserGenderType } from './types'
  // imports the resolver functions that should be executed when the query types below are called
import { getAll, getById, login, getGenders } from './resolvers'

// All
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

// Auth
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
