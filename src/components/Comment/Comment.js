import React from 'react';
// import image from '../../fakeData';
import './Comment.css';

const Comment = (props) => {
    // const [images, setImages] = useState([]);
    const {email, body} = props.comment;

    return (
        <div className="comment">
            <div>
                {/* <img src="" alt=""/> */}
            </div>
            <div>
                <p>Email : {email}</p>
                <p>Comment : {body}</p>
            </div>
        </div>
    );
};

export default Comment;