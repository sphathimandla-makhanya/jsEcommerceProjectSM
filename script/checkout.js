//Calling the items in the addToCart array from local storage
addToCart = JSON.parse(localStorage.getItem('addToCart'))

// 
let checkoutItems = document.querySelector('[data-checkout]')

// function updator() {
//     let itemUpdator = addToCart.map(function (item, index) {
//         return `
//         <div class="card m-3 text-center" style="width: 18rem;">
//         <img src="${item.url}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${item.name}</h5>
//           <p class="card-text">${item.description}</p>
//           <p class="card-text">R${item.price}</p>
//           <button class="delete" value ='${index}' >Remove item</button>
//         </div>
//       </div>
//         `
//     })
//     checkoutItems.innerHTML= itemUpdator

// }

// updator()

function updator () {
  // index is also the position 
  // using the map method to loop through the array
  let itemUpdator = addToCart.map(function (item, index) {
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
              checkoutItems.innerHTML= itemUpdator.join('');
  
}
    updator() 
//
function favourite () {
  localStorage.setItem('addToCart',JSON.stringify(addToCart))

  addToCart = JSON.parse(localStorage.getItem('addToCart'))
}

// button
let deleteButton=document.querySelector('.delete')


// write to the parent tag table
// function for removing item/s
function remove(position) {
  items.splice(position, 1);
  favourite(); //nested function
  updator();//nested function 
}
checkoutItems.addEventListener('click', function () {
  if(event.target.classList.contains('delete')){
      remove(event.target.value)
      // alert(event.target.value)
}
})
