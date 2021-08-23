import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreatore} from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let PostsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        //proprs.addPost();
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreatore(text);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { PostsElements }
            </div>
        </div>
    )
};

export default MyPosts;