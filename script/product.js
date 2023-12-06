// Empty array to store purchased items
let addToCart=[]

//getting items from local storage and converting the back to object format
items = JSON.parse(localStorage.getItem('items'))

//display the objects in html
let product = document.querySelector('[data-products]')


//function for sending/viewing items in the product page
function updator() {
    let itemUpdator = items.map(function (item, index) {
        return `
        <div class="card ms-5 m-3 text-center" style="width: 18rem;">
        <img src="${item.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <p class="card-text">R${item.price}</p>
          <button class="btn btn-primary" data-cartbtn value ='${index}' data-add>Add to Cart</button>
        </div>
      </div>
        `
    })
    product.innerHTML= itemUpdator

}

updator()

// Declaring the search buttons and input area and sort button
let search = document.querySelector('[data-searchBtn]')
let searchInput = document.querySelector('[data-searchInput]')


// ############################################################################
// seacrh button activation
// i is the search results,
function searchFunction(event) {
    event.preventDefault() //prevents page from refreshing automatically
    let i = items.filter(item =>
        item.name.includes(searchInput.value));     //filters through the items array 
        if (i.length === 0) {
            alert('Item not found')
        }else{
            items=i; //update the items array with the search value
           updator() //calling the product transfer function above
        }
    }
search.addEventListener('click', searchFunction)

// sorting button and function
let sort = document.querySelector('[data-sortBtn]')
function sortItem(event) {
    event.preventDefault()
    let sortByPrice = items.sort((a, b)=>{
        return parseInt(a.price) - parseInt(b.price)  //declared an arrow function for sorting by price
    })
    updator(sortByPrice)
}

sort.addEventListener('click', sortItem)

//declaring Spinner
let spinner = `<div class="text-center">
<div class="spinner-border spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>`
//If array items is empty the product html must display the spinner 
if(items.length==0){
   product.innerHTML= spinner
}else{
    updator()
}


// add to cart button
let cartbtn = document.querySelectorAll('[data-cartbtn]')

//add items using their indexes as reference 
// function addItems(index) {
//     addToCart.push(items[index])
    
//     localStorage.setItem('addToCart',JSON.stringify(addToCart))
    
// }

function addItems(index) {
    addToCart.push(items[index])
    
    localStorage.setItem('addToCart',JSON.stringify(addToCart))
    
}




cartbtn.forEach(button=>{
    button.addEventListener('click', function(){
        addItems(event.target.value)
    })
})
