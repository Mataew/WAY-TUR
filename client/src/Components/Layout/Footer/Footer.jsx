import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerProfile}>
        <a href="/">Личный кабинет</a>
      </div>
      <div className={styles.footerInfo}>
        <div className={styles.footerInfoHelp}>
        <a href="/">Помощь и инфорнмация</a>
        <a href="/">Где купить</a>
        <a href="/">Страны</a>
        <a href="/">Новости</a>
        <a href="/">Отдых без границ</a>
        </div>
        <div className={styles.footerInfoBlock}>
        <h1>Информация</h1>
        <a href="/">Виза</a>
        <a href="/">Страхование</a>
        <a href="/">Памятка туристам</a>
        <a href="/">Доплаты</a>
        <a href="/">Как оплатить тур</a>
        </div>
        <div className={styles.footerAboutCompany}>
        <h1>О компании</h1>
        <a href="/">Общая информация</a>
        <a href="/">Контакты</a>
        <a href="/">Соглашение о конфиденциальности</a>
        </div>
        <div className={styles.footerContacts}>
        <h1>Контакты</h1>
        <a href="/">8 800 777 77 77</a>
        <a href="/">8 800 800 80 80</a>
        <div className={styles.footerSocialMedia}>
        <h3>Мы в соцсетях</h3>
        <a href="/">
        <img src="https://stickerboom.ru/files/2016/05/11/4165xcabc-300x300.png" alt="" />
        </a>
        <a href="/">
          <img src="https://image.flaticon.com/icons/png/512/21/21155.png" alt="" />
        </a>
        <a href="/">
          <img src="https://pngimg.com/uploads/vkontakte/small/vkontakte_PNG28.png" alt="" />
        </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;