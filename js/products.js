import { product1, product2 } from "./glide.js"

let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : []


//! karta tıkladıgında favorilere eklemek
function addToCart() {
  const cartItems = document.querySelector(".header-cart-count")//! favorilere her tıkladığında artması için değişken oluşturduk
  const buttons = [...document.getElementsByClassName("add-to-cart")]
  buttons.forEach((button) => {
    const inCart = cart.find((item) => item.id == Number(button.dataset.id))
    if (inCart) {
      button.setAttribute("disabled", "disabled")
    } else {
      button.addEventListener("click", function (e) {
        e.preventDefault()
        const id = e.target.dataset.id
        const findProduct = products.find(product => product.id == Number(id))

        cart.push({ ...findProduct, quantity: 1 })
        localStorage.setItem("cart", JSON.stringify(cart))
        button.setAttribute("disabled", "disabled") //? butona bastıgında disabled olacak
        cartItems.innerHTML = cart.length
      })
    }

  })
}

//! Datadan ürün ismi fiyat vs çektik.
function productFunc1() {

  const productsContainer = document.getElementById("product-list")
  let results = ""
  products.forEach((item) => {
    results += `
        <li class="product-item glide__slide">
        <div class="product-image">
          <a href="#">
            <img
              src= ${item.img.singleImage}
              class="img1"
              alt=""
            />
            <img
              src=${item.img.thumbs[1]}
              class="img2"
              alt=""
            />
          </a>
        </div>
        <div class="product-info">
          <a href="#" class="product-title">${item.name}</a>
          <ul class="product-star">
            <li>
              <i class="bi bi-star-fill"></i>
            </li>

            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-half"></i>
            </li>
          </ul>
          <div class="product-prices">
            <strong class="new-price">$${item.price.newPrice.toFixed(2)}</strong>
            <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
          </div>
          <span class="product-discount">-${item.discount}%</span>
          <div class="product-links">
            <button class="add-to-cart" data-id=${item.id}>
              <i class="bi bi-basket-fill"></i>
            </button>
            <button>
              <i class="bi bi-heart-fill"></i>
            </button>
            <a href="#">
              <i class="bi bi-eye-fill"></i>
            </a>
            <a href="#">
              <i class="bi bi-share-fill"></i>
            </a>
          </div>
        </div>
      </li>
    
    `
    productsContainer ? productsContainer.innerHTML = results : "";
    addToCart()
  })
  product1()
}



function productFunc2() {
  const products2 = localStorage.getItem("products") ?
    JSON.parse(localStorage.getItem("products")) : []
  const productsContainer2 = document.getElementById("product-list2")
  let results1 = ""
  products2.forEach((item) => {
    results1 += `
        <li class="product-item glide__slide">
        <div class="product-image">
          <a href="#">
            <img
              src="${item.img.singleImage}"
              class="img1"
              alt=""
            />
            <img
              src="${item.img.thumbs[1]}"
              class="img2"
              alt=""
            />
          </a>
        </div>
        <div class="product-info">
          <a href="#" class="product-title">${item.name}</a>
          <ul class="product-star">
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-half"></i>
            </li>
          </ul>
          <div class="product-prices">
            <strong class="new-price">$${item.price.newPrice.toFixed(2)}</strong>
            <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
          </div>
          <span class="product-discount">-${item.discount}%</span>
          <div class="product-links">
            <button>
              <i class="bi bi-basket-fill"></i>
            </button>
            <button>
              <i class="bi bi-heart-fill"></i>
            </button>
            <a href="#">
              <i class="bi bi-eye-fill"></i>
            </a>
            <a href="#">
              <i class="bi bi-share-fill"></i>
            </a>
          </div>
        </div>
      </li>
        `
    productsContainer2 ? productsContainer2.innerHTML = results1 : ""
  })
  product2()
}


export default productFunc

function productFunc() {
  productFunc1()
  productFunc2()
}