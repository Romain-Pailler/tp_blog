import React from 'react';
import '../style/Footer.css';
function Footer() {
    const phone_number = "06.12.34.56.78";
    const site = "https://ecole-ipssi.com/";
    let text = "All right deserved";
  return (
    <footer>
        <div className='div_list'>
            <h2>Compléments d'informations</h2>
            <ul>
                <li>{phone_number}</li>
                <li>site officiel:  
                    <a href={site}>IPSSI</a>
                </li>
                <li>{text}</li>
            </ul>
        </div>
    </footer>
  )
}
export default Footer;
