import React from 'react';

const Profile = ({ id, token }) => {
  return (
    <div className="profile">
      <h2>ID: {id}</h2>
      <h2>Token: {token}</h2>
    </div>
  )
}

export default Profile;
