const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
function Search() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
const fetchUserData = async () => {
    try
  const response = await fetch(`https://api.github.com/users/{username}`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });
  if (!response.ok) {
    throw new Error('User not found');
  }

  const data = await response.json();
  setUserData(data);  // Store user data
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




export default Search