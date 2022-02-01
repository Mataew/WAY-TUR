import React, { useEffect } from 'react';
import Slider from './Slider/Slider';
import Search from './Search/Search';
import { useDispatch } from 'react-redux';
import { userLoad } from '../../../redux/features/profileReducer';

const Main = () => {
  const dispatch = useDispatch()

  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(userLoad(token))
  }, [])
  return (
    <div>
      <Slider />
      <Search />
    </div>
  );
};

export default Main;