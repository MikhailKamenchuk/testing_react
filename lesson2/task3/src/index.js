import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
const renderSeconds = () => {
    const time = new Date().getSeconds();
    const style = time % 2 === 0
    ? {
        color: 'black',
        backgroundColor: 'white'
    }
    : {
        color: 'white',
        backgroundColor: 'black'
    }
    ;

    const seconds = (
        <div className='seconds' style={style}>
            {`Now is ${time}`}
        </div>
    );

    const rootElement = document.querySelector('#root');

    ReactDOM.render(seconds, rootElement)
}

setInterval(() => renderSeconds(), 1000)