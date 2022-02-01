import React from 'react';
import styles from './company.module.css'
// СТРАНИЦА "О КОМПАНИИ"

const Company = () => {
  return (
    <div className={styles.container}>
      <div className={ styles.container_photo }>
        <h1>О компании</h1>
        <div className={styles.wrapper}>
          <div className={styles.text__block }>
            <p>
              Компания «VayTur» работает с 2002 года.
              Сейчас это крупная сеть туристических агентств в <span className={styles.text__color}>Москве,
          Санкт-Петербурге и крупных городах России и СНГ</span>. Все <span className={styles.text__color}>офисы «VayTur»</span> работают по единому стандарту качества, с единой <span className={styles.text__color}>on-line базой туров</span>.
            </p>
            <p>С 2014 года «VayTur» входит в состав группы компаний TBS Group.
              TBS Group объединяет несколько известных брендов, работающих в турбизнесе, и имеет большую базу агентств и клиентов.
              В группу компаний входят: Крупнейший Центр бронирования туров, сети туристических агентств «TBS», «VayTur», «Мастер отдыха», система поиска
              и бронирования туров ruSPO.ru, онлайн каталог туров Avianta, электронный каталог отелей, основанный на отзывах и фотографиях туристов – HotelOut,
              популярнейший Интернет-каталог – Turizm.ru.</p>
          </div>
          <div className={styles.img_wrap}><img src="https://cs7.pikabu.ru/post_img/big/2018/10/08/11/1539025979130393239.jpg" alt=""/></div>
        </div>
      </div>
      
      
      <div className={styles.content}>
        <div className={styles.content_text}>
            <div className={styles.content_title}>Отели</div>
          <p>С VayTur вы всегда найдете идеально подходящий вариант проживания. Огромное количество отелей, апартаментов и гостевых домов по всему миру гарантированно предоставляют места для наших туристов в любое время.</p>
        </div>
        <div className={styles.content_img}><img src="https://t-ec.bstatic.com/images/hotel/max1024x768/369/36971899.jpg" alt=""/></div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_text}>
          <div className={styles.content_title}>Актуальные направления</div>
          <p> VayTur продолжает развиваться и открывать для туристов самые необычные направления, маршруты и типы отдыха.
          </p>
        </div>
        <div className={styles.content_img}><img src="https://basetop.ru/wp-content/uploads/2018/01/Beaches23-696x435.jpg" alt=""/></div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_text}>
          <div className={styles.content_title}>Круглосуточная поддержка</div>
          <p>Специалисты собственных офисов VayTur в разных странах помогут с решением любых вопросов в путешествии — от встречи в аэропорту и проведения экскурсии до помощи при наступлении страхового случая, а сотрудники колл-центра обеспечат максимально оперативную поддержку туристов.</p>
        </div>
        <div className={styles.content_img}><img src="https://static6.depositphotos.com/1000765/555/i/600/depositphotos_5551522-stock-photo-3d-small-call-center.jpg" alt=""/></div>
      </div>

    </div>
  );
};

export default Company;
