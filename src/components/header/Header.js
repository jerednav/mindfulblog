import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">Mindful</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img 
            className='headerImg' src="./images/coverimage.jpg" alt="" />
        </div>
    )
}
