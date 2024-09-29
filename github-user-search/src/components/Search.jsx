// import React, { useState } from 'react';

// function Search() {
//   // State to handle input value (GitHub username)
//   const [username, setUsername] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1); // Pagination state to track page numbers
//   const [hasMore, setHasMore] = useState(true); // Track if more results exist

// // Function to fetch users from GitHub API
// const fetchGitHubUsers = async (loadMore = false) => {
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


//   // Function to handle input value change
//   const handleInputChange = (e) => {
//     setUsername(e.target.value); // Update username state with the input value
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (username) {
//       console.log(`Searching for GitHub user: ${username}`);
//       // Here, you'd trigger your API call or logic to search for the GitHub user
//     } else {
//       console.log('Please enter a GitHub username.');
//     }
//     const fetchUserData = async () => {
//         get
//       const response = await axios(`https://api.github.com/users/{username}`, {
//         headers: {
//           Authorization: `token ${GITHUB_API_KEY}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error('User not found');
//       }
    
//       const data = await response.json();
//       setUserData(data);  // Store user data
//       setLoading(true);
//       setError(null);     // Clear any previous errors
//     } catch (error) {
//       setError(error.message);  // Set error message
//       setUserData(null);        // Clear user data
//     }
//   };

//   return (
  
// <div>
// <h1>GitHub User Search</h1>

// <form onSubmit={handleSubmit}>
//   <input
//     type="text"
//     placeholder="Enter GitHub username"
//     value={username}
//     onChange={handleInputChange}
//   />
//   <input type="text" className="text-center text-3xl font-bold text-blue-600 p-6" >Location</input>
//   <input type="text" className="text-center text-3xl font-bold text-blue-600 p-6" >Minimum Repositories</input>
//   <button type="submit">Search</button>
// </form>


// {loading && <p>Loading...</p>}


// {error && <p className="text-center text-3xl font-bold text-blue-600 p-6">Looks like we can't find the user.</p>}


// {userData && (
 
//     {users.length > 0 && (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id} className="p-4 border-b">
//               <div className="flex items-center">
               
//                 <img
//                   src={user.avatar_url}
//                   alt={user.login}
//                   className="w-16 h-16 rounded-full mr-4"
//                 />
//   <div className='mt-20'>
//     <img
//       src={userData.avatar_url}
//       alt={`${userData.login}'s avatar`}
//     className='w-150'
//     />
//     <h2>{userData.name || userData.login}</h2>
//     <a
//       href={userData.html_url}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//           <div>
              
//                   <h2 className="text-lg font-semibold">{user.login}</h2>
                  
//                   {user.location && (
//                     <p>Location: {user.location}</p>
//                   )}
               
//                   <p>Public Repos: {user.public_repos}</p>
                 
//                   <a
//                     href={user.html_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600"
//                   >
//                     View Profile
//                   </a>
//                 </div>
//       View GitHub Profile
//     </a>
//   </div>

// </div>
//   )};


// export default Search;
import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [username, setUsername] = useState(''); // GitHub username input
  const [users, setUsers] = useState([]); // Users list from GitHub API
  const [userData, setUserData] = useState(null); // Detailed user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [page, setPage] = useState(1); // Pagination state

  const GITHUB_API_KEY = 'YOUR_API_KEY_HERE'; // API key for authentication

  // Function to handle input value change
  const handleInputChange = (e) => {
    setUsername(e.target.value); // Update username state with the input value
  };

  // Fetch users based on search query (with pagination)
  const fetchGitHubUsers = async (loadMore = false) => {
    setLoading(true);
    setError(null);
    
    const currentPage = loadMore ? page + 1 : 1;

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${username}&per_page=10&page=${currentPage}`,
        { headers: { Authorization: `token ${GITHUB_API_KEY}` } }
      );
      if (response.data.items.length === 0) {
        setHasMore(false); // No more results if no items
      }

      setUsers(loadMore ? [...users, ...response.data.items] : response.data.items); // Append or set users
      setPage(currentPage); // Update the page state
    } catch (error) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  // Fetch specific user data (based on username)
  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${GITHUB_API_KEY}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      setError('User not found');
      setUserData(null); // Reset user data
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      fetchGitHubUsers();
      fetchUserData();
    } else {
      setError('Please enter a GitHub username.');
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
          onChange={handleInputChange}
          className="border p-2 rounded mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Render Users List */}
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
                  <p>Public Repos: {user.public_repos}</p>
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

      {/* Render Detailed User Data */}
      {userData && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold">{userData.name || userData.login}</h2>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            className="w-32 h-32 rounded-full"
          />
          <p>Location: {userData.location || 'N/A'}</p>
          <p>Public Repositories: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            View Full GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
