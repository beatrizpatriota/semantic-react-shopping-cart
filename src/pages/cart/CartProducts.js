import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import CartItem from './CartItem';

const CartProducts = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <div className="card card-body border-0">

                {
                    cartItems.map(product => <CartItem key={product.data.label} product={product} />)
                }

            </div>
        </div>

    );
}

export default CartProducts;