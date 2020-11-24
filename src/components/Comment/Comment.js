import React from 'react';
import './Comment.css';

const Comment = (props) => {
    const {id, email, body} = props.comment;
    return (
        <div className="comment">
            <div className="comment_image">
                <img src={`https://picsum.photos/120/120?=${id}`} alt=""/>
            </div>
            
            <div className="comment_info">
                <p>Email : {email}</p>
                <p>Comment : {body}</p>
            </div>
        </div>
    );
};

export default Comment;