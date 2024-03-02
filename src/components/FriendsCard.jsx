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
                <div style={{ display: 'flex', alignItems: 'center' }} key={friend?._id}>
                    <Link to={"/profile/" + friend?._id} style={{ textDecoration: 'none' }}
                    >
                        <img
                            src={friend?.profileUrl ?? NoProfile}
                            alt={friend?.firstName}
                            style={{ width: '85.335px', height: '85.335px', borderRadius: '90px' }}
                        />
                    </Link>
                    <div style={{ marginLeft: '10px' }}> {/* Added marginLeft for spacing */}
                        <div>
                            <Link to={"/profile/" + friend?._id} style={{ textDecoration: 'none', textDecorationStyle: 'none' }}>
                                {friend?.firstName} {friend?.lastName}
                            </Link>
                        </div>
                        <div>
                            <span>
                                {friend?.profession ?? "No Profession"}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default FriendsCard;
