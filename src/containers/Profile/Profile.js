import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        Profile Page
        <ul>
          <li>session/current user auth profile</li>
          <li>edit profile button & back to home/redirect router</li>
        </ul>
        <button>Edit Profile</button>
      </div>
    )
  }
}

export default Profile;
