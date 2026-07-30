import "./../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">

        <a href="/" className="logo">
          <span className="logo-icon">+</span>

          <div className="logo-text">
            <span className="logo-title">
              МедАккредитация
            </span>

            <span className="logo-subtitle">
              сопровождение специалистов
            </span>
          </div>
        </a>

        <nav className="nav">

          <a href="#services">Услуги</a>

          <a href="#advantages">Преимущества</a>

          <a href="#reviews">Отзывы</a>

          <a href="#contact">Контакты</a>

        </nav>

        <a
          href="https://wa.me/79279319912"
          target="_blank"
          rel="noopener noreferrer"
          className="header-btn"
        >
          Консультация
        </a>

      </div>
    </header>
  );
}

export default Header;