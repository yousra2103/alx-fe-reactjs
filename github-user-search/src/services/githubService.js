const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
function Search() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
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
const fetchUserData = async () => {
    get
  const response = await axios(`https://api.github.com/search/users?q={query}`, {
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