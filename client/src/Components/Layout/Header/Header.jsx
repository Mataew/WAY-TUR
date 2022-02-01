import React, { useEffect } from 'react';
import styles from './header.module.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { onlyUser } from '../../../redux/features/profileReducer';
const Header = () => {

  const dispatch = useDispatch()

  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(onlyUser(token))
  }, [dispatch, token])
  const user = useSelector(state => state.profReducer.onlyUser)

  return (
    <header>
      <ul className={ styles.nav }>
        <li className={ styles.nav_item}><NavLink to='/info'>ПОЛЕЗНАЯ ИНФОРМАЦИЯ</NavLink></li>
        <li className={ styles.nav_item}><NavLink to='/company'>О КОМПАНИИ</NavLink></li>
        <li><Link to='/'><img className={ styles.header_logo } src={ logo } alt=""/></Link></li>
        <li className={ styles.nav_item}><NavLink to='/contacts'>КОНТАКТЫ</NavLink></li>
      </ul>
      { token ? user.role === 'User' ? <a className={ styles.button_profile} href='/profile'>ПРОФИЛЬ</a> : <a className={ styles.button_profile} href='/admin'>АДМИНКА</a> : <Link to='/authorization' className={ styles.authorization }>ВОЙТИ</Link>}
    </header>
  );
};

export default Header;