import React, { useState } from 'react';

function Search() {
  // State to handle input value (GitHub username)
  const [username, setUsername] = useState('');

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
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      
      {/* Form for searching GitHub users */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
