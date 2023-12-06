//Calling the items in the addToCart array from local storage
addToCart = JSON.parse(localStorage.getItem('addToCart'))

// 
let checkoutItems = document.querySelector('[data-checkout]')

function updator() {
    let itemUpdator = addToCart.map(function (item, index) {
        return `
        <div class="card m-3 text-center" style="width: 18rem;">
        <img src="${item.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <p class="card-text">R${item.price}</p>
          <button class="delete" value ='${index}' >Remove item</button>
        </div>
      </div>
        `
    })
    checkoutItems.innerHTML= itemUpdator

}

updator()

//
