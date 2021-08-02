import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.data.label === product.data.label);
    }

    return ( 
        <div className="card card-body">
            <p>{product.data.label}</p>
            <h3 className="text-left">{formatNumber(product.data.price)}</h3>
            <div className="text-right">
                <p>{product.store.activity.label}</p>
                <Link  to="/mapa" className="btn btn-link btn-sm mr-2">{product.store.label}</Link>

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
 
export default ProductItem;