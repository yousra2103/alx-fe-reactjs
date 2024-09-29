const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
function Search() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
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