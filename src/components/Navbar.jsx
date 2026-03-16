export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="logo">Portfolio</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}