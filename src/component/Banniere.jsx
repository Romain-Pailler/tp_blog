import React from 'react';
import logo from '../assets/logo_blogeo.png';
import '../style/Banniere.css';
function Banniere(props){
    let name = props.nom;
    return (
    <div className="banniere">
        <img src={logo} className='img_logo' alt='logo du site' />
        <h1>Bienvenue sur Blogeo:{name} </h1>
    </div>
    );
}
export default Banniere;