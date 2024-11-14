import React, { useState } from 'react';
import './gallery.css';

import Img1 from '../src/img/1.jpg';
import Img2 from '../src/img/2.jpg';
import Img3 from '../src/img/3.jpg';
import Img4 from '../src/img/4.jpg';
import Img5 from '../src/img/5.jpg';
import Img6 from '../src/img/6.jpg';
import Img7 from '../src/img/7.jpg';
import Img8 from '../src/img/8.jpg';
import Img9 from '../src/img/9.jpg';
import Img10 from '../src/img/10.jpg';
import Img11 from '../src/img/11.jpg';
import Img12 from '../src/img/12.jpg';
import Img13 from '../src/img/13.jpg';
import Img14 from '../src/img/14.jpg';
import Img15 from '../src/img/15.jpg';

const Gallery = () => {
    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        }
    ]

    const [model, setModel] = React.useState(false);
    const [tempimgSrc, setTempImgSrc] = React.useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
        <div className={model? 'model open' : 'model'}>
            <img src={tempimgSrc} alt=''/>

        </div>
        <div className='gallery'>
            {data.map((item, index)=>{
                return(
                    <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%', height: '100%'}}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}   
export default Gallery