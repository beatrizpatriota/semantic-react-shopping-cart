import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import MapArea from '../components/MapArea'
import StoreCard from '../components/StoreCard';
import styles from '../pages/store/ProductsGrid.module.scss';

const MapStore = () => {
    const [stores, setStores] = useState([])
    const [checkedByName, setCheckedByName] = useState(true)

    useEffect(() => {
      const runAsync = async () => {
        const storesGet = await fetch(`http://localhost:8080/store`, { method: 'GET' })
        .then(response => response.json())
    
          setStores(storesGet)
      }
    runAsync()
    }, []);
    
    return ( 
        <Layout title="Mapa" description="Here you can find the map of the shopping" >
            <div className="text-center mt-5">

        <div className={styles.p__container}>
                <h1>Lojas</h1>

            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {stores.length} Lojas no total
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <button type="radio" className={checkedByName ? 'btn btn-outline-primary btn-sm' : 'btn btn-primary btn-sm'} 
                        checked={checkedByName} onClick={() => setCheckedByName(true)}>Por nome</button>
                        <button type="radio" className={!checkedByName ? 'btn btn-outline-primary btn-sm' : 'btn btn-primary btn-sm'} 
                        checked={!checkedByName} onClick={() => setCheckedByName(false)}>Por atividade</button>
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>
                {stores.length !== 0 ?
                (checkedByName ?
                    stores.sort(function (a, b) {
                        if (a.label > b.label) {
                            return 1;
                        } if (a.label < b.label) {
                            return -1;
                        } return 0;
                    }).map(store => (
                        <StoreCard key={store.label} store={store} />
                    )) :
                    stores.sort(function (a, b) {
                        if (a.activity.label > b.activity.label) {
                            return 1;
                        } if (a.activity.label < b.activity.label) {
                            return -1;
                        } return 0;
                    }).map(store => (
                        <StoreCard key={store.label} store={store} />
                    )))
                : null}
        </div>
        </div>
        <h1 style={{marginTop: 30}}>Mapa do shopping</h1>
        <p>Aqui você pode encontrar direções sobre <strong>suas lojas favoritas</strong></p>
        <MapArea />
        </div>
        </Layout>
     );
}
 
export default MapStore;