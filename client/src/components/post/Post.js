import React from 'react'
import './post.css'

export default function Post() {
    return (
        <div className='post'>
         <img 
         className='postImg' src="./images/ace.jpeg" alt="" />
         <div className="postInfo">
             <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
             </div>
             <span className="postTitle">
                 Lorem ipsum dolor, sit amet 
            </span>
             <hr />
             <span className="postDate">3 hours ago</span>
         </div>
         <p className='postDesc'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi iure voluptates odio nesciunt temporibus quam! Impedit expedita voluptates recusandae similique amet alias officiis tenetur ducimus excepturi, voluptatem, soluta nulla?
         </p>
        </div>
            )
}
