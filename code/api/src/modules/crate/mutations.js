// Imports
  // imports GraphQL scalar types that we will use to specify the data types of our fields
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
  // imports the types defined in types.js; this us used to tell operations what kind of object w/ which fields to return in the HTTP response
import CrateType from './types'
  // imports the resolver functions that should be executed when the query types below are called
import { create, remove, update } from './resolvers'

// Crate create
export const crateCreate = {
  type: CrateType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

// Crate update
export const crateUpdate = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

// Crate remove
export const crateRemove = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
