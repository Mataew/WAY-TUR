import React from "react";
import styles from "./contacts.module.css";
import gsap from "gsap";
import { useEffect } from "react";

// страница "КОНТАКТЫ"
const Contacts = () => {

  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(".logoSpan", { duration: 0.5, x: -500});
    tl.to(".logoSpan", { duration: 0.5, x: 500});
    tl.from(".logoSpan2", { duration: 0.5, x: -500}, '-=0.8');
    tl.to(".logoSpan2", { duration: 0.5, x: 500}, '-=0.1');
    tl.from(".logo3", { duration: 0.6, x: -500}, '-=0.4');
    tl.to(".logo3", { duration: 0.9, x: 500}, '-=0.3');
    tl.from(".logo2", { duration: 0.6, x: -500}, '-=0.8');
    tl.from(".logo", { duration: 0.6, x: -500}, '-=0.8');
   
  });

  return (
    <div className={styles.mainBlock}>
      <div className={styles.contactUs}>
        <div className={styles.contactUsText}>
          <h1>Свяжитесь с нами</h1>
          <p>
            Хотите ли вы узнать краткую информациию или просто узнать, как
            добраться до офиса, вы можете найти всю необходимую информацию ниже.
          </p>
        </div>
        <div className={styles.contactUsFirstImage}>
          <img
            className="logo"
            src="https://d2jd1xj0qdoqs5.cloudfront.net/craft/uploads/Contact/Contact-Left-Half.jpg?mtime=20190213101134"
          />
           <img className="logo3" src="https://d2jd1xj0qdoqs5.cloudfront.net/craft/uploads/Contact/Contact-Right-Half.jpg?mtime=20190213101135" />
          <img className="logoSpan" src="https://mobile.photoprocenter.ru/files/201503021708115974_0.jpg" />
        </div>
        <div className={styles.contactUsSecondImage}>
          <img className="logo2" src="https://d2jd1xj0qdoqs5.cloudfront.net/craft/uploads/Contact/Contact-Right-Half.jpg?mtime=20190213101135" />
          <img className="logoSpan2" src="https://mobile.photoprocenter.ru/files/201503021708115974_0.jpg" />
        </div>
      </div>
      <div className={styles.findUs}>
        <div className={styles.findUsAdress}>
          <h1>Как нас найти</h1>
          <p>г. Грозный, <br/> ул. Трошева, дом 7, <br/> 3 этаж, кабинет № 12</p>
        </div>
        <div className={styles.findUsGetInTouch}>
          <h1>Как с нами связаться</h1>
          <p>Наша почта: vaytur@mail.ru</p>
          <p>Номер для связи: +7(999)-999-99-99</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
