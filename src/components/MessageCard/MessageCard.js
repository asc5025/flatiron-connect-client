import React from 'react';

const MessageCard = (props) => {
  return (
    <div>
      <h4>MessageCard</h4>
      <p>Send Msg to Specifc User, pass props</p>
      <input type="textarea"/>
      <button>Cancel</button>
      <button>Send</button>
    </div>
  )
}

export default MessageCard;
