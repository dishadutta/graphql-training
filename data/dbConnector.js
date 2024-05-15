import casual from 'casual'
import _ from 'lodash'
import mongoose from 'mongoose'
import { DataTypes, Sequelize } from 'sequelize'

async function connectMongo() {
  try {
    await mongoose.connect('mongodb://localhost/widgets')
    console.log('conntected to mangoose')
  } catch (error) {
    console.log('server not connected, throwing error', error)
  }
}

connectMongo()

const widgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  soldout: Boolean,
  orderstatus: String,
  stores: Array,
})

const Widgets = mongoose.model('widgets', widgetSchema)

const sequelize = new Sequelize('sqlite:memory:')
const Categories = sequelize.define('categories', {
  category: DataTypes.STRING,
  description: DataTypes.STRING,
})

async function syncAndSeedCategories() {
  try {
    await sequelize.sync({ force: true })
    console.log('SQLite connection established and categories model synced')

    //seed categories (its a word for sequelize means creating elements inside database)
    await Promise.all(
      _.times(5, () => {
        return Categories.create({
          category: casual.word,
          description: casual.sentence,
        })
      })
    )

    console.log('categories seeded')
  } catch (error) {
    console.log('Error with SQLite DB', error)
  }
}

syncAndSeedCategories()

export { Widgets, Categories }
