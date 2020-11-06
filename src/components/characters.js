import { render } from "@testing-library/react";
import React, { useState } from 'react';
import ModalWindow from './modalWindow';



const Character = ({ results }) => {
    let [isOpenModal, setIsOpen] = useState(false);
    let [url, setUrl] = useState();


    const showModal = (e) => {
        setUrl(e.target.src);
        setIsOpen(!isOpenModal)
    }

    console.log('RENDER')
    return <div className='people'>
        {results.map((item, index) => {
            const { name, height, gender, skin_color, hair_color } = item;
            const src = `/images/${name.split(' ').join('')}.jpg`;

            return <div>
                <div key={index} title={name} onClick={showModal} className={name}>
                    <img className='peopleImg' id={index} alt="logo" src={src}></img>
                    <h2>{name}</h2>
                </div>
                {isOpenModal && <ModalWindow close={showModal} src={url} isOpen={isOpenModal} name={name} height={height} gender={gender} style={skin_color} hair={hair_color} />}
            </div>
        })}
    </div>
}

export default Character;

