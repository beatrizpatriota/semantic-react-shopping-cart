import React, { useState, useEffect } from "react"

export default function MapArea() {
    const [store, setStore] = useState()
    const [infoStore, setInfoStore] = useState({})

    useEffect(() => {
        fetch(
            `http://localhost:8080/store/map?locationUri=${encodeURIComponent(store)}`,
            { method: "GET" })
            .then(res => res.json())
            .then(response => {
                setInfoStore(response)
            })
            .catch(error => console.log(error))
    }, [store])

    return (
        <>
                <div span={12}>
                    <img src="mapa.jpg" alt='mapaShopping' useMap="#image-map" />

                    <map name="image-map">
                        <area alt="Riachuelo" title="Riachuelo"
                            onClick={() => setStore('http://www.semanticweb.org/eachusp/ontologies/2021/5/ep-wsemantica#/stores/americanas/location')}
                            coords="325,101,390,101,391,26,284,27,284,106,315,107" shape="poly" />
                        <area alt="RiHappy" title="RiHappy"
                            onClick={() => setStore('http://www.semanticweb.org/eachusp/ontologies/2021/5/ep-wsemantica#/stores/rihappy/location')}
                            coords="393,26,393,102,424,126,463,125,464,64,418,26" shape="poly" />
                        <area alt="Americanas" title="Americanas"
                            onClick={() => setStore('http://www.semanticweb.org/eachusp/ontologies/2021/5/ep-wsemantica#/stores/americanas/location')}
                            coords="195,163,192,231,267,232,267,132,235,133" shape="poly" />
                        <area alt="C&amp;A" title="C&amp;A"
                            onClick={() => setStore('http://www.semanticweb.org/eachusp/ontologies/2021/5/ep-wsemantica#/stores/cea/location')}
                            coords="270,134,293,133,323,157,379,157,380,232,269,232" shape="poly" />
                        <area alt="Saraiva" title="Saraiva"
                            onClick={() => setStore('http://www.semanticweb.org/eachusp/ontologies/2021/5/ep-wsemantica#/stores/saraiva/location')}
                            coords="381,156,407,156,414,152,486,152,486,232,382,232" shape="poly" />
                    </map>
                </div>
                <div span={12}>
                    <p>Clique em uma loja para obter sua rota</p>

                    <div name="store">
                        <h2>{infoStore.description}</h2>
                        {infoStore.exitOneInstructions ? <p>Entrada/Saída 1: {infoStore.exitOneInstructions}</p> : null}
                        {infoStore.exitTwoInstructions ? <p>Entrada/Saída 2: {infoStore.exitTwoInstructions}</p> : null}
                    </div>
                </div>
            </>
    )
}