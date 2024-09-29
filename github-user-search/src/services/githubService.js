const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
function Search() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      fetchUserData();
    }
    };
    
      const data = await response.json();
      return data;
};

return(
     {/* Loading message */}
     {loading && <p>Loading...</p>}

     {/* Error message */}
     {error && <p style={{ color: 'red' }}>Looks like we can't find the user.</p>}
);


export default Search