
import React from 'react'
import './Header.css'

function Header({CartItem}){



return(
    <div className="header">
        <h1>Khovani Investment</h1>
        <p className='count'>Cart<sup>{CartItem}</sup></p>

    </div>
)




}
export default Header;