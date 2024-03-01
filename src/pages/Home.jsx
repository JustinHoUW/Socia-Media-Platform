import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import FriendsCard from '../components/FriendsCard';
import '../Home.css';
import { friends } from '../assets/data';
import { Link } from 'react-router-dom';
import { NoProfile } from '../assets';
import { suggest, requests, posts } from "../assets/data";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const [friendRequest, setFriendRequest] = useState(requests);
  const [suggestedFriends, setSuggestedFriends] = useState(suggest);


  return (
    <>
      {/* LEFT */}
      <div className='card text-white bg-primary mb-3' style={{ width: '20%', marginLeft: '7%', marginTop: '15px', display: 'flex' }}>
        <ProfileCard user={user} />
      </div>


      <hr className="my-2" />
      <div className='card text-white bg-primary mb-3' style={{ width: '20%', marginLeft: '7%', marginTop: '-15px', display: 'flex' }}>

        <FriendsCard friends={user?.friends} />

      </div>

      {/* CENTER */}
      <div className="card bg-light mb-3" style={{
        height: '600px', width: '46%',
        marginTop: '-992px',
        marginLeft: '27%',
        display: 'flex'
      }}>

      </div>

      {/* RIGHT */}
      <div className='card text-white bg-primary mb-3' style={{ width: '20%', marginTop: '-615px', marginLeft: '73%', display: 'flex' }}>

        {/* Friend Request */}
        <span>Friend Request</span>
        <span> {friendRequest?.length}</span>
        {/* Suggested Friends */}
        {friendRequest?.map(({ _id, requestFrom: from }) => (
          <div key={_id}>
            <Link to={"/profile/" + from._id}>

              <img
                src={from?.profileUrl ?? NoProfile}
                alt={from?.firstName}
                style={{ width: '85.335px', height: '85.335px', borderRadius: '90px' }}

              />

              <p>
                {from?.firstName} {from?.lastName}
              </p>
              <span>
                {from?.profession ?? "No Profession"}
              </span>
            </Link>
          </div>
        ))}
      </div>

      <div>
      </div>

    </>
  )
}

export default Home;
