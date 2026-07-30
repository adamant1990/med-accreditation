import "./../styles/advantages.css";

import {
  FaUsers,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt
} from "react-icons/fa";


function Advantages() {

  const advantages = [
    {
      icon: <FaUsers />,
      number: "1000+",
      title: "Специалистов",
      text: "Получили помощь в подготовке документов"
    },
    {
      icon: <FaClock />,
      number: "5+",
      title: "Лет опыта",
      text: "Разбираемся в требованиях аккредитации"
    },
    {
      icon: <FaMapMarkerAlt />,
      number: "Россия",
      title: "Работаем дистанционно",
      text: "Помогаем специалистам из любых регионов"
    },
    {
      icon: <FaShieldAlt />,
      number: "24/7",
      title: "Поддержка",
      text: "Всегда на связи по важным вопросам"
    }
  ];


  return (

    <section id="advantages" className="advantages fade-up">

      <div className="container">

        <h2>
          Почему выбирают нас
        </h2>


        <p className="advantages-subtitle">
          Берем на себя сложные вопросы и помогаем пройти путь
          до успешного результата.
        </p>


        <div className="advantages-grid">

          {advantages.map((item, index) => (

            <div 
              className="advantage-card"
              key={index}
            >

              <div className="advantage-icon">
                {item.icon}
              </div>


              <div className="advantage-number">
                {item.number}
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


export default Advantages;