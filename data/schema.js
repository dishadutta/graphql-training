import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Product {
    id: ID,
    name: String,
    description: String,
    price: Float,
    soldout: Boolean,
    stores: [ Store ]!
  }

  type Store {
    place: String
  }

  type Query {
    name: String,
    about: String,
    product: Product
  }

`)

export default schema
