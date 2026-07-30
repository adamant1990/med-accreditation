import "./../styles/reviews.css";


function Reviews() {

  const reviews = [
    {
      name: "Анна Петрова",
      profession: "Медицинская сестра",
      text: "Помогли разобраться с документами и подготовить портфолио. Все объяснили простым языком, аккредитацию прошла успешно.",
      rating: "★★★★★"
    },
    {
      name: "Илья Смирнов",
      profession: "Фельдшер",
      text: "Обратился за сопровождением. Получил поддержку на всех этапах, ответы были быстрые и понятные.",
      rating: "★★★★★"
    },
    {
      name: "Елена Васильева",
      profession: "Врач",
      text: "Очень удобно, что не пришлось самостоятельно разбираться во всех требованиях. Спасибо за помощь.",
      rating: "★★★★★"
    }
  ];


  return (

    <section id="reviews" className="reviews fade-up">

      <div className="container">

        <h2>
          Отзывы клиентов
        </h2>


        <p className="reviews-subtitle">
          Нам доверяют медицинские специалисты
        </p>


        <div className="reviews-grid">


          {reviews.map((review,index)=>(

            <div className="review-card" key={index}>


              <div className="rating">
                {review.rating}
              </div>


              <p className="review-text">
                {review.text}
              </p>


              <h3>
                {review.name}
              </h3>


              <span>
                {review.profession}
              </span>


            </div>

          ))}


        </div>


      </div>

    </section>

  );

}


export default Reviews;