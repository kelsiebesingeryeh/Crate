// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'

// Crates All   ===like an index .all

export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Crate By ID ==== like a show .find(id)   
//  crateById is what needs to go in the query body


export const crateById = {   
  type: CrateType,
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}


// Looks like we  can do two queries one by ID and one ALL 
// // query is what you read
// this is the Read in CRUD 

// This is also how we can call on the API 

// when we needs to create an endpoint for the FE to consumer. if if we did a style table we would add that to this 
// this would be like a get request 

