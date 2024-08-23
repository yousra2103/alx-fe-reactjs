import { useState } from 'react'

import UserProfile from './components/UserProfile'

function App() {
  
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      
      <ProfilePage userData={userData} />;
      
     
    </>
  )
}

export default App
