import React from 'react'

const CartItem = () => {
    return (
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
    )
}

export default CartItem;
