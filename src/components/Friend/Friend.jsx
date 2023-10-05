import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {

    const { email, name, id, phone } = props.friend;

    return (
        <div style={{
            border: '2px solid black', padding: '15px', margin: '10px'
        }}>
            <h3>Their name is : {name}</h3>
            <h3>Their roll is : {id}</h3>
            <h3>Their phone is : {phone}</h3>
            <h3>Their email is : {email}</h3>
            <Link to={`/friend/${id}`} key="id">And his details is here</Link>
        </div >
    );
};

export default Friend;