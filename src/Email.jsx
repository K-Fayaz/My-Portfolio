import React from 'react';
import './Email.css';
import {MdAlternateErr} from 'react-icons/md'


function Email()
{
  return(
    <>
      <div className="EmailForm">
          <h1 className="headingMeet">Let's have a Talk..</h1>
          <hr className='border'/>
          <form>
            <div className="inputField">
              <input type='text' placeholder='Enter Name' />
            </div>
            <div className="inputField">
              <input type='text' placeholder='Enter a Valid Email' />
            </div>
            <div className="inputField">
              <input type='text' placeholder='Enter a Subject' autocomplete="off"/>
            </div>
            <div className="inputField">
              <textarea id="review" class="form-control" rows="7" cols="30" required>Let's Talk...</textarea>
            </div>
            <button>Send</button>
          </form>
      </div>
    </>
  )
}

export default Email;
