import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className='singlePostIcon far fa-edit'></i>
                        <i className='singlePostIcon far fa-trash-alt'></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Jered</b></span>
                    <span className='singlePostDate'>Date: <b>1 hour ago</b></span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nam delectus nemo ipsam, obcaecati hic saepe repudiandae velit? Non quia dolores necessitatibus sit ab illum distinctio saepe hic eius! Dolor.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nam delectus nemo ipsam, obcaecati hic saepe repudiandae velit? Non quia dolores necessitatibus sit ab illum distinctio saepe hic eius! Dolor.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nam delectus nemo ipsam, obcaecati hic saepe repudiandae velit? Non quia dolores necessitatibus sit ab illum distinctio saepe hic eius! Dolor.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nam delectus nemo ipsam, obcaecati hic saepe repudiandae velit? Non quia dolores necessitatibus sit ab illum distinctio saepe hic eius! Dolor.
                </p>
            </div>
        </div>
    )
}
