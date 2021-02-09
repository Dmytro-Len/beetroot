const shoppingList = [
    {name: 'sausages', count: 1, status: 'bought'},
    {name: 'bananas', count: 4, status: 'not bought'},
    {name: 'apples', count: 2, status: 'bought'},
    {name: 'bread', count: 1, status: 'not bought'}
]

// купленные продукты

function boughtProducts() {

   console.log(shoppingList.sort(function(a, b) {

       if (a.status > b.status) {
           return 1
       } if ((a.status < b.status)) {
           return -1;
       } return 0
       
   }))
}
boughtProducts()

// добавление покупки в список
function addProduct(a) {
    console.log(a.name)
    let i =0
    for (i; i < shoppingList.length; i++) {
        (a.name !== (shoppingList[i].name || shoppingList[i].name || shoppingList[i].name || shoppingList[i].name)) ? console.log('alert') : shoppingList[i].count++;
    }
    console.log(shoppingList)
}
addProduct(product = {name: 'bread'})


//покупка продукта
function buyProducts(a) {
    a = 'bought'
    console.log(a)
}
buyProducts(shoppingList[1].status)