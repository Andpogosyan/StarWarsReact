import { render } from "@testing-library/react";
import React, {useState} from 'react';
import ModalWindow from './modalWindow';



const Character = ({results}) => {
    
    let [whoClick, setWhoClick] = useState();
    let [isOpenModal, setIsOpen] = useState(false);
    const showModal = (e) => {
                
        setWhoClick(e.target.id)
        console.log('who', whoClick);
        if(!(isOpenModal)){
        setIsOpen(true);
        }else{
            setIsOpen(false);
        }
       
    }

    return <div className='people'>
        {results.map((item, index) => {
            const src = `/images/${item.name.split(' ').join('')}.jpg`
            // console.log(item)
            return <div>
            <div key={index} title={item.name} onClick={showModal} className={item.name}>
                <img className='peopleImg' id={item.name} alt="logo" src={src}></img>
                <h2>{item.name}</h2>
                </div>
                <ModalWindow close={showModal} src = {src} isOpen={isOpenModal} name={item.name} who={whoClick} height={item.height} gender={item.gender} style={item.skin_color} hair={item.hair_color}/>
            </div>
})}
        
    </div>
}

export default Character;

