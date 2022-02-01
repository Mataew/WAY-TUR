import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import turReducer, {
  deleteTour,
  GetTurs,
  updateTours
} from '../../../../redux/features/searchReducer';
import styles from './admin-tours.module.css'
import AddTour from './Add-Tour/Add-Tour';
import { Link } from 'react-router-dom';

const AdminTours = () => {

  const [handleInput, setHandleInput] = useState(false)

  const [inputFrom, setInputFrom] = useState('')
  const inputFromChange = (e) => { // функция для оживления инпута ОТКУДА
    setInputFrom(e.target.value)
  }

  const [inputTo, setInputTo] = useState('') // функиця для ожилвения инпута Куда
  const inputToChange = (e) => {
    setInputTo(e.target.value)
  }

  const [inputPrice, setInputPrice] = useState() // функция для оживения инпута ЦЕНЫ
  const inputPriceChange = (e) => {
    setInputPrice(e.target.value)
  }

  const updateInputs = (id, inputFrom, inputTo, inputPrice) => {
    dispatch(updateTours(id, inputFrom, inputTo, inputPrice))
    setHandleInput(false)
  }

  const tours = useSelector(state => state.turReducer.turs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetTurs())
  }, [dispatch])

  const deleteTours = (id) => { // удаление тура
    dispatch(deleteTour(id))
  }
  const handleCheckInput = (id) => { // перключатель стейта на кнопке изменить
    setHandleInput(!handleInput)
  }

  return (
    <div className={ styles.admin_tours_wrapper}>
      { tours.map((item) => {
        return (
          <div className={ styles.tours_cards_wrapper }>
            <img src={`http://localhost:7000/${item.img}`}  alt="daun"/>
            <h3 className={ styles.tours_cards_title}>{item.to}</h3>
            <div className={ styles.hover_display }>
              <div>ОТКУДА: { handleInput ? <input value={ inputFrom } onChange={ (e) => inputFromChange(e)} type='text' className={ styles.update_input}/> :  item.from }</div>
              <div>КУДА: { handleInput ? <input value={ inputTo } onChange={ (e) => inputToChange(e)} type='text' className={ styles.update_input}/> : item.to}</div>
              <div>ЦЕНА: { handleInput ? <input value={ inputPrice } onChange={ (e) => inputPriceChange(e)} type='number' pattern='^[ 0-9]+$' className={ styles.update_input}/> : item.price}</div>
              { handleInput ?
                <>
                  <button onClick={ () => updateInputs(item._id, inputFrom, inputTo, inputPrice)}>Отправить</button>
                  <button onClick={ handleCheckInput}>Отменить</button>
                </>
                :
                <>
                  <button className={ styles.update_button }  onClick={ handleCheckInput }>ИЗМЕНИТЬ</button>
                  <button className={ styles.delete_tour } onClick={ () => deleteTours(item._id)}>УДАЛИТЬ</button>
                </>
              }
            </div>
          </div>
        )
      })}
      <div className={ styles.add_tour }>
        <Link to='/admin/addTours'>+</Link>
      </div>
    </div>
  );
};

export default AdminTours;