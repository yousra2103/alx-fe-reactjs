// const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
// function Search() {
//     const [loading, setLoading] = useState(false);
//     const [username, setUsername] = useState('');
//     const [userData, setUserData] = useState(null);
//     const [error, setError] = useState(null);
//     const [page, setPage] = useState(1); // Pagination state to track page numbers
//   const [hasMore, setHasMore] = useState(true); // Track if more results exist
//     // Function to fetch users from GitHub API
//   const fetchGitHubUsers = async (loadMore = false) => {
//     setLoading(true); // Set loading to true when starting the API request
//     setError(null);   // Reset any previous error state

//     const currentPage = loadMore ? page + 1 : 1; // Increment page if loading more

//     try {
//       const response = await fetch(
//         `https://api.github.com/search/users?q=${query}+repos:>10+followers:>10&per_page=10&page=${currentPage}`
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch users');
//       }

//       const data = await response.json();

//       setUsers((prevUsers) => (loadMore ? [...prevUsers, ...data.items] : data.items)); // Append or replace users
//       setPage(currentPage); // Update the page state

//       // Check if more results exist
//       setHasMore(data.items.length > 0);
//     } catch (error) {
//       setError(error.message); // Capture and set error message if any
//     } finally {
//       setLoading(false); // Set loading to false after the API request completes
//     }
//   };
// const fetchUserData = async () => {
//     get
//   const response = await axios(`https://api.github.com/search/users?q={query}`, {
//     headers: {
//       Authorization: `token ${GITHUB_API_KEY}`,
//     },
//   });
//   if (!response.ok) {
//     throw new Error('User not found');
//   }

//   const data = await response.json();
//   setUserData(data);  // Store user data
//   setLoading(true);
//   setError(null);     // Clear any previous errors
// } catch (error) {
//   setError(error.message);  // Set error message
//   setUserData(null);        // Clear user data
// }
// // Handle form submission
// const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username) {
//       fetchUserData();
//     }
//     };
    
//       const data = await response.json();
//       return data;
// };

// return(
//      {/* Loading message */}
//      {loading && <p>Loading...</p>}

//      {/* Error message */}
//      {error && <p style={{ color: 'red' }}>Looks like we cant find the user.</p>}
//      ["location", "minRepos"]
     
// );


// export default Search

import React, { useState } from 'react';
import axios from 'axios';

const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

function Search() {
  const [username, setUsername] = useState(''); // GitHub username input
  const [userData, setUserData] = useState(null); // User data state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [users, setUsers] = useState([]); // For storing search results
  const [page, setPage] = useState(1); // Pagination state
  const [hasMore, setHasMore] = useState(true); // To track if more results exist

  // Fetch users from GitHub API based on search query
  const fetchGitHubUsers = async (loadMore = false) => {
    setLoading(true);
    setError(null);

    const currentPage = loadMore ? page + 1 : 1; // Increment page if loading more
    const query = username;

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}+repos:>10+followers:>10&per_page=10&page=${currentPage}`,
        { headers: { Authorization: `token ${GITHUB_API_KEY}` } }
      );

      const data = response.data;

      // Append new users if loading more, otherwise replace
      setUsers((prevUsers) => (loadMore ? [...prevUsers, ...data.items] : data.items));
      setPage(currentPage); // Update the page state

      // If no more items in response, disable further loading
      setHasMore(data.items.length > 0);
    } catch (err) {
      setError('Failed to fetch users'); // Set error message
    } finally {
      setLoading(false); // Set loading to false after API call
    }
  };

  // Fetch specific user details
  const fetchUserData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: { Authorization: `token ${GITHUB_API_KEY}` },
      });

      setUserData(response.data); // Store detailed user data
    } catch (err) {
      setError('User not found'); // Set error if user not found
      setUserData(null); // Clear previous user data
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      fetchUserData(); // Fetch specific user data
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Error state */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* User data display */}
      {userData && (
        <div>
          <h2>{userData.name || userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} className="w-32 h-32 rounded-full" />
          <p>Location: {userData.location || 'N/A'}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            View Profile
          </a>
        </div>
      )}

      {/* List of users (search results) */}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="p-4 border-b">
              <div className="flex items-center">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Load more button */}
      {hasMore && users.length > 0 && !loading && (
        <button onClick={() => fetchGitHubUsers(true)} className="bg-blue-500 text-white p-2 rounded">
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
