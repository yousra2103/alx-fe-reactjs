import React, { useState } from 'react';
[Looks like we cant find the user.]
function Search() {
  // State to handle input value (GitHub username)
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Pagination state to track page numbers
  const [hasMore, setHasMore] = useState(true); // Track if more results exist

// Function to fetch users from GitHub API
const fetchGitHubUsers = async (loadMore = false) => {
    setLoading(true); // Set loading to true when starting the API request
    setError(null);   // Reset any previous error state

    const currentPage = loadMore ? page + 1 : 1; // Increment page if loading more

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}+repos:>10+followers:>10&per_page=10&page=${currentPage}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();

      setUsers((prevUsers) => (loadMore ? [...prevUsers, ...data.items] : data.items)); // Append or replace users
      setPage(currentPage); // Update the page state

      // Check if more results exist
      setHasMore(data.items.length > 0);
    } catch (error) {
      setError(error.message); // Capture and set error message if any
    } finally {
      setLoading(false); // Set loading to false after the API request completes
    }
  };


  // Function to handle input value change
  const handleInputChange = (e) => {
    setUsername(e.target.value); // Update username state with the input value
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (username) {
      console.log(`Searching for GitHub user: ${username}`);
      // Here, you'd trigger your API call or logic to search for the GitHub user
    } else {
      console.log('Please enter a GitHub username.');
    }
    const fetchUserData = async () => {
        get
      const response = await axios(`https://api.github.com/users/{username}`, {
        headers: {
          Authorization: `token ${GITHUB_API_KEY}`,
        },
      });
      if (!response.ok) {
        throw new Error('User not found');
      }
    
      const data = await response.json();
      setUserData(data);  // Store user data
      setLoading(true);
      setError(null);     // Clear any previous errors
    } catch (error) {
      setError(error.message);  // Set error message
      setUserData(null);        // Clear user data
    }
  };

  return (
  
<div>
<h1>GitHub User Search</h1>

{/* Search Form */}
<form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Enter GitHub username"
    value={username}
    onChange={handleInputChange}
  />
  <input type="text" className="text-center text-3xl font-bold text-blue-600 p-6" >Location</input>
  <input type="text" className="text-center text-3xl font-bold text-blue-600 p-6" >Minimum Repositories</input>
  <button type="submit">Search</button>
</form>

{/* Conditional rendering based on the API call state */}

{/* Loading message */}
{loading && <p>Loading...</p>}

{/* Error message */}
{error && <p className="text-center text-3xl font-bold text-blue-600 p-6">Looks like we can't find the user.</p>}

{/* Display user data after successful fetch */}
{userData && (
    {/* Rendering users with map if users are fetched */}
    {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="p-4 border-b">
              <div className="flex items-center">
                {/* Display user's avatar */}
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full mr-4"
                />
  <div className='mt-20'>
    <img
      src={userData.avatar_url}
      alt={`${userData.login}'s avatar`}
    className='w-150'
    />
    <h2>{userData.name || userData.login}</h2>
    <a
      href={userData.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
          <div>
                  {/* Display user's GitHub username */}
                  <h2 className="text-lg font-semibold">{user.login}</h2>
                  {/* Display user's location if available */}
                  {user.location && (
                    <p>Location: {user.location}</p>
                  )}
                  {/* Display user's repository count */}
                  <p>Public Repos: {user.public_repos}</p>
                  {/* Link to the user's GitHub profile */}
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    View Profile
                  </a>
                </div>
      View GitHub Profile
    </a>
  </div>
)}
</div>
  );
}

export default Search;
