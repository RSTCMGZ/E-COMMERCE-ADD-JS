
import headerFunc from "./header.js"
import productFunc from "./products.js"

//! add product to localStorage 

async function getData() {
    const photos = await fetch("../js/data.json")
    const data = await photos.json()
    data ? localStorage.setItem("products", JSON.stringify(data)) : [] //?eğer true ise data içerisindeki veriyi at false ise boş array at.
}
getData()

const products = localStorage.getItem("products")

