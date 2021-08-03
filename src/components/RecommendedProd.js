import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../helpers/utils';

const RecommendedProd = ({product}) => {

    return ( 
        <div className="card card-body">
            <p>{product.label}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className="text-right">
                <Link  to="/" className="btn btn-link btn-sm mr-2">Ir para loja</Link>
            </div>
        </div>
     );
}
 
export default RecommendedProd;