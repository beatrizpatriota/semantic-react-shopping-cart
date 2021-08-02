import React, { useEffect, useState } from 'react';

const StoreCard = ({store}) => {
    const [link, setLink] = useState()

    useEffect(() => {
        if (store.label === 'Riachuelo') setLink('https://www.riachuelo.com.br')
        else if(store.label === 'Americanas') setLink('https://www.americanas.com.br')
        else if(store.label === 'C&A') setLink('https://www.cea.com.br')
        else if(store.label === 'Saraiva') setLink('https://www.saraiva.com.br')
        else setLink('https://www.rihappy.com.br')
    }, [store.label])

    return ( 
        <div className="card card-body">
            <p>{store.activity.label}</p>
            <h3 className="text-left">{store.label}</h3>
            <div className="text-right">

                    <a href={link} target="_blank" rel="noopener noreferrer">Ir para site</a>
            
            </div>
        </div>
     );
}
 
export default StoreCard;