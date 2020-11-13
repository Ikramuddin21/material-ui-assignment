import React from 'react';
import './Comment.css';

const Comment = (props) => {
    const {email, body} = props.comment;

    return (
        <div className="comment">
            <div>
                {/* image area */}
            </div>
            <div>
                <p>Email : {email}</p>
                <p>Comment : {body}</p>
            </div>
        </div>
    );
};

export default Comment;