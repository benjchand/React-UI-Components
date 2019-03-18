import React from 'react';
import './Header.css';
import HeaderImage from './ImageThumbnail.js';
import HeaderInfo from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';



const HeaderContainer = () => {
    return (
        <div className="header-container header-div">
            <HeaderImage />
            <HeaderContent />
        </div>
    )
}



export default HeaderContainer;