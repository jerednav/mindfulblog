import "./write.css";

export default function Write() {
  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        alt='write'
      />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: "none" }} />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div class='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            typeOf='text'
            className='writeInput writeText'
          ></textarea>
        </div>
        <button class='writeSubmit'>Publish</button>
      </form>
    </div>
  );
}
