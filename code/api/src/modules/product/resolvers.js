// we will need to either modify the relatedProducts function or add a new function to get products of a given type and gender in order to populate the style survey on the front end

// App Imports
  // imports the enumerated values for product types and user roles & genders
import params from '../../config/params'
  // imports the database connection that can be queried using Sequelize
import models from '../../setup/models'

// Get all products
export async function getAll() {
  return await models.Product.findAll({ order: [['id', 'DESC']] })
}

// Get product by slug
  // defines the resolver function to be executed when called by an operation in query.js or mutations.js
export async function getBySlug(parentValue, { slug }) {
  // gets info on a product from the database using the Sequelize connection and syntax
  const product = await models.Product.findOne({ where: { slug } })
  if (!product) {
    // Product does not exists
    // if Sequelize can't find a product matching the provided slug it returns this error object, which is then serialized & returned in an errors object in the json response (express/node seems to do this work under the hood)
    throw new Error('The product you are looking for does not exists or has been discontinued.')
  } else {
    // if Sequelize find the product the function returns the product data, which is serialized as the type specified in the query operation
    return product
  }
}

// Get product by ID
export async function getById(parentValue, { productId }) {
  const product = await models.Product.findOne({ where: { id: productId } })

  if (!product) {
    // Product does not exists
    throw new Error('The product you are looking for does not exists or has been discontinued.')
  } else {
    return product
  }
}

// Get related products
export async function getRelated(parentValue, { productId }) {
  return await models.Product.findAll({
    where: {
      id: { [models.Sequelize.Op.not]: productId }
    },
    limit: 3,
    // this is silly
    order: [[models.Sequelize.fn('RAND')]] // mock related products by showing random products
  })
}

// Create product
export async function create(parentValue, { name, slug, description, type, gender, image }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Product.create({
      name,
      slug,
      description,
      type,
      gender,
      image
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// Update product
export async function update(parentValue, { id, name, slug, description, type, gender, image }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Product.update(
      {
        name,
        slug,
        description,
        type,
        gender,
        image
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete product
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    const product = await models.Product.findOne({where: {id}})

    if (!product) {
      // Product does not exists
      throw new Error('The product does not exists.')
    } else {
      return await models.Product.destroy({where: {id}})
    }
  } else {
    throw new Error('Operation denied.')
  }
}

// Product types
export async function getTypes() {
  return Object.values(params.product.types)
}
