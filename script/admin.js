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
let item3 = new ItemGenerator(3, "Casio", "Wrist Watch", "", 700.25, 'https://i.postimg.cc/BbBw4Z0Z/time-3091031-1920.jpg') 
let item4 = new ItemGenerator(4, "Extreme", "Wrist Watch", "", 2500, 'https://i.postimg.cc/NfjNbpzJ/images-of-a-watch-1.jpg') 
let item5 = new ItemGenerator(5, "Fossil", "Wrist Watch", "", 900.35, 'https://i.postimg.cc/BvbDNDbK/watches-with-drops-o.jpg') 
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

// Using query selector to display the objects in html
let table = document.querySelector('table')


function sphathi () {
    // index is also the position 
    // using the map method to loop through the array
    let products = items.map(function (item, index) {
        //log code just to check if it working
        // console.log(item);
        // console.log(index);
        return `
        <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>R${item.price}</td>
                    <td><img src='${item.url}'></td>
                    <td><button>Edit</button></td>
                    <td><button class="delete" value='${index}'>Delete</button></td>
                    </tr>`
                })
                
                // since map create an array you have to join the when writing items into html in a object format rather than an array
                table.innerHTML= products.join('');
    
}
      sphathi()      

            function favourite () {
                localStorage.setItem('items',JSON.stringify(items))

                items = JSON.parse(localStorage.getItem('items'))
            }
     


            // button
            let deleteButton=document.querySelector('.delete')


            // write to the parent tag table
            // function for removing item/s
            function remove(position) {
                items.splice(position, 1);
                favourite(); //nested function
                sphathi();//nested function 
            }
            table.addEventListener('click', function () {
                if(event.target.classList.contains('delete')){
                    remove(event.target.value)
                    // alert(event.target.value)
    }
})

