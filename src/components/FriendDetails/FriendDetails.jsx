import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {

    const friend = useLoaderData();
    const { name, id, phone, email } = friend;

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Id: {id}</h3>
            <h3>Email: {email}</h3>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>3
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default FriendDetails;