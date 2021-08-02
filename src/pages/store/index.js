import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Lojas" description="Está é a pagina de lojas" >
            <div >
                <div className="text-center mt-5">
                    <h1>Lojas</h1>
                    <p>Encontre seus produtos favoritos</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;