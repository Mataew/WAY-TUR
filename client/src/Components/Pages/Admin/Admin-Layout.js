import React from 'react';
import AdminInfo from './Admin-Info/Admin-Info';
import { Outlet } from 'react-router-dom';
import styles from './admin.module.css';

const AdminLayout = () => {
  return (
    <div className={ styles.admin_main }>
      <AdminInfo />
      <Outlet />
    </div>
  );
};

export default AdminLayout;