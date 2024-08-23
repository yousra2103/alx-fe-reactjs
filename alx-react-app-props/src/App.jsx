import { useState } from 'react'

import UserProfile from './components/UserProfile'

function App() {
  const [state, setState] = useState('some value');
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      
      <ProfilePage userData={userData} />;
      <MyContext.Provider value={{ state, setState }} />
      <MyContext.Provider />
      
     
    </>
  )
}

export default App
