import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormControls/FormControls";

const MyPosts = React.memo(props => {

    let PostsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostReduxFrom onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    )
});

const maxLengthCreator10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'Post message'} name={'newPostText'} validate={[required, maxLengthCreator10]} />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
};

const AddNewPostReduxFrom = reduxForm({
    form: 'ProfileAddNewPostForm',
})(AddNewPostForm);

export default MyPosts;