import React, { useEffect } from "react";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import { deleteCart, userLoad } from "../../../redux/features/profileReducer";
import { cartLoad } from "../../../redux/features/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { GetTurs } from "../../../redux/features/searchReducer";
import { logOut } from "../../../redux/reducerAuthorization";

// страница для Профиля
const Profile = () => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoad(token));
    dispatch(cartLoad());
    dispatch(GetTurs());
  }, []);

  const handleCleanToken = () => {
    dispatch(logOut());
    localStorage.removeItem("token");
  };

  const user = useSelector((state) => state.profReducer.user);

  const cart_Obj = useSelector((state) => state.profReducer.carts);

  const turs = useSelector((state) => state.turReducer.turs);

  // const tur = turs.find((item) => item._id === cart_Obj.tur);

  const handleDeleteCart = () => {
    dispatch(deleteCart(cart_Obj?._id));
  };

  return (
    <div className={styles.Profile__wrapper}>
      {user.map((item) => {
        return (
          <>
            <div className={styles.Profile__wrapper__profBlock}>
              <div className={styles.Profile__wrapper__profBlock__img}>
                <img
                  src="https://cryptor.net/sites/default/files/pictures/picture-425-1516178707.png"
                  alt=""
                />
              </div>
              <div className={styles.Profile__wrapper__profBlock__name}>
                <p>
                  {item.firstName} {item.lastName}
                </p>
              </div>
              <div className={styles.Profile__wrapper__profBlock__email}>
                <p>{item.login}</p>
              </div>
            </div>
            <div className={styles.Profile__wrapper__scroll}>
              <h1>Мои брони:</h1>
              <div className={styles.Profile__wrapper__scroll__order}>
                
                { cart_Obj ? turs.map((tur) => {
                 
                    
                  
                  return cart_Obj?.tur.map((cartTur) => {
                    if (tur._id === cartTur) {
                      return (<>
                        <button className="cart-deleteButton" onClick={() => handleDeleteCart()}>
                        ⨉
                      </button>
                        <div className={styles.container}>
                          <div className={styles.cart}>
                            <div className={styles.block_Turimg}>
                              <img
                                src={`http://localhost:7000/${tur.img}`}
                                alt=""
                              />
                            </div>
                            <div className={styles.block_hotelInfo}>
                              <div className={styles.hotel_cart}>
                                <h4>Откуда: {tur.from}</h4>
                                <h4>Куда: {tur.to}</h4>
                                <h4>Дата вылета: {tur.data}</h4>
                                <h4>Кол-во ночей: {tur.night}</h4>
                                <h4>Количество человек: {tur.night}</h4>
                                <h4>Название Отеля: {tur.hotel.name}</h4>
                                <div className={styles.block_hotelimg}>
                                  <img
                                    src={`http://localhost:7000/${tur.hotel.img}`}
                                    alt=""
                                  />
                                </div>
                                <h2 className={styles.price}>
                                  Цена: {tur.price}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        </>);
                    }
                  });
                }) : <div>Пусто</div>}
              </div>
              <div className={styles.Profile__wrapper__logOut}>
                <Link to="/" onClick={() => handleCleanToken()}>
                  Выйти из аккаунта
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Profile;
