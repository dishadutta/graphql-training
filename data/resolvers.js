import { Widgets } from './dbConnector'

const resolvers = {
  getProduct: async ({ id }) => {
    try {
      const product = await Widgets.findById(id)
      return product
    } catch (error) {
      throw new Error(error)
    }
  },
  createProduct: async ({ input }) => {
    const newWidget = new Widgets({
      name: input.name,
      description: input.description,
      price: input.price,
      soldout: input.soldout,
      orderstatus: input.orderstatus,
      stores: input.stores,
    })

    newWidget.id = newWidget._id

    try {
      await newWidget.save()
      return newWidget
    } catch (error) {
      throw new Error()
    }
  },
  updateProduct: async ({ input }) => {
    try {
      const updateWidget = await Widgets.findOneAndUpdate(
        { _id: input.id },
        input,
        { new: true }
      )
      return updateWidget
    } catch (error) {
      throw new Error()
    }
  },
  deleteProduct: async ({ id }) => {
    try {
      await Widgets.deleteOne({ _id: id })
      return 'Successfully deleted widget'
    } catch (error) {
      throw new Error()
    }
  },
  //this will also delete the product but this method wont throw any deleted product message instead it will provide in getProduct value as null
  // deleteProduct: async ({ input }) => {
  //   try {
  //     const deleteWidget = await Widgets.deleteOne({ _id: input.id })
  //     return deleteWidget
  //   } catch (error) {
  //     throw new Error()
  //   }
  // },
}

export default resolvers
