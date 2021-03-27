// we will need a query that the front end can use to retrieve products to populate the survey with products filtered by gender, type, and category. We could potentially use the existing productsRelated query since it doesn't currently work and doesn't actually get 'related' products as written

// Imports
  // imports GraphQL scalar types that we will use to specify the data types of our fields
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
  // imports the types defined in types.js; this us used to tell operations what kind of object w/ which fields to return in the HTTP response
import { ProductType, ProductTypesType } from './types'
  // imports the resolver functions that should be executed when the query types below are called
import { getAll, getBySlug, getById, getRelated, getTypes } from './resolvers'

// Products All
export const products = {
  // tells the app what kind of object to return (a GraphQLList of ProductTypes) when it receives a query for products
  type: new GraphQLList(ProductType),
  // tells the app which resolver function to execute when it receives a query for products
  resolve: getAll
}

// Product By slug
export const product = {
  type: ProductType,
  // tells the app what kind of arguments to pass to the resolver function, by name and data type (so the getBySlug function can receive a variable named slug that has a data type of GraphQLString)
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Product By ID
export const productById = {
  type: ProductType,
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getById
}

// Products Related
export const productsRelated = {
  type: new GraphQLList(ProductType),
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Product Types
export const productTypes = {
  type: new GraphQLList(ProductTypesType),
  resolve: getTypes
}
