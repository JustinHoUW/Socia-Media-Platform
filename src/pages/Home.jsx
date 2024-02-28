import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import FriendsCard from '../components/FriendsCard';

const Home = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();



  return ( 
    <>
    {/* LEFT */}
    <ProfileCard user = {user} />
    <FriendsCard friends = {user?.friends} />
    {/* CENTER */}
    <div></div>
    {/* RIGHT */}

    </>
  )
}

export default Home 