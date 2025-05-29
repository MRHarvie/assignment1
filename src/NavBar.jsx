// NavBar.jsx
import { useState } from 'react';
import './App.css';

function NavBar() {
  // trying to toggle login/logout button text
  const [loggedIn, setLoggedIn] = useState(false);

  // test function to flip button state
  const handleLoginToggle = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className="navbar">
      <div>Assignment 1</div>
      {/* button shows login/logout based on state */}
      <button onClick={handleLoginToggle}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default NavBar;
