import { useState } from "react";
import "./../styles/contact.css";
import { FaPhoneAlt, FaUserMd } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    speciality: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Заполните имя и телефон.");
      return;
    }

    const text = `Здравствуйте!

Хочу получить консультацию по аккредитации.

👤 Имя: ${form.name}
📱 Телефон: ${form.phone}
🩺 Специальность: ${form.speciality}

📝 Описание:
${form.message}`;

    const url =
      `https://wa.me/79279319912?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="contact fade-up">
      <div className="container">
        <div className="contact-box">
          <div className="contact-info">
            <span className="contact-badge">
              Бесплатная консультация
            </span>

            <h2>Получите помощь по аккредитации</h2>

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

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Телефон или WhatsApp"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="speciality"
              placeholder="Специальность"
              value={form.speciality}
              onChange={handleChange}
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Опишите вашу ситуацию"
              value={form.message}
              onChange={handleChange}
            />

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
