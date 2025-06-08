
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: 'white' }}>
      <Link href="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
      <Link href="/about" style={{ marginRight: '1rem', color: 'white' }}>About</Link>
      <Link href="/projects" style={{ marginRight: '1rem', color: 'white' }}>Projects</Link>
      <Link href="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  );
}
