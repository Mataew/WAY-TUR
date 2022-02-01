import React, { useEffect, useState } from 'react';
import styles from './admin-users.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {
  addAdminUser,
  deleteAdminUser,
  deleteUser,
  getUsers
} from '../../../../redux/features/usersReducer';

const AdminUsers = () => {

  const users = useSelector(state => state.usersReducer.users)
  const loadingUsers = useSelector(state => state.usersReducer.loading)

  console.log(users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])


  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id))
  }


  return (
    <div className={ styles.admin_users}>
      <div className={ styles.info_title}>
        <div className={ styles.login_title }>ЛОГИН ПОЛЬЗОВАТЕЛЯ</div>
        <div className={ styles.firstName_title }>ИМЯ</div>
        <div className={ styles.lastName_title }>ФАМИЛИЯ</div>
        <div className={ styles.delete_title }></div>
      </div>

      { !users ? 'Нет пользователей' : loadingUsers ? 'Грузятся пользователи' :
        users.map((item) => {
          return (
            <div className={ styles.info}>
              <div className={ styles.login }>{item.login}</div>
              <div className={ styles.firstName }>{item.firstName}</div>
              <div className={ styles.lastName }>{item.lastName}</div>
              <div className={ styles.delete }><button onClick={ () => handleDeleteUser(item._id)}>X</button></div>
            </div>
          )
        })}
    </div>
  );
};

export default AdminUsers;