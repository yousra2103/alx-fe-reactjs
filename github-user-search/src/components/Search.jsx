import React, { useState } from 'react';
[Looks like we cant find the user.]
function Search() {
  // State to handle input value (GitHub username)
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

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
      View GitHub Profile
    </a>
  </div>
)}
</div>
  );
}

export default Search;
