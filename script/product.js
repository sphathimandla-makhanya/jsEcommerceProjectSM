//Declaring an array to store the items as objects
let items = []

// Creating a constructor function to generate items/objects
function ItemGenerator(id, name, description, quantity, price, url) {
    this.id = id,
    this.name = name,
    this.description = description,
    this.quantity = quantity,
    this.price = price,
    this.url = url
}

// generating items/objects from the from the ItemGenerator function
let item1 = new ItemGenerator(1, "Fossil", "Machine Brown Leather Chronograph Watch", "", 900, 'https://i.postimg.cc/j5wBSvzd/images-of-a-watch.jpg') 
let item2 = new ItemGenerator(2, "Rolex", "Wrist Watch", "", 900, 'https://i.postimg.cc/NfjNbpzJ/images-of-a-watch-1.jpg') 
let item3 = new ItemGenerator(3, "Casio", "Wrist Watch", "", 700, 'https://i.postimg.cc/BbBw4Z0Z/time-3091031-1920.jpg') 
let item4 = new ItemGenerator(4, "Extreme", "Wrist Watch", "", 2500, 'https://i.postimg.cc/NfjNbpzJ/images-of-a-watch-1.jpg') 
let item5 = new ItemGenerator(5, "Fossil", "Wrist Watch", "", 900, 'https://i.postimg.cc/BvbDNDbK/watches-with-drops-o.jpg') 
let item6 = new ItemGenerator(6, "Fossil", "Wrist Watch", "", 1000, 'https://i.postimg.cc/BvbDNDbK/watches-with-drops-o.jpg') 
let item7 = new ItemGenerator(7, "Fossil", "Wrist Watch", "", 950, 'https://i.postimg.cc/NfjNbpzJ/images-of-a-watch-1.jpg') 
let item8 = new ItemGenerator(8, "Fossil", "Wrist Watch", "", 9700, 'https://i.postimg.cc/BbBw4Z0Z/time-3091031-1920.jpg') 
let item9 = new ItemGenerator(9, "Fossil", "Wrist Watch", "", 1520, 'https://i.postimg.cc/NfjNbpzJ/images-of-a-watch-1.jpg') 

//Storing the items in the previoursly declared items array
items.push(item1, item2, item3, item4, item5, item6, item7, item8, item9);

//setting up local storage for storing/saving the array items in it, in a string format
localStorage.setItem('items',JSON.stringify(items));


//getting items from local storage and converting the back to object format
items = JSON.parse(localStorage.getItem('items'))

//display the objects in html
let product = document.querySelector('[data-products]')

function updator() {
    let itemUpdator = items.map(function (item, index) {
        return `
        <div class="card m-3 text-center" style="width: 18rem;">
        <img src="${item.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <p class="card-text">R${item.price}</p>
          <button class="btn btn-primary" value ='${index}' data-add>Add to Cart</button>
        </div>
      </div>
        `
    })
    product.innerHTML= itemUpdator

}

updator()

// Declaring the search buttons and input area and sort button
let emptyArray=[]
let search = document.querySelector('[data-searchBtn]')
let searchInput = document.querySelector('[data-searchInput]')


// ############################################################################
// seacrh button activation
function searchFunction() {
    let searchInput = document.querySelector('[data-searchInput]').value
    let i = items.filter(item=>{
        item.name=searchInput;
       })
    if(searchInput=i){
        alert('item');
    }else{
        alert('Item not found')
    }

}

search.addEventListener('click', searchFunction)


let sort = document.querySelector('[data-sortBtn]')



// let spinner = items
// if(spinner.length===0){
//     console.log("No items");
// }else{
//     console.log("have items");
// }