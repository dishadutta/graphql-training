# graphql-training

### command for createProduct -

mutation {
createProduct(input: {
name: "shirt full",
description: "crop",
price: 34.56,
soldout: true,
stores: [{ place: "hyd" }, { place: "blr" }, { place: "kol" }]
}) {
name
description
id
}
}

### command for getProduct

query {
getProduct(id: "03563444387ae5c33843") {
name
}
}

### to start the mongodb server run the below command

brew services start mongodb-community
