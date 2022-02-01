import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {useEffect} from 'react';
import { GetByTur } from '../../../redux/features/turDesk';
import { GetTurs } from "../../../redux/features/searchReducer"
import { BuyTur } from "../../../redux/features/profileReducer"
import styles from './hotels.module.css'

const Hotels = () => {
  const token = localStorage.getItem('token')
  const turs = useSelector((state) => state.turReducer.turs);
    const id = useParams('id');
    const filteredTurs = turs.filter((item) => {
      if(item._id === id.id){
        return item
      }
    })
  const dispatch = useDispatch()

  const cart = useSelector(state => state.profReducer.carts)

  console.log(cart)

  const BuyTurs = (turId) => {
    if (!token) {
      alert('Вы не авторизированы')
    }
    dispatch(BuyTur(turId))
  }

  useEffect(() => {
   dispatch( GetTurs())
    dispatch(GetByTur(id))
  },[dispatch, id])

  let star = ""
  return (
    <div>

      {filteredTurs.map((el) => {
        if (el.hotel.rating === 5) {
          star = "⭐⭐⭐⭐⭐";
        }
        if (el.hotel.rating === 4) {
          star = "⭐⭐⭐⭐";
        }
        if (el.hotel.rating === 3) {
          star = "⭐⭐⭐";
        }
        if (el.hotel.rating === 2) {
          star = "⭐⭐";
        }
        if (el.hotel.rating === 1) {
          star = "⭐";
        }
            return(
                <div className={styles.container}>
                  <div className={styles.cart}>
                  <div className={styles.block_Turimg}>
                    <img src={`http://localhost:7000/${el.img}`} alt="" />
                  </div>
                  <div className={styles.block_hotelInfo}>
                    <div className={styles.hotel_cart}>
                    <h4>Откуда: {el.from}</h4>
                    <h4>Куда: {el.to}</h4>
                    <h4>Дата вылета: {el.data}</h4>
                    <h4>Кол-во ночей: {el.night}</h4>
                    <h4>Количество человек: {el.night}</h4>
                    <h4>Рейтинг: {star}</h4>
                    <h4>Название Отеля: {el.hotel.name}</h4>
                    <div className={styles.block_hotelimg}>
                    <img src={`http://localhost:7000/${el.hotel.img}`} alt="" />
                    </div>
                    <h2 className={styles.price}>Цена: {el.price}</h2>
                    <Link to={cart ? '' : !token ? '/authorization' : '/profile'} onClick={ cart ? '' : () => BuyTurs(el._id)} className={ cart ? styles.addToCart_dis : styles.addToCart}>{ cart ? 'Забронировано' : 'Забронировать'}</Link>
                  </div>
                  </div>
                  </div>
                </div>
            )
          })
      }
    </div>
  );
};

export default Hotels;
