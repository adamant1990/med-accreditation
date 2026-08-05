import "./../styles/hero.css";
import { FaCheckCircle, FaWhatsapp, FaTelegramPlane, FaShieldAlt } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero fade-up">
      <div className="hero-container">
        <div className="hero-left">
          <span className="badge">
            <FaShieldAlt /> Работаем по всей России
          </span>

          <h1>
            Сопровождение аккредитации
            <br />
            медицинских работников
          </h1>

          <p>
            Помогаем врачам, фельдшерам, медицинским сестрам и другим
            специалистам пройти аккредитацию спокойно, грамотно и без лишней
            бюрократии.
          </p>

          <div className="hero-buttons">
            <a
              href="https://wa.me/79279319912"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              <FaWhatsapp />
              Получить консультацию
            </a>

            <a
              href="https://t.me/nutrtionbot"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              <FaTelegramPlane />
              Написать в Telegram
            </a>
          </div>

          <div className="hero-features">
            <div>
              <FaCheckCircle />
              Бесплатная первичная консультация
            </div>

            <div>
              <FaCheckCircle />
              Проверка документов перед подачей
            </div>

            <div>
              <FaCheckCircle />
              Сопровождение на каждом этапе
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="doctor-visual">
            <div className="doctor-image" role="img" aria-label="Медицинский специалист на консультации" />

            <div className="doctor-floating-card doctor-floating-card--top">
              <span className="floating-icon"><FaShieldAlt /></span>
              <div>
                <strong>Надёжное сопровождение</strong>
                <span>От консультации до результата</span>
              </div>
            </div>

            <div className="doctor-floating-card doctor-floating-card--bottom">
              <span className="floating-check"><FaCheckCircle /></span>
              <div>
                <strong>Документы проверены</strong>
                <span>Перед подачей на аккредитацию</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
