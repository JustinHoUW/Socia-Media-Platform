import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { BsImage } from 'react-icons/bs';
import { BiSolidVideo } from "react-icons/bi";
import { BsFiletypeGif } from 'react-icons/bs';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import FriendsCard from '../components/FriendsCard';
import PostCard from '../components/PostCard';
import '../Home.css';
import { friends } from '../assets/data';
import { Link } from 'react-router-dom';
import { NoProfile } from '../assets';
import { suggest, requests, posts } from "../assets/data";
import { CustomButton, Loading, TextInput } from '../components';
import { BsPersonFillAdd } from 'react-icons/bs';

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const [friendRequest, setFriendRequest] = useState(requests);
  const [suggestedFriends, setSuggestedFriends] = useState(suggest);
  const [errMsg, setErrMsg] = useState("");
  const [file, setFile] = useState(null);
  const [posting, setPosting] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const handlePostSubmit = async (data) => { }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  };

  return (
    <>

      {/* LEFT */}
      <div className='card text-white bg-primary mb-3' style={{ width: '17%', marginLeft: '10%', marginTop: '15px', display: 'flex' }}>
        <ProfileCard user={user} />
      </div>


      <hr className="my-2" />
      <div className='card text-white bg-primary mb-3' style={{ width: '17%', marginLeft: '10%', marginTop: '-15px', display: 'flex' }}>

        <FriendsCard friends={user?.friends} />

      </div>

      {/* CENTER */}
      <div style={{
        width: '46%',
        height: '600px',
        marginTop: '-790px',
        marginLeft: '27%',
        display: 'flex',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        overflowY: 'auto'
      }}>



        <div style = {{marginLeft: '-12px'}}>
        <form onSubmit={handleSubmit(handlePostSubmit)}>
          <img
            style={{ width: '85.335px', height: '85.335px', borderRadius: '90px' }}
            src={user?.profileUrl ?? NoProfile}

            alt='User Image'
          />
          <TextInput
            class="form-control" id="readOnlyInput"
            name="description"

            placeholder='Whats on your mind...'
            register={register("description", {
              required: "Write something about post",
            })}
            error={errors.description ? errors.description.message : ""}
          />
          {errMsg?.message && (
            <span className={`text-sm ${errMsg?.status === "failed" ? "text-[#f64949fe]" : "text-[#2ba150fe]"}`}>
              {errMsg?.message}
            </span>
          )}




          <hr style={{ width: '800px', border: '1px solid black' }} />
          <div>
            <label htmlFor='imgUpload' style={{ cursor: 'pointer' }}>

              <BsImage />
              <span>Image</span>
              <input type='file'
                onChange={(e) => setFile(e.target.files[0])}
                className='hidden'
                id='imgUpload'
                data-max-size='5120'
                accept='.jpg .png, .jpeg'
                style={{ display: 'none' }}
              />
            </label>
            {file && <div>{file.name}</div>}
          </div>

          <div>
            <label htmlFor='videoUpload' style={{ cursor: 'pointer' }}>

              <BiSolidVideo />
              <span>Video</span>
              <input
                type='file'
                data-max-size='5120'
                onChange={(e) => setFile(e.target.files[0])}
                className='hidden'
                id='videoUpload'
                accept='.mp4, .wav'
                style={{ display: 'none' }}
              />
            </label>
            {file && <div>{file.name}</div>}
          </div>

          <div>
            <label htmlFor='vgifUpload' style={{ cursor: 'pointer' }}>

              <BsFiletypeGif />
              <span>Gif</span>
              <input
                type='file'
                data-max-size='5120'
                onChange={(e) => setFile(e.target.files[0])}
                className='hidden'
                id='vgifUpload'
                accept='.gif'
                style={{ display: 'none' }}
              />
            </label>
            {file && <div>{file.name}</div>}
          </div>

          <div>
            {posting ? (
              <Loading />
            ) : (
              <CustomButton
                type='submit'
                title='Post'
                containerStyles="btn btn-outline-dark"
              />
            )}
          </div>

          {loading ? (<Loading />) : posts?.length > 0 ? (
            posts?.map((posts) => (
              <PostCard key={posts?._id} posts={posts}

                user={user}
                deletePost={() => { }}
                likePost={() => { }}
              />
            ))
          ) : (
            <p>No Post Available</p>
          )}

        </form>

        </div>



      </div >

      {/* RIGHT */}
      < div className='card text-white bg-primary mb-3' style={{ width: '17%', marginTop: '-600px', marginLeft: '73%', display: 'flex', flexDirection: 'column' }}>
        {/* Friend Request */}
        < span > Friend Request: {friendRequest?.length}</span >
        {friendRequest?.map(({ _id, requestFrom: from }) => (
          <div key={_id} style={{ display: 'flex', alignItems: 'center' }}>
            <Link to={"/profile/" + from._id}>
              <img
                src={from?.profileUrl ?? NoProfile}
                alt={from?.firstName}
                style={{ width: '42.6675px', height: '42.6675px', borderRadius: '90px' }}
              />
            </Link>
            <div style={{ marginLeft: '10px' }}>
              <p class="text-primary-emphasis" style={{ marginBottom: '3px', fontSize: '14px' }}>{from?.firstName} {from?.lastName}</p>

              <span >{from?.profession ?? "No Profession"}</span>

              <br />
              <br />


            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <CustomButton title='Accept' containerStyles="btn btn-outline-primary" styles={{ fontSize: '10px' }}>

              </CustomButton>
              <CustomButton title='Deny' containerStyles="btn btn-outline-light" styles={{ fontSize: '10px' }}>

              </CustomButton>
            </div>
          </div>

        ))}



      </div >
      {/* Suggested Friends */}
      < div class="card text-white bg-primary mb-3" style={{ width: '17%', marginLeft: '73%', display: 'flex', flexDirection: 'column', marginTop: '-11px', height: '300px' }}>
        <p class="text-light">Suggested Friends</p>


        {
          suggestedFriends?.map((friend) => (
            <div key={friend._id} style={{ display: 'flex', alignItems: 'center' }}>
              <Link to={"/profile/" + friend._id}>
                <img
                  style={{ width: '42.6675px', height: '42.6675px', borderRadius: '90px' }}
                  src={friend.profileUrl ?? NoProfile}
                  alt={friend.firstName}
                />
              </Link>
              <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontSize: '12px', margin: 0 }}>{friend.firstName} {friend.lastName}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => { }}
                  >
                    <BsPersonFillAdd size={16} />
                  </button>
                </div>
                <span>{friend.profession ?? "No Profession"}</span>
              </div>
            </div>


          ))
        }
      </div >


      <div>
      </div>

    </>
  )
}

export default Home;