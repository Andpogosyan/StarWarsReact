import React from 'react';


const ModalWindow = (props) => {
    // console.log(props);

    if(props.isOpen&&props.who===props.name){
    return (
        <div className='modalWindow active' >
            <div className='modalImg'><img src={props.src}></img></div>
            <div className='content'> <div className='info'><p>Имя: {props.name}</p>
            <p>Рост: {props.height}</p>
            <p>Пол: {props.gender}</p>
    <p>Цвет волос: {props.hair}</p>
    <p>Цвет кожи: {props.style}</p></div>
            <div><button className='closeButton' onClick={props.close}>close</button></div>
            </div>
            
        </div>
    )
    } else {
        return (
            <div className='modalWindow'  hidden>
                {/* <img src={props.src}></img> */}
                <p>{props.name}</p>
    
            </div>
        )}
}

export default ModalWindow;