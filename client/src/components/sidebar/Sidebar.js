import './sidebar.css'


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <div className="sidebarTitle">ABOUT ME</div>
                <img src='./images/ace.jpeg' alt='About Me!' className='sidebarImg'/>
                <p>Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident. </p>
             </div>
             <div className="sidebarItem">
                 <span className="sidebarTitle">CATEGORIES</span>
                 <ul className="sidebarList">
                         <li className="sidebarListItem">LIFE</li>
                         <li className="sidebarListItem">MUSIC</li>
                         <li className="sidebarListItem">FASHION</li>
                         <li className="sidebarListItem">SPORT</li>
                         <li className="sidebarListItem">TECH</li>
                         <li className="sidebarListItem">OTHER</li>
                 </ul>
            </div>
                 <div className="sidebarItem">
                 <span className="sidebarTitle">FOLLOW US</span>
                 <div className="sidebarSocial">
                    <i className='sidebarIcon fab fa-facebook-square'></i>
                    <i className='sidebarIcon fab fa-instagram-square'></i>
                    <i className='sidebarIcon fab fa-pinterest-square'></i>
                    <i className='sidebarIcon fab fa-twitter-square'></i>
                 </div>
                 </div>
        </div>
    )
}
