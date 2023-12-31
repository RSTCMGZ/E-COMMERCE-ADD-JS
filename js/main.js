
import headerFunc from "./header.js"
import productFunc from "./products.js"

//! add product to localStorage start

async function getData() {
    const photos = await fetch("../js/data.json")
    const data = await photos.json()
    data ? localStorage.setItem("products", JSON.stringify(data)) : [] //?eğer true ise data içerisindeki veriyi at false ise boş array at.
    productFunc()
}
getData()

//! add product to localStorage end


//! add cartItems to localStorage Start
const cartItems = document.querySelector(".header-cart-count")


cartItems.innerHTML = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).length
    : "0"
// cartları localstorage ye attık ve cartın içinde ürün var ise arttır yok ise 0 göster dedik.ve sayfa yenilenince kaç adet ürün sepette ise onu gösterir.
//! add cartItems to localStorage end
