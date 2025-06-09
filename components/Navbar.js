import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>

      <div
        className="dropdown"
        onMouseEnter={() => setOpenMenu('projects')}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <span className="dropdown-toggle">Projects</span>
        {openMenu === 'projects' && (
          <div className="dropdown-menu">
            <Link href="/projects">All Projects</Link>
            <Link href="/projects#ai">AI Tools</Link>
          </div>
        )}
      </div>

      <div
        className="dropdown"
        onMouseEnter={() => setOpenMenu('blog')}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <span className="dropdown-toggle">Blog</span>
        {openMenu === 'blog' && (
          <div className="dropdown-menu">
            <Link href="/blog">Latest</Link>
            <Link href="/blog#categories">Categories</Link>
          </div>
        )}
      </div>

      <Link href="/contact">Contact</Link>

      <button onClick={() => document.body.classList.toggle('dark')}>Toggle Theme</button>

      <style jsx>{`
        .navbar {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: var(--bg, #f0f0f0);
          color: var(--text, #000);
        }
        .dropdown {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid #ccc;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          z-index: 999;
        }
        .dropdown-toggle {
          cursor: pointer;
        }
        button {
          margin-left: auto;
        }
      `}</style>
    </nav>
  );
}
