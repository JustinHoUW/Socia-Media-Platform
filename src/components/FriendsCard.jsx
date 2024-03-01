import React from 'react'
import { Link } from 'react-router-dom'
import { NoProfile } from '../assets'

const FriendsCard = ({ friends }) => {
    return (
        <div style={{marginLeft: '15px'}}>
            <hr className="my-2" />
            <span>Friends</span>
            <Link to={"/profile/" + friends?.id} style={{ textDecoration: 'none' }}>: </Link>
            <span>{friends?.length}</span>

            {friends?.map((friend) => (
                <div> {/* Moved key attribute here */}
                    <Link to={"/profile/" + friend?._id} style={{ textDecoration: 'none' }} key={friend?._id}
                    >
                        <img
                            src={friend?.profileUrl ?? NoProfile}
                            alt={friend?.firstName}
                            style={{ width: '85.335px', height: '85.335px', borderRadius: '90px' }}
                        />
                    </Link>
                    <hr className="my-2" />
                    <div>
                        <Link to={"/profile/" + friend?._id} style={{ textDecoration: 'none', textDecorationStyle: 'none' }}>
                            {friend?.firstName} {friend?.lastName}
                        </Link>
                        <hr className="my-1" />
                        <span>
                            {friend?.profession ?? "No Profession"}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default FriendsCard;
