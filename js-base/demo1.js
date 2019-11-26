function ShoppingCart(discount) {
  this.discount = discount
  this.amount = 0	
}

ShoppingCart.prototype.setAmount = function(amount) {
  this.amount = amount
}

ShoppingCart.prototype.checkout = function() {
  return this.discount(this.amount)
}


class ShoppingCart {
  constructor(discount) {
    this.discount = discount
    this.amount = 0
  }

  checkout() {
    return this.discount(this.amount)
  }	

  setAmount(amount) {
    this.amount = amounkit
  }	
}
