import React from 'react';
import '../style/UserCard.css';
import Rating from './Rating';
function UserCard() {
    const Users = [
        {id:0,nom:'Bryan',commentaire:"They don't know me son",connaissance:true,star:5,smiley:4},
        {id:1,nom:'Rafael',commentaire:'Big flemme et au lit',connaissance:false,star:1,smiley:5},
        {id:2,nom:'Marko',commentaire:'Sandwich pouli',connaissance:false,star:2,smiley:3},
        {id:3,nom:'David',commentaire:'Haaland',connaissance:true,star:4,smiley:1},
        {id:4,nom:'Romain',commentaire:"C'est mwa",connaissance:true,star:3,smiley:2}];
    return (
        <ul className='list_blue_card'>
            {Users.map((user,index) => (
                <li key={`${user}-${index}`} className={index%2===0 ? 'blue_card' : 'white_card'}>
                    <h3>{user.nom}</h3>
                    <p>{user.commentaire}</p>
                    <p> Blague : </p><Rating ratingValue="smiley" value={user.smiley}/>
                    <p> Note :</p><Rating ratingValue="star" value={user.star}/>
                    <button>
                        {user.connaissance ? "Suivi" : "Suivre"}
                    </button>
                    </li>
            ))}
        </ul>
    )
}
export default UserCard;
