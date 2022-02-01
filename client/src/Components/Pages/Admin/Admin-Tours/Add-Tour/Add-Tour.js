import React, { useEffect, useState } from 'react';
import styles from './add-tour.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { hotelsLoad } from '../../../../../redux/features/hotelsReducer';
import { postTour } from '../../../../../redux/features/searchReducer';

const AddTour = () => {

  const hotels = useSelector(state => state.hotelsReducer.hotels)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hotelsLoad())
  }, [])

  const [from, setFrom] = useState('')
  const fromChange = (e) => {
    setFrom(e.target.value)
  }

  const [to, setTo] = useState('')
  const toChange = (e) => {
    setTo(e.target.value)
  }

  const [data, setData] = useState('')
  const dataChange = (e) => {
    setData(e.target.value)
  }

  const [night, setNight] = useState('')
  const nightChange = (e) => {
    setNight(e.target.value)
  }

  const [amount, setAmount] = useState('')
  const amountChange = (e) => {
    setAmount(e.target.value)
  }

  const [price, setPrice] = useState('')
  const priceChange = (e) => {
    setPrice(e.target.value)
  }

  const [hotel, setHotels] = useState('')
  const hotelChange = (e) => {
    setHotels(e.target.value)
  }

  const [image, setImage] = useState('')
  const imageChange = (e) => {
    setImage(e.target.files[0])
  }

  const addTour = () => {
    dispatch(postTour(from, to, data, night, amount, hotel, price, image))
    setHotels('')
    setFrom('')
    setImage('')
    setAmount('')
    setData('')
    setTo('')
    setNight('')
    setPrice('')
  }

  return (
    <div className={ styles.add_tour_main}>
      <h1>Добавление тура</h1>
      <div className={ styles.add_tour_inputs}>
        <input value={ from } onChange={ (e) => fromChange(e)} placeholder='Откуда' type='text'/>
        <input value={ to } onChange={ (e) => toChange(e)} placeholder='Куда' type='text'/>
        <input value={ data } onChange={ (e) => dataChange(e)} placeholder='Дата вылета' type='date'/>
        <input value={ night } className={ styles.number_input} onChange={ (e) => nightChange(e)} placeholder='Количество ночей' type='number'/>
        <input value={ amount } onChange={ (e) => amountChange(e)} placeholder='Количество человек' type='number'/>

        {/*   выпадающее движение для выбора отеля    */}
        <select className={ styles.add_tour_select_hotel} value={ hotel } onChange={ (e) => hotelChange(e)}>
          <option  hidden='Выберите отель' value="Выберите отель">Выберите отель</option>
          { hotels.map((item) => {
            return (
              <option value={ item._id}>{item.name}</option>
            )
          })}
        </select>
        {/*   выпадающее движение для выбора отеля    */}

        <input value={ price } onChange={ (e) => priceChange(e)} placeholder='Цена' type='number'/>
        <input onChange={ (e) => imageChange(e)} type='file'/>
      </div>
      <button
        className={ from && to && data && night && amount && hotel && price && image ? styles.add_tour_button : styles.add_tour_button_disabled }
        disabled={ from && to && data && night && amount && hotel && price && image ? false : true }
        onClick={ () => addTour()}>
        Добавить
      </button>
    </div>
  );
};

export default AddTour;