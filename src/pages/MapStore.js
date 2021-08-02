import React from 'react';
import Layout from '../components/Layout';
import MapArea from '../components/MapArea'

const MapStore = () => {
    
    return ( 
        <Layout title="Mapa" description="Here you can find the map of the shopping" >
            <div className="text-center mt-5">
                <h1>Mapa do shopping</h1>
                <p>Aqui você pode encontrar direções sobre <strong>suas lojas favoritas</strong></p>

            <MapArea />
            </div>
        </Layout>
     );
}
 
export default MapStore;