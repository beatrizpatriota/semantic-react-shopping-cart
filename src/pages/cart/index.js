import React, { useContext } from 'react';
import Layout from '../../components/Layout';

import CartProducts from './CartProducts';
import CartRecommended from './CartRecommended'
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link, useHistory } from 'react-router-dom';

const Cart = () => {
    let history = useHistory()

    const { total, cartItems, itemCount, clearCart, checkout, isLoggedIn, handleCheckout, email } = useContext(CartContext);

    function handleNotLoggedIn() {
        history.push('/login')
    }

    async function handleOrder() {
        cartItems.forEach(async product => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
                "consumerEmail": email, "price": (product.data.price * product.quantity),
                "productLabel": product.data.label, "quantity": product.quantity
            });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            await fetch("http://localhost:8080/order", requestOptions)
                .then(response => response.json())
                .then(handleCheckout)

        })
}

    return (
        <Layout title="Cart" description="This is the Cart page" >
            <div >
                <div className="text-center mt-5">
                    <h1>Finalizar compra</h1>
                    <p>Aqui está o resumo de suas compras</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                                <CartProducts /> :
                                <div className="p-3 text-center text-muted">
                                    Seu carrinho está vazio
                                </div>
                        }

                        {isLoggedIn &&
                            <div>
                                Recomendados para você
                                <CartRecommended />
                            </div>
                        }

                        {checkout &&
                            <div className="p-3 text-center text-success">
                                <p>Compra realizada com sucesso!</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">Comprar mais</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 &&
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Itens</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total</p>
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                <hr className="my-4" />
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2"
                                        onClick={isLoggedIn ? handleOrder : handleNotLoggedIn}>CHECKOUT</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>LIMPAR</button>
                                </div>

                            </div>
                        </div>
                    }

                </div>
            </div>
        </Layout>
    );
}

export default Cart;