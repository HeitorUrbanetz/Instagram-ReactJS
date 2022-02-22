import React from 'react';
import './style.css';


export function Story() {
    return (
        <div className='container'>

        <div className='user-elements'>

        <div>
            <img className="image-user-story" src='https://github.com/peas.png'/>
        </div>

        <span>alguém</span>

        </div>

        {/* 2 */}

        <div className='user-elements'>

        <div>
            <img className="image-user-story" src='https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/3491_75AA8DDC0225BFCF.jpg?w=1200&h=900&crop=1'/>
        </div>

        <span>neymarjr</span>

        </div>

    </div>
    )
}

