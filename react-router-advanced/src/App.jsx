import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PostsComponent from './PostsComponent';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

// Dummy components for other routes
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsComponent />} />
          <Route path="/about" element={<About />} />
          
          {/* Nested Routes for Profile */}
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Route>
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;

