import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Shimmer from './Shimmer';

import { MENU_API_URL } from '../utils/constants';

const ResturantMenu = () => {

    const [restroInfo, setRestroInfo] = useState(null);

    // const {resId} = useParams();

    const {resId} = useParams();


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId); 

        const json = await data.json();

        setRestroInfo(json.data);
    }

    if (restroInfo === null) return <Shimmer/>;


    const {name , areaName , costForTwoMessage, locality, cuisines } = restroInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return  (
            <div className='menu'>
                
                {/* <h1>{restroInfo?.cards[2]?.card?.card?.info?.name}</h1> */}
                <h1>{name}</h1>
                <h2>{areaName}</h2>
                <p>{cuisines.join(",")}</p>
                <p>{costForTwoMessage} - {locality}</p>
                <h3>Menu Items</h3>
                <ul>

                    {itemCards.map((item) =><li key={item.card.info.id}>{item.card.info.name} - {`Price RS ${item.card.info.price/100}`}</li> )}
                </ul>
            </div>
        )
}

export default ResturantMenu