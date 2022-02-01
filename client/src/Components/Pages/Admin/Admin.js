import React  from 'react';
import styles from './admin.module.css'
import AdminInfo from './Admin-Info/Admin-Info';

const Admin = () => {
  return (
    <div className={ styles.admin_main }>
      <AdminInfo />
    </div>


  );
};

export default Admin;