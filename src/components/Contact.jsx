import "./../styles/contact.css";
import { FaPhoneAlt, FaUserMd } from "react-icons/fa";

function Contact() {

  return (

    <section id="contact" className="contact fade-up">

      <div className="container">

        <div className="contact-box">

          <div className="contact-info">

            <span className="contact-badge">
              Бесплатная консультация
            </span>

            <h2>
              Получите помощь по аккредитации
            </h2>

            <p>
              Заполните форму, и мы свяжемся с вами,
              ответим на вопросы и подскажем,
              как пройти аккредитацию без лишних сложностей.
            </p>

            <div className="contact-item">
              <FaPhoneAlt />
              <span>Ответим в течение 15 минут</span>
            </div>

            <div className="contact-item">
              <FaUserMd />
              <span>Консультация бесплатна</span>
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Ваше имя"
            />

            <input
              type="tel"
              placeholder="Телефон или WhatsApp"
            />

            <input
              type="text"
              placeholder="Специальность"
            />

            <textarea
              rows="5"
              placeholder="Опишите вашу ситуацию"
            ></textarea>

            <button type="submit">
              Получить консультацию
            </button>

          </form>

        </div>

      </div>

    </section>

  );

}

export default Contact;