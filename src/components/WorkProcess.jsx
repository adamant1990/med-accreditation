import "./../styles/workprocess.css";


function WorkProcess() {

  const steps = [
    {
      number: "01",
      title: "Оставляете заявку",
      text: "Связываетесь с нами удобным способом."
    },
    {
      number: "02",
      title: "Бесплатная консультация",
      text: "Разбираем вашу ситуацию и документы."
    },
    {
      number: "03",
      title: "Проверка документов",
      text: "Определяем, что необходимо подготовить."
    },
    {
      number: "04",
      title: "Подготовка",
      text: "Помогаем оформить необходимые материалы."
    },
    {
      number: "05",
      title: "Результат",
      text: "Сопровождаем до успешного прохождения."
    }
  ];


  return (

    <section className="workprocess fade-up">

      <div className="container">

        <h2>
          Как проходит работа
        </h2>

        <p className="work-subtitle">
          Понятный процесс без лишних сложностей
        </p>


        <div className="steps">

          {steps.map((step,index)=>(

            <div className="step-card" key={index}>

              <div className="step-number">
                {step.number}
              </div>


              <h3>
                {step.title}
              </h3>


              <p>
                {step.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}


export default WorkProcess;