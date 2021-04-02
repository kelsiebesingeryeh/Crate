// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

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

const ProductCategoriesType = new GraphQLObjectType({
  name: 'productCategoriesType',
  description: 'Product Categories Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

const ProductStyleTagType = new GraphQLObjectType({
  name: 'productStyleTagType',
  description: 'Product Style Tag Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

const SurveyProductType = new GraphQLObjectType({
  name: 'surveyProducts',
  description: 'Survey Products Type',

  fields: () => ({
    products: { type: new GraphQLList(ProductType) }
  })
})

export { ProductType, ProductTypesType, SurveyProductType }
