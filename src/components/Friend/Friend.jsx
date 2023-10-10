import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {

    const { email, name, id, phone } = props.friend;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/friend/${id}`);
    }

    return (
        <div style={{
            border: '2px solid black', padding: '15px', margin: '10px'
        }}>
            <h3>Their name is : {name}</h3>
            <h3>Their roll is : {id}</h3>
            <h3>Their phone is : {phone}</h3>
            <h3>Their email is : {email}</h3>
            <Link to={`/friend/${id}`} key="id">And his details is here</Link>
            <button onClick={handleNavigation}>See Details</button>
        </div >
    );
};

export default Friend;