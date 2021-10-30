import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">Mindful</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://inspirationfeed.com/wp-content/uploads/2015/04/blurred-background.jpg" alt="" className="headerImg" />
        </div>
    )
}
