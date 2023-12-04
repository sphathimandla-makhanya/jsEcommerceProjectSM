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
let item1 = new ItemGenerator(1, "Fossil", "Wrist Watch", "", 900) 
let item2 = new ItemGenerator(2, "Fossil", "Wrist Watch", "", 900) 
let item3 = new ItemGenerator(3, "Fossil", "Wrist Watch", "", 900) 
let item4 = new ItemGenerator(4, "Fossil", "Wrist Watch", "", 900) 
let item5 = new ItemGenerator(5, "Fossil", "Wrist Watch", "", 900) 
let item6 = new ItemGenerator(6, "Fossil", "Wrist Watch", "", 900) 
let item7 = new ItemGenerator(7, "Fossil", "Wrist Watch", "", 900) 
let item8 = new ItemGenerator(8, "Fossil", "Wrist Watch", "", 900) 
let item9 = new ItemGenerator(9, "Fossil", "Wrist Watch", "", 900) 

//Storing the items in the previoursly declared items array
items.push(item1, item2, item3, item4, item5, item6, item7, item8, item9);

//setting up local storage for storing/saving the array items in it, in a string format
localStorage.setItem('items',JSON.stringify(items));

//getting items from local storage and converting the back to object format
items = JSON.parse(localStorage.getItem('items'))

//display the objects in html
let card = document.getElementsByClassName('table')

function updator() {
    let itemUpdator = items.map(function (item, index) {
        // console.log(updator(item));
        // console.log(updator(index));
        return `
                <tr>
                    <td>${item.name}</td>
                </tr>
        `
    })
    card.innerHTML= itemUpdator

}

updator()

