import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Product {
    id: ID,
    name: String,
    description: String,
    price: Float,
    soldout: Boolean,
    orderstatus: OrderStatus
    stores: [ Store ]!,
  }

  type Store {
    place: String
  }

  type Query {
    getProduct(id: ID): Product
  }

  enum OrderStatus {
    DELIVERED
    SHIPPED
    DISPATCHED
  }

  input ProductInput {
    id: ID,
    name: String,
    description: String,
    price: Float,
    soldout: Boolean,
    orderstatus: OrderStatus
    stores: [ StoreInput ]!
  }

  input StoreInput {
    place: String
  }

  type Mutation {
    createProduct(input: ProductInput) : Product
  }

`)

export default schema
