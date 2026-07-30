import "./../styles/services.css";

import {
  FaFileAlt,
  FaFolderOpen,
  FaGraduationCap,
  FaPaperPlane,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";


function Services() {

  const services = [
    {
      icon: <FaFileAlt />,
      title: "Проверка документов",
      text: "Проверим комплект документов перед подачей."
    },
    {
      icon: <FaFolderOpen />,
      title: "Подготовка портфолио",
      text: "Поможем правильно оформить портфолио."
    },
    {
      icon: <FaGraduationCap />,
      title: "Консультация",
      text: "Ответим на вопросы по прохождению аккредитации."
    },
    {
      icon: <FaPaperPlane />,
      title: "Подача документов",
      text: "Сопроводим процесс подачи документов."
    },
    {
      icon: <FaHandshake />,
      title: "Полное сопровождение",
      text: "Поможем пройти весь путь от начала до результата."
    },
    {
      icon: <FaHeadset />,
      title: "Поддержка",
      text: "Остаемся на связи на всех этапах."
    }
  ];


  return (

    <section id="services" className="services fade-up">

      <div className="container">

        <h2>
          Наши услуги
        </h2>


        <div className="services-grid">

          {services.map((item, index) => (

            <div 
              className="service-card" 
              key={index}
            >

              <div className="service-icon">
                {item.icon}
              </div>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.text}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>

  );

}


export default Services;