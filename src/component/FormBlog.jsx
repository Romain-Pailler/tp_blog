import React, { useState } from 'react';
import '../style/FormBlog.css';


export default function FormBlog(props) {
let input_name = props.input_name;
let setInputName = props.setInputName;
const [input_commentaire, setInputCommentaire]= useState('');
const [input_mail, setInputMail]= useState('');
let InputErrorNumber = input_mail.includes("@");
  return (
    <div className='formContainer'>
        <form className='form'>
            <input type="text" name="mon_nom" id="nom" placeholder='Votre nom' onChange={(e)=> setInputName(e.target.value)}/>
            <input type="text" name="mon_commentaire" id="commentaire" placeholder='Votre commentaire' onChange={(e)=> setInputCommentaire(e.target.value)}/>
            <input type="text" name="mon_mail" id="mail" placeholder='Votre adresse mail' onChange={(e)=> setInputMail(e.target.value)} />
            {InputErrorNumber ?
                <button type="submit" onClick={()=>alert(input_name + " " + input_commentaire)}>
                    Valider votre commentaire
                </button>
                :
                <div>
                    Veuillez utiliser @ dans votre adresse mail
                </div>
                }
        </form>
    </div>
  )
}
