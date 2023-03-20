import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  background: 'green',
  border: '20px solid black',
  padding: '0 20px',
  h1: { color: 'red'}
};

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className="header" style={styles}>
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
