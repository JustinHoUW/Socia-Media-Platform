import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NoProfile } from '../assets';
import moment from 'moment';

const PostCard = ({ posts, user, deletePost, likePost }) => {
  const [showAll, setShowAll] = useState(0);
  const [showReply, setShowReply] = useState(0);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [replyComments, setReplyComments] = useState(0);
  const [showComments, setShowComments] = useState(0);

  return (
    <div style={{}}>
    <div>
      <Link to={"/profile" + posts?.userId?._id}>
        <img
          src={posts?.userId?.profileUrl ?? NoProfile}
          alt={posts?.userId?.firstName}
          style={{ width: '47.408px', height: '47.408px', borderRadius: '90px' }}
        />
        <hr />
      </Link>

      <div>
        <Link to={"/profile" + posts?.userId?._id}>
          <p>
            {posts?.userId?.firstName} {posts?.userId?.lastName}
          </p>
        </Link>
        <span>{posts?.userId?.location}</span>
      </div>

      <span className='text-ascent-2'>
        {moment(posts?.createdAt ?? "2023-05-25").fromNow()}
      </span>
      <div>
      <p>

      {showAll === posts?._id
            ? posts?.description
            : posts?.description.slice(0, 300)}

          {posts?.description?.length > 301 &&
            (showAll === posts?._id ? (
                <span style={{color: 'black'}}
                onClick={() => setShowAll(0)}
              >
                Show Less
              </span>
            ) : (
                <span style={{color: 'black'}}
                onClick={() => setShowAll(posts?._id)}
              >
                &nbsp;Show More
              </span>
            ))}
            </p>
        
        {posts?.image && (
                <img src = {posts?.image}
                alt = "post image"
                style={{ width: '100%', objectFit: 'cover', borderRadius: '9px' }}
                />
            )
        }

      </div>
    </div>
    </div>

  );
}

export default PostCard;
