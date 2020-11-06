import React from 'react';


const ModalWindow = ({src, name, height, gender, hair, style, close}) => {
        return (
            <div className='modalWindow active' >
                <div className='modalImg'><img alt="logo" src={src}></img></div>
                <div className='content'> <div className='info'><p>Имя: {name}</p>
                    <p>Рост: {height}</p>
                    <p>Пол: {gender}</p>
                    <p>Цвет волос: {hair}</p>
                    <p>Цвет кожи: {style}</p></div>
                    <div><button className='closeButton' onClick={close}>close</button></div>
                </div>
            </div>
        )
    }

export default ModalWindow;