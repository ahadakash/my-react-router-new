import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {

    const friend = useLoaderData();
    const { name, id, phone, email } = friend;

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Id: {id}</h3>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
        </div>
    );
};

export default FriendDetails;