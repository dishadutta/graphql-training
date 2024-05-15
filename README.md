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

### command for updateProduct

mutation {
updateProduct(input: {
id: "6644eb78012d34be80a677be",
description: "black cargo pants",
stores: [{
place: "hyderabad"
}, {
place: "bangalore"
}, {
place: "pune"
}]
}) {
name
description
stores {
place
}
}
}

### command for deleteProduct

mutation {
deleteProduct(id: "6644f1ea6fafc31eeb525af4")
}

### to start the mongodb server run the below command

brew services start mongodb-community
