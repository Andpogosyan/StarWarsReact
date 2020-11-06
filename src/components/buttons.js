import React from 'react';


const Buttons = ({ results, previous, getChar, next}) => {

    if (results && results.length === 0) {
        return (
            <button className='startButton' onClick={() => getChar(next)}><img alt="start_logo"src='/images/button__logo.jpg'></img></button>
        )
    } else {
        return <div className='navButtons'>
            <button className='previousPage' onClick={() => getChar(previous)}>previous</button>
            <button className='nextPage' onClick={() => getChar(next)} >next</button>
        </div>
    }

}

export default Buttons;