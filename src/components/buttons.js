import React from 'react';


const Buttons = (props) => {
        
// console.log('ghbdtn',props.next);
    if(props.results.length==0){ return (
     <button className='startButton' onClick={props.getChar}><img src='/images/button__logo.jpg'></img></button>
 )} else{
     return <div className='navButtons'>
         <button className='previousPage' onClick={props.getBack}>previous</button>
         <button className='nextPage'onClick={props.getChar} >next</button>
     </div>
 }
     
}

export default Buttons;