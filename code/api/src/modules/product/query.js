// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { ProductType, ProductTypesType, SurveyProductType } from './types'
import { getAll, getBySlug, getById, getRelated, getTypes, getSurveyProducts } from './resolvers'

// Products All
export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll
}

// Product By slug
export const product = {
  type: ProductType,
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

export const surveyProducts = {
  type: new GraphQLList(SurveyProductType),
  args: {
    type: { type: GraphQLInt },
    gender: { type: GraphQLInt}
  },
  resolve: getSurveyProducts
}
