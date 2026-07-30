import "./../styles/hero.css";
import { FaCheckCircle } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero fade-up">
      <div className="hero-container">
        <div className="hero-left">
          <span className="badge">
            ✓ Работаем по всей России
          </span>

          <h1>
            Сопровождение аккредитации
            <br />
            медицинских работников
          </h1>

          <p>
            Помогаем врачам, фельдшерам, медицинским сестрам и другим
            специалистам пройти аккредитацию быстро, спокойно и без лишних
            сложностей.
          </p>

          <div className="hero-buttons">
            <a
              href="https://wa.me/79279319912"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              💬 WhatsApp
            </a>

            <a
              href="https://t.me/nutrtionbot"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              ✈️ Telegram
            </a>
          </div>

          <div className="hero-features">
            <div>
              <FaCheckCircle />
              Бесплатная консультация
            </div>

            <div>
              <FaCheckCircle />
              Проверка документов
            </div>

            <div>
              <FaCheckCircle />
              Полное сопровождение
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="doctor-card">
            <div className="doctor-circle">
              👩‍⚕️
            </div>

            <h3>Профессиональная помощь</h3>

            <p>
              Подготовим документы и сопроводим до успешного прохождения
              аккредитации.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;