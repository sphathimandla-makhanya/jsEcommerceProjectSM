//Calling/fetching items in the addToCart array from local storage
addToCart = JSON.parse(localStorage.getItem('addToCart'))

// directing to where the items must be displayed in html
let checkoutItems = document.querySelector('[data-checkout]')

// function for updating items in html
function updator () {
  // index is also the position 
  // using the map method to loop through the array
  let itemUpdator = addToCart.map(function (item, index) {
      //displays items inthe checkout html
      return `
      <tr>
                  <td>${item.name}</td>
                  <td>${item.description}</td>
                  <td><input data-inputQ type="number"></input></td>
                  <td data-price >R${item.price}</td>
                  <td><img src='${item.url}'></td>
                  <td><button type="button" class="delete btn btn-danger"class="delete" value='${index}'>Remove</button></td>
                  </tr>`
              })
              
              // since map create an array you have to use join when writing items into html in a object format rather than an array
              checkoutItems.innerHTML= itemUpdator.join('');
  
}
    updator() 

//Saving and fetching items to local storage respectively
function storage () {
  localStorage.setItem('addToCart',JSON.stringify(addToCart))

  addToCart = JSON.parse(localStorage.getItem('addToCart'))
}

// button
let deleteButton=document.querySelector('.delete')


// write to the parent tag table
// function for removing item/s
function remove(position) {
  addToCart.splice(position, 1);
  storage(); //nested function
  updator();//nested function 
}
checkoutItems.addEventListener('click', function () {
  if(event.target.classList.contains('delete')){
      remove(event.target.value)
}
})


// #########################################################################
 //declaring Spinner
 let spinner = `<div class="spinner-grow" role="status">
 <span class="visually-hidden">Loading...</span>
</div>`
 //If array items is empty the product html must display the spinner 
 if(addToCart.length==0){
  checkoutItems.innerHTML= spinner
 }else{
     updator()
 }

//##########################################################################
// Tatol price computation
let total=document.querySelector('[data-total]');

function toatalP() {
  let total=document.querySelector('[data-total]');
let totalPrice =addToCart.reduce((selectedItems, reduceItems)=>{
  return selectedItems + reduceItems.price
},0);                           //reduce function for calculating the total price of items in the array for purchased items  
return totalPrice
}
// directing to where the total price must be displayed in html
total.textContent=` R${toatalP()}`


// Order button and its event listner
let orderBtn = document.querySelector('[orderBtn]');

orderBtn.addEventListener('click', function () {
  alert('Thank you for your purchase')
})

// 