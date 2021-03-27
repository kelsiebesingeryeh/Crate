// Imports
  // imports GraphQL scalar types that we will use to specify the data types of our fields
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
  // imports the types defined in types.js; this us used to tell operations what kind of object w/ which fields to return in the HTTP response
import CrateType from './types'
  // imports the resolver functions that should be executed when the query types below are called
import { getAll, getById } from './resolvers'

// Crates All
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Crate By ID
export const crateById = {
  type: CrateType,
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}
