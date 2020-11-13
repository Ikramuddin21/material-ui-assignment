import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './UserDetail.css';

const UserDetail = () => {
    
    const {userId} = useParams();
    const [singleUser, setSingleUser] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(res => res.json())
        .then(data => setSingleUser(data));
    }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
        .then(res => res.json())
        .then(data => setComments(data));
    }, []);

    const {id, title, body} = singleUser;

    return (
        <div>
            <div className="userDetail">
                <h2>User Detail Information</h2>
                <h3>User id : {id}</h3>
                <h3>Title : {title}</h3>
                <h3>Body : {body}</h3>
            </div>
            <div className="comments">
                <h3>See Comments</h3>
                {
                    comments.map(comment => <Comment 
                        comment = {comment}
                        key = {comment.id}
                    ></Comment>)
                }
            </div>
        </div>
    );
};

export default UserDetail;