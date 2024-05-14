import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './data/schema'

const PORT = 8080

const app = express()

app.get('/', (req, res) => {
  res.send('Graphql is amazing!')
})

// const root = { name: () => 'disha', about: () => 'hi i am new here' }
const root = {
  name: () => 'disha',
  product: () => {
    return {
      id: 5657587,
      name: 'shirt',
      description: 'oversized',
      price: 34.56,
      soldout: true,
      stores: [{ place: 'hyd' }, { place: 'blr' }, { place: 'kol' }],
    }
  },
}

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)

app.listen(PORT, () => {
  console.log(`server is runing localhost:${PORT}/graphql`)
})
