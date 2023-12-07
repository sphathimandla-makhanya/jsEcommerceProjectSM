//Calling the items in the addToCart array from local storage
addToCart = JSON.parse(localStorage.getItem('addToCart'))

let checkoutItems = document.querySelector('[data-checkout]')


function updator () {
  // index is also the position 
  // using the map method to loop through the array
  let itemUpdator = addToCart.map(function (item, index) {
      //displays items inthe checkout html
      return `
      <tr>
                  <td>${item.id}</td>
                  <td>${item.name}</td>
                  <td>${item.description}</td>
                  <td><input inputQ type="number"></input></td>
                  <td price >R${item.price}</td>
                  <td><img src='${item.url}'></td>
                  <td><button type="button" class="delete btn btn-danger"class="delete" value='${index}'>Danger</button></td>
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
  addToCart.splice(position, 1);
  favourite(); //nested function
  updator();//nested function 
}
checkoutItems.addEventListener('click', function () {
  if(event.target.classList.contains('delete')){
      remove(event.target.value)
      // alert(event.target.value)
}
})

let total=document.querySelector('[data-total]');
let TotalPrice =addToCart.reduce((selectedItems, reduceItems)=>{
  return selectedItems + reduceItems.price
},0);

total=document.write(TotalPrice )
