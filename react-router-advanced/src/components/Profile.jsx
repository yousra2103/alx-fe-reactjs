import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const Profile = () => {
     // Get the dynamic part of the URL (userId)
  const { userId } = useParams();
  return (
    <div>
      <h2>Profile Page</h2>
      
      {/* Navigation Links for Nested Routes */}
      <nav>
        <ul>
          <li>
            <Link to="ProfileDetails">Profile Details</Link>
          </li>
          <li>
            <Link to="ProfileSettings">Profile Settings</Link>
          </li>
        </ul>
      </nav>
      <p>Displaying profile for user ID: {userId}</p>
      {/* This is where nested routes will be rendered */}
      <Outlet />
    </div>
  );
};

export default Profile;