import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <div className="header">
      <h3>Logo</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">portfolio</Link>
      </nav>
    </div>
  );
}
