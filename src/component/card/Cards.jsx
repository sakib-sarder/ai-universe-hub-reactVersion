import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
            fetch(`https://openapi.programming-hero.com/api/ai/tools`)
            .then(res => res.json())
            .then(data => setData(data.data.tools))   
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6">
            {data.map(singleData => <Card singleData = {singleData} key={singleData.id}></Card>)}
        </div>
    );
};

export default Cards;