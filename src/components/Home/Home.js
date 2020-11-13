import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
    return (
        <div>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    );
};

export default Home;