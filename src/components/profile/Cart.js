import React, { Component } from 'react';
import CartItem from './CartItem';

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
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
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