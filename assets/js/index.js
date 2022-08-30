
class CartItem {
    constructor(name, desc, img, price) {
        this.name = name
        this.desc = desc
        this.img = img
        this.price = price
        this.quantity = 1
    }
}


const cartIcon = document.querySelector('.fa-cart-arrow-down')
const wholeCart = document.querySelector('.whole-cart-window')
wholeCart.inWindow = 0
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn')

