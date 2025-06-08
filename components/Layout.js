import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <nav style={{ background: '#000', padding: '1rem' }}>
        <Link href="/">Home</Link> | 
        <Link href="/about"> About</Link> | 
        <Link href="/blog"> Blog</Link> | 
        <Link href="/contact"> Contact</Link>
      </nav>
      <main>{children}</main>
      <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #444' }}>
        <p>© 2025 Raja Nadendla</p>
        <p><a href="https://github.com/RajaNadendla" target="_blank">GitHub</a> | <a href="https://linkedin.com/in/rajanadendla" target="_blank">LinkedIn</a></p>
      </footer>
    </>
  )
}
