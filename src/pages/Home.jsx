import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();



  return ( 
    <div>Home</div>
  )
}

export default Home 