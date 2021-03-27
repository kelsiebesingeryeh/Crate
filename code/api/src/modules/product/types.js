// types allow us to model the data in our database as objects and are used to map the database columns for those tables to properties of objects
// GraphQL types also allow us to define sub-types of our database resources that might have different properties from the database resources. The ProductTypesType, for example, contains meta-information about a product in that it contains the id and descrption of enumerated product types. The UserLoginType has a token, which is not a column on the users table but which is needed as a user property in order to process certain requests
// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Product type
  // models a resource from the products table
  // will need to add additional fields for new database columns
const ProductType = new GraphQLObjectType({
  name: 'product',
  description: 'Product Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    type: { type: GraphQLInt },
    gender: { type: GraphQLInt },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// Product Type type
  // returns the id and name of each enumerated value for product type
const ProductTypesType = new GraphQLObjectType({
  name: 'productTypesType',
  description: 'User Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

// add types for additional enumerated values (style and possibly category and gender)
// makes types available in other files
export { ProductType, ProductTypesType }
