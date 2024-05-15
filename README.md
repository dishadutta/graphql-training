# graphql-training

## to start the mongodb server

brew services start mongodb-community

## to stop the mongodb server

brew services stop mongodb-community

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

### command to get all products

query {
getAllProduct {
name
description
orderstatus
}
}

### querying with alias

query {
aliasOne: getProduct(id: "6644eab9012d34be80a677b8") {
price
stores {
place
}
}
aliasTwo: getProduct(id: "6644eb33012d34be80a677bb") {
name
}
}

### querying with fragments

query {
aliasOne: getProduct(id: "6644eab9012d34be80a677b8") {
... productFragment
}
aliasTwo: getProduct(id: "6644eb33012d34be80a677bb") {
... productFragment
}
allProducts: getAllProduct {
... productFragment
}
}

fragment productFragment on Product {
name
description
price
}
