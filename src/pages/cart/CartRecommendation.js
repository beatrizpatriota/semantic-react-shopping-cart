import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';

const CartRecommendation = ({product}) => {
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.label === product.label);
    }

    return ( 
        <div className="card card-body">
            <p>{product.label}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className="text-right">

                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Adicionar mais</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm">Adicionar ao carrinho</button>
                }
                
            </div>
        </div>
     );
}
 
export default CartRecommendation;