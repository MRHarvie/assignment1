//practice code intitating

import { useState } from 'react';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav>
      <h1>Assignment 1</h1>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
}

export default NavBar;
