import React from 'react';
import '../style/UserCard.css';
function UserCard() {
    const Users = ['Bryan','Rafael','Marko','David','Romain'];
    return (
        <ul className='list_blue_card'>
            {Users.map((user) => (
                <li className='blue_card'>{user}</li>
            ))}
        </ul>
    )
}
export default UserCard;
