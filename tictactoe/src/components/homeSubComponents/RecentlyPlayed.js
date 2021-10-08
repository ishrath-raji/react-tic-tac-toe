import React from 'react';
import Player from './Player';

const data =[
    {
        title:'Achini Rathnayake',
    },
    {
        title:'Anura Adhikari',
    },
    {
        title:'Aravinthan Ramaraju',
    },
    {
        title:'Mohamed Shaffy',
    },
    {
        title:'Aishan Bamunawita',
    }
    
]
const RecentlyPlayed = () => {
    return (
        <div>
            hi
           <Player data = {data} />
        </div>
    );
}

export default RecentlyPlayed;