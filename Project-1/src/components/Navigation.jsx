const Navigation = () => {
  return (
    <nav className="container">
      {/* brand logo */}
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>

      {/* Menu, location, about, contact */}
      <ul>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* Login button */}
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
