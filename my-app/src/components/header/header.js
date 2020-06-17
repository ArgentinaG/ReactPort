import React from 'react';

import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Argentina Guerrero</h1>
      </div>
    );
  }
}


import React from "react";
import "../styles/Header.css";
const styles = {
  headerStyle: {
    background: "lightblue"
  },
  headingStyle: {
    fontSize: 100
  }
};
// We use JSX curly braces to evaluate the style object
function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Employee Directory</h1>
    </header>
  );
}



