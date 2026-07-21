import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2>🚗 ELITE MOTORS </h2>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Cars</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;