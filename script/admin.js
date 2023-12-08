//Declaring an array to store the items as generated from the ItemGenerator function
let items = []

// Creating a constructor function to generate items/objects
function ItemGenerator(name, description, quantity, price, url) {
    this.name = name,
    this.description = description,
    this.quantity = quantity,
    this.price = price,
    this.url = url
}

// generating items/objects from the from the ItemGenerator function
let item1 = new ItemGenerator("Gucci", "Dive Watch, 45mm", "", 32500, 'https://i.postimg.cc/j5wBSvzd/images-of-a-watch.jpg') 
let item2 = new ItemGenerator("Rolex", "Wrist Watch", "", 90000, 'https://i.postimg.cc/NfjNbpzJ/images-of-a-watch-1.jpg') 
let item3 = new ItemGenerator("Casio", "Wrist Watch", "", 700.25, 'https://i.postimg.cc/BbBw4Z0Z/time-3091031-1920.jpg') 
let item4 = new ItemGenerator("Petite Melrose", "Ladies Wrist Watch", "", 2500, 'https://i.postimg.cc/PJ6GYqv7/ladies-wrist-watch.jpg') 
let item5 = new ItemGenerator("Garmin (Gen 2)", "MARQ Aviator Watch", "", 56099, 'https://i.postimg.cc/Y0LVGxkv/1168951-SILVERSILVER-1-DNC.webp') 
let item6 = new ItemGenerator("Tempo", "Gents Rose", "", 1000, 'https://i.postimg.cc/BvbDNDbK/watches-with-drops-o.jpg') 
let item7 = new ItemGenerator("Fossil", "Brown Leather Chronograph Watch", "", 4000, 'https://i.postimg.cc/431WmS9L/01.jpg') 
let item8 = new ItemGenerator("Tag Heuer", "Calibbre Heuer", "", 132500, 'https://i.postimg.cc/B6VXCBxf/download.png') 
let item9 = new ItemGenerator("Patek", "Philippe Nautilus", "", 1520, 'https://i.postimg.cc/NfjNbpzJ/images-of-a-watch-1.jpg') 

//Storing the items in the previoursly declared items array
items.push(item1, item2, item3, item4, item5, item6, item7, item8, item9);

//setting up local storage for storing/saving the array items in it, in a string format
localStorage.setItem('items',JSON.stringify(items));

//getting items from local storage and converting the back to object format
items = JSON.parse(localStorage.getItem('items'))

// Using query selector to display the objects in html
let table = document.querySelector('table')

// function for updating items in html
function updator () {
    // index is also the position 
    // using the map method to loop through the array
    let products = items.map(function (item, index) {
        //log code just to check if it working
        
        return `
        <tr>
                    <td>${index+1}</td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>R${item.price}</td>
                    <td><img src='${item.url}'></td>
                    <td><!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Edit
                    </button>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                          <input type="text" placeholder="Name" edit-name name="item name" id="item name">
                          <input type="text" placeholder="description" edit-description name="item name" id="item name">
                          <input type="text" placeholder="quantity" edit-Q name="item name" id="item name">
                          <input type="text" placeholder="price" edit-price name="item name" id="item name">
                          <input type="text" placeholder="url" edit-url name="item name" id="item name">
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div></td>
                    <td><button type="button" class="delete btn btn-danger" value='${index}'>Delete</button></td>
                    </tr>`
                })
                
                // since map create an array you have to use join when writing items into html in a object format rather than an array
                table.innerHTML= products.join('');
    
}
      updator()    
      

          //Saving and fetching items to local storage
            function storage () {
                localStorage.setItem('items',JSON.stringify(items))

                items = JSON.parse(localStorage.getItem('items'))
            }
     


            // button for deleting items in admin
            let deleteButton=document.querySelector('.delete')


            // write to the parent tag table
            // function for removing item/s
            function remove(position) {
                items.splice(position, 1);
                storage(); //nested function
                updator();//nested function 
            }
            table.addEventListener('click', function () {
                if(event.target.classList.contains('delete')){
                    remove(event.target.value)
                    // alert(event.target.value)
    }
})

// Modal
// 
let button = document.querySelector('[save]');

button.addEventListener('click', newProduct)
function newProduct(){
    let id = document.querySelector('[data-id]').value
    let name =document.querySelector('[data-name]').value
    let description = document.querySelector('[data-description]').value
    let quantity = document.querySelector('[data-Q]')
    let price = document.querySelector('[data-price]').value
    let url = document.querySelector('[data-url]').value
    let newObject= new ItemGenerator(id, name, description, quantity, price, url)
    items.push(newObject)
    storage()
    updator()
}

// Sort
let sort = document.querySelector('[data-sortBtn]')
function sortItem(event) {
    event.preventDefault()
    let sortByPrice = items.sort((a, b)=>{
        return parseInt(a.price) - parseInt(b.price)  //declared an arrow function for sorting by price
    })
    updator(sortByPrice)
    
}

sort.addEventListener('click', sortItem)

// try annd catch
function sortError() {
  try {
    if(items===0){
      throw new Error('Items is empty')
    }
  } catch (error) {
    alert('request denied');
  }

  return items
}

console.log(sortError());

// ###########################################################################3
 // Edit
 let nameEdit =document.querySelector('[edit-name]').value
 let descriptionEdit = document.querySelector('[edit-description]').value
 let quantityEdit = document.querySelector('[edit-Q]').value
 let priceEdit = document.querySelector('[edit-price]').value
 let urlEdit = document.querySelector('[edit-url]').value
