import React from "react";
import { Link } from 'react-router-dom';
import { NoProfile } from "../assets";
import { AiOutlineEdit, AiTwotoneEdit } from "react-icons/ai";
import { BsFacebook, BsPersonFillAdd, BsInstagram, BsBriefcase } from 'react-icons/bs';
import { CiLocationOn } from "react-icons/ci";
import moment from "moment";
import { FaTwitter } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import '../ProfileCard.css';
import { UpdateProfile } from "../redux/userSlice";


const ProfileCard = ({ user }) => {
    const dispatch = useDispatch();
    const { user: data, edit } = useSelector((state) => state.user);

    return (
        <>
            <hr className="my-4" />
            <div style={{ marginLeft: '15px' }}>
                <Link to={"/profile/" + user?.id} style={{ textDecoration: 'none' }}>

                    <img src={user?.profileUrl ?? NoProfile} alt={user?.email} style={{ width: '85.335px', height: '85.335px', borderRadius: '90px' }}></img>

                    {user?.firstName} {user?.lastName}
                </Link >
                {user?._id == data?._id ? (
                    <AiTwotoneEdit
                        style={{ textDecoration: 'none' }}
                        size={22}
                        onClick={() => dispatch(UpdateProfile(true))}
                    />
                ) : (
                    <button
                        style={{ color: 'blue' }}

                        onClick={() => { }}>
                        <BsPersonFillAdd size={20} />
                    </button>
                )}

                <div>
                    <CiLocationOn></CiLocationOn>
                    <span>{user?.location ?? "Add Location"}</span>
                </div>

                <div>
                    <BsBriefcase />
                    <span>{user?.profession ?? "Add Profession"}</span>



                </div>



                <p>
                    {user?.friends?.length} Friends
                </p>

                <div>
                    <span>
                        Who viewed your profile&nbsp;
                    </span>
                    <span>
                        {user?.views?.length}
                    </span>

                    <hr className="my-4" />

                    <span>
                        {user?.verified ? "Verified Account" : "Not Verified"}
                    </span>

                    <div>
                        <span>Joined </span>
                        <span>
                            {moment(user?.createAt).fromNow()}
                        </span>
                    </div>
                </div>
                <div>
                    <p>Social Profile</p>

                    <BsInstagram />
                    <span>Instagram</span>
                </div>
                <div>
                    <FaTwitter />
                    <span>Twitter</span>
                </div>
                <div>
                    <BsFacebook />
                    <span>Facebook</span>
                </div>

        </div>
        </>
    )
};

export default ProfileCard; 