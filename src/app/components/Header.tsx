"use client";

import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ width: '100%', backgroundColor: 'black', color: 'white', padding: '1rem', position: 'fixed', top: 0, zIndex: 10 }}>
      <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ margin: '0 20px' }}>
            <Link href="#about">
              <span style={{ cursor: 'pointer', color: 'white' }}>About</span> {/* Renamed to "About" */}
            </Link>
          </li>
          <li style={{ margin: '0 20px' }}>
            <Link href="#experience">
              <span style={{ cursor: 'pointer', color: 'white' }}>Experience</span>
            </Link>
          </li>
          <li style={{ margin: '0 20px' }}>
            <Link href="#projects">
              <span style={{ cursor: 'pointer', color: 'white' }}>Projects</span>
            </Link>
          </li>
          <li style={{ margin: '0 20px' }}>
            <Link href="#contact">
              <span style={{ cursor: 'pointer', color: 'white' }}>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
