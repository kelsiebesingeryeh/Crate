// Imports
  // imports GraphQL scalar types that we will use to specify the data types of our fields
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
  // imports the types defined in types.js; this us used to tell operations what kind of object w/ which fields to return in the HTTP response
import SubscriptionType from './types'
  // imports the resolver functions that should be executed when the query types below are called
import { getAll, getByUser, get } from './resolvers'

// Subscriptions All
export const subscriptions = {
  type: new GraphQLList(SubscriptionType),
  resolve: getAll
}

// Subscriptions by user
export const subscriptionsByUser = {
  type: new GraphQLList(SubscriptionType),
  resolve: getByUser
}

// Subscription By id
export const subscription = {
  type: SubscriptionType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}
