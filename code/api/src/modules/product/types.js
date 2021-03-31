// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Product type
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
    updatedAt: { type: GraphQLString },
    category: { type: GraphQLInt },
    styleTag: { type: GraphQLInt }
  })
})

// User Gender type
const ProductTypesType = new GraphQLObjectType({
  name: 'productTypesType',
  description: 'User Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

const SurveyProductType = new GraphQLObjectType({
  name: 'surveyProductType', 
  description: 'Survey Products Type', 

  fields: () => ({
    
  })

})

export { ProductType, ProductTypesType }
