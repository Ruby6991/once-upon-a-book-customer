import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="cart-wrapper">
                <div class="wrap cf">
                    <div class="heading cf">
                        <h1>My Cart</h1>
                        <a href="#" class="continue">Continue Shopping</a>
                    </div>
                    <div class="cart">
                        <ul class="cartWrap">
                            <li class="items odd">   
                                <div class="infoWrap"> 
                                    <div class="cartSection">
                                        <img src="https://hpmedia.bloomsbury.com/rep/s/978%201408855928_309033.jpeg" alt="" class="itemImg" />
                                        <p class="itemNumber">#QUE-007544-002</p>
                                        <h3>Item Name 1</h3>
                                        <p class="quantity">Quantity <span class="fa fa-angle-left angle"></span>
                                        <span id="qt">3</span><span class="fa fa-angle-right angle"></span></p>
                                    </div>   
                                    <div class="prodTotal cartSection">
                                        <p>Rs.1560.00</p>
                                    </div>
                                    <div class="cartSection removeWrap">
                                        <a href="#" class="remove">x</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="subtotal cf">
                        <ul>
                            <li class="totalRow"><span class="label">Subtotal</span><span class="value">Rs.3500.00</span></li>
                            <li class="totalRow"><span class="label">Shipping</span><span class="value">Rs.500.00</span></li>
                            <li class="totalRow"><span class="label">Tax</span><span class="value">Rs.400.00</span></li>
                            <li class="totalRow final"><span class="label">Total</span><span class="value">Rs.4400.00</span></li>
                            <li class="totalRow"><a href="#" class="btn continue">Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;