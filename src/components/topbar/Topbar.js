import "./topbar.css";

export default function Topbar() {
  return (
    <div className='top'>
      <div class='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
      </div>
      <div class='topCenter'>
        <ul class='topList'>
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div class='topRight'>
        <img
          className='topImg'
          src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt=''
        />
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
}
