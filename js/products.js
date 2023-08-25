import { product1 } from "./glide.js"
import { product2 } from "./glide.js"

function productFunc1() {
    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
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




        productsContainer.innerHTML = results
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
        productsContainer2.innerHTML = results1
    })
    product2()
}


export default productFunc()

function productFunc() {
    productFunc1()
    productFunc2()
}