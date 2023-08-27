let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : []



//! ürünleri yerleştirdik.
function displayCartProduct() {
  const cartWrapper = document.querySelector(".cart-wrapper")
  let result = ""
  cart.forEach((item) => {
    result += `
     <tr class="cart-item">
     <td></td>
     <td class="cart-image">
       <img src=${item.img.singleImage} alt="" />
       <i class="bi bi-x delete-cart" data-id="${item.id}"></i>
     </td>
     <td>${item.name}</td>
     <td>$${item.price.newPrice.toFixed(2)}</td>
     <td class="product-quantity">${item.quantity}</td>
     <td class="product-subtotal">$${(item.price.newPrice * item.quantity).toFixed(2)}</td>
   </tr>`
  })
  cartWrapper.innerHTML = result
  removeCartItem()

}
displayCartProduct()
//! silme işlemleri
function removeCartItem() {
  let cartItems = document.querySelector(".header-cart-count")
  const btnDeleteCart = document.querySelectorAll(".delete-cart")

  btnDeleteCart.forEach((button) => {
    button.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      //!id'si eşit değilse item idsine onu sil
      cart = cart.filter((item) => item.id !== Number(id))
      displayCartProduct()
      //!kartı sildiğinde yenilenince tekrar gelmeyecek.
      localStorage.setItem("cart", JSON.stringify(cart))
      //!karttı sildiğinde cartıtems'te eksiltme yapacak
      cartItems.innerHTML = cart.length
      saveCartValues()//!ürünleri sildikten sonra sayılardan sıfırlanıcak
    });
  });
}
//! hesaplama işlemleri
function saveCartValues() {
  const cartTotal = document.getElementById("cart-total")
  const subTotal = document.getElementById("subtotal")
  const fastCargo = document.getElementById("fast-cargo")
  const fastCargoPrice = 15;

  let itemsTotal = 0;
  //!her bir eleman için item verdik ve itemstotal eşittir itemin yeni fiyatı çarpı adet dedik.
  cart.length > 0 &&
    cart.map((item) => itemsTotal += item.price.newPrice * item.quantity)
  console.log(itemsTotal);
  subTotal.innerHTML = `$${itemsTotal.toFixed(2)}`
  cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`
  //! fast cargo 15 dolar eklemek.
  fastCargo.addEventListener("change", function (e) {
    if (e.target.checked) {
      cartTotal.innerHTML = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`
    } else {
      cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`

    }
  })
}
saveCartValues()