import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className={styles.header}>
            <Link to='/'>Loja</Link>
            <Link to='/mapa'>Mapa</Link>
            <Link to='/carrinho'> <CartIcon/> Carrinho ({itemCount})</Link>
        </header>
     );
}
 
export default Header;