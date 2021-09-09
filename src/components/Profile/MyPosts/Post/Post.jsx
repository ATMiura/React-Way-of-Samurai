import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
      <div className={s.item}>
          <img src='https://i.pravatar.cc/270' alt="" />
          {props.message}
          <div>
              <span>like</span> {props.likesCount}
          </div>
      </div>
  )
};

export default Post;